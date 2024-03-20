import { createStore } from 'vuex'
import { getFirestore, doc, updateDoc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';

// Firebase Importe
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    userUID: null,
    tasks: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state changed:', state.user);
    },
    setUserUID(state, uid) {
      state.userUID = uid;
      console.log('User UID set to:', uid);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
      console.log('Tasks set in Vuex store:', tasks);
    },
    updateTaskProgress(state, { taskId, progress }) {
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].progress = progress;
      }
    }
  },
  actions: {
    async signup(context, { email, password }) {
      console.log('signup action');
    
      try {
        const authRes = await createUserWithEmailAndPassword(auth, email, password);
        const user = authRes.user;
    
        // Benutzerdaten in Firestore speichern
        const db = getFirestore();
        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(userDocRef, { email });
    
        // Beispiel: Erstellen von Aufgaben für den neuen Benutzer
        const tasksCollectionRef = collection(db, 'users', user.uid, 'tasks');
        // Verwende eine feste Aufgaben-ID für die Aufgabe 1
        await setDoc(doc(tasksCollectionRef, 'E7jR9ufXzLp5ah2qKbW3'), { name: 'Task1', progress: 0 });
        await setDoc(doc(tasksCollectionRef, 'MY6m4tsFKn2twm8qKabW'), { name: 'Task2', progress: 0 });
        await setDoc(doc(tasksCollectionRef, 'Hx4m8tkFVn2wLb6sQaZ9'), { name: 'Task3', progress: 0 });
        await setDoc(doc(tasksCollectionRef, 'P3n7qsRGyJt5wm2aKbW8'), { name: 'Task4', progress: 0 });
        await setDoc(doc(tasksCollectionRef, 'Tc2x5jpYgHw9Ln4qKsF6'), { name: 'Task5', progress: 0 });
        // Weitere Aufgaben hinzufügen, wenn nötig
    
        // Benutzerdaten im Store aktualisieren
        context.commit('setUser', user);
        context.commit('setUserUID', user.uid);
      } catch (error) {
        throw new Error('could not complete signup');
      }
    },
    async login(context, { email, password }) {
      console.log('login action', email);

      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
        context.commit('setUserUID', res.user.uid);
      } else {
        throw new Error('could not complete login');
      }
    },
    async logout(context) {
      console.log('logout action');

      await signOut(auth);

      context.commit('setUser', null);
      context.commit('setUserUID', null);
    },
    async fetchTasks({ state, commit }) {
      try {
        const db = getFirestore();
        const tasksCollectionRef = collection(db, 'users', state.userUID, 'tasks');
        const querySnapshot = await getDocs(tasksCollectionRef);
        const tasks = [];
        querySnapshot.forEach(doc => {
          tasks.push({ id: doc.id, ...doc.data() });
        });
        commit('setTasks', tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async increaseTask1Progress({ state, commit }) {
      try {
        const taskId = 'E7jR9ufXzLp5ah2qKbW3'; // ID der Aufgabe 1
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.min(100, currentProgress + 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error increasing task 1 progress:', error);
      }
    },
    async decreaseTask1Progress({ state, commit }) {
      try {
        const taskId = 'E7jR9ufXzLp5ah2qKbW3'; // ID der Aufgabe 1
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.max(0, currentProgress - 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error decreasing task 1 progress:', error);
      }
    },
    async resetTask1Progress({ state, commit }) {
      try {
        const taskId = 'E7jR9ufXzLp5ah2qKbW3'; // ID der Aufgabe 1
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        await updateDoc(taskDocRef, { progress: 0 }); // Fortschritt auf 0 setzen
        commit('updateTaskProgress', { taskId, progress: 0 }); // Fortschritt im Store aktualisieren
      } catch (error) {
        console.error('Error resetting task 1 progress:', error);
      }
    },
    async increaseTask2Progress({ state, commit }) {
      try {
        const taskId = 'MY6m4tsFKn2twm8qKabW';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.min(100, currentProgress + 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error increasing task 1 progress:', error);
      }
    },
    async decreaseTask2Progress({ state, commit }) {
      try {
        const taskId = 'MY6m4tsFKn2twm8qKabW';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.max(0, currentProgress - 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error decreasing task 1 progress:', error);
      }
    },
    async resetTask2Progress({ state, commit }) {
      try {
        const taskId = 'MY6m4tsFKn2twm8qKabW';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        await updateDoc(taskDocRef, { progress: 0 }); // Fortschritt auf 0 setzen
        commit('updateTaskProgress', { taskId, progress: 0 }); // Fortschritt im Store aktualisieren
      } catch (error) {
        console.error('Error resetting task 1 progress:', error);
      }
    },
    async increaseTask3Progress({ state, commit }) {
      try {
        const taskId = 'Hx4m8tkFVn2wLb6sQaZ9';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.min(100, currentProgress + 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error increasing task 1 progress:', error);
      }
    },
    async decreaseTask3Progress({ state, commit }) {
      try {
        const taskId = 'Hx4m8tkFVn2wLb6sQaZ9';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.max(0, currentProgress - 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error decreasing task 1 progress:', error);
      }
    },
    async resetTask3Progress({ state, commit }) {
      try {
        const taskId = 'Hx4m8tkFVn2wLb6sQaZ9';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        await updateDoc(taskDocRef, { progress: 0 }); // Fortschritt auf 0 setzen
        commit('updateTaskProgress', { taskId, progress: 0 }); // Fortschritt im Store aktualisieren
      } catch (error) {
        console.error('Error resetting task 1 progress:', error);
      }
    },
    async increaseTask4Progress({ state, commit }) {
      try {
        const taskId = 'P3n7qsRGyJt5wm2aKbW8';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.min(100, currentProgress + 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error increasing task 1 progress:', error);
      }
    },
    async decreaseTask4Progress({ state, commit }) {
      try {
        const taskId = 'P3n7qsRGyJt5wm2aKbW8';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.max(0, currentProgress - 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error decreasing task 1 progress:', error);
      }
    },
    async resetTask4Progress({ state, commit }) {
      try {
        const taskId = 'P3n7qsRGyJt5wm2aKbW8';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        await updateDoc(taskDocRef, { progress: 0 }); // Fortschritt auf 0 setzen
        commit('updateTaskProgress', { taskId, progress: 0 }); // Fortschritt im Store aktualisieren
      } catch (error) {
        console.error('Error resetting task 1 progress:', error);
      }
    },
    async increaseTask5Progress({ state, commit }) {
      try {
        const taskId = 'Tc2x5jpYgHw9Ln4qKsF6';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.min(100, currentProgress + 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error increasing task 1 progress:', error);
      }
    },
    async decreaseTask5Progress({ state, commit }) {
      try {
        const taskId = 'Tc2x5jpYgHw9Ln4qKsF6';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        const taskDocSnap = await getDoc(taskDocRef);
        if (taskDocSnap.exists()) {
          const currentProgress = taskDocSnap.data().progress || 0;
          const newProgress = Math.max(0, currentProgress - 25);
          await updateDoc(taskDocRef, { progress: newProgress });
          commit('updateTaskProgress', { taskId, progress: newProgress });
        }
      } catch (error) {
        console.error('Error decreasing task 1 progress:', error);
      }
    },
    async resetTask5Progress({ state, commit }) {
      try {
        const taskId = 'Tc2x5jpYgHw9Ln4qKsF6';
        const db = getFirestore();
        const taskDocRef = doc(db, 'users', state.userUID, 'tasks', taskId);
        await updateDoc(taskDocRef, { progress: 0 }); // Fortschritt auf 0 setzen
        commit('updateTaskProgress', { taskId, progress: 0 }); // Fortschritt im Store aktualisieren
      } catch (error) {
        console.error('Error resetting task 1 progress:', error);
      }
    },
  },
  getters: {
    getTaskProgressById: state => taskId => {
      const task = state.tasks.find(task => task.id === taskId);
      return task ? task.progress : 0;
    }
  }
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  unsub();
});

export default store;
