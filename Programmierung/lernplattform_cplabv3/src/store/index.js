import { createStore } from 'vuex'
import { getFirestore, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';

// firebase Importe
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword, //registrierungs-Funktion
  signInWithEmailAndPassword,     //sign-in-Funktion
  signOut,                        //signOut-Funktion
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    progress: 0,
    userUID: null // Hinzufügen der Benutzer-UID im Store-Zustand
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state changed:', state.user);
    },
    setUserUID(state, uid) { // Mutation zur Aktualisierung der Benutzer-UID
      state.userUID = uid;
      console.log('User UID set to:', uid);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    setProgress(state, payload) {
      state.progress = payload;
      console.log('Fortschritt im Vuex-Store aktualisiert:', payload);
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
        await setDoc(userDocRef, { progress: null }); // Hier kannst du weitere Daten hinzufügen
    
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
        context.commit('setUserUID', res.user.uid); // Setzen der Benutzer-UID im Store
      } else {
        throw new Error('could not complete login');
      }
      
    },
    async logout(context) {
      console.log('logout action');

      await signOut(auth);

      context.commit('setUser', null);
      context.commit('setUserUID', null); // Zurücksetzen der Benutzer-UID im Store
    },
    setProgress({ commit }, payload) {
      console.log('setProgress action');

      commit('setProgress', payload);
    },
    async initializeProgress({ state, commit }) {
      try {
        if (state.userUID) {
          const db = getFirestore();
          const userDocRef = doc(db, 'users', state.userUID);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            commit('setProgress', userData.progress || 0);
          } else {
            // Benutzerdokument existiert nicht, initialisiere Fortschritt mit 0
            commit('setProgress', 0);
          }
        }
      } catch (error) {
        console.error('Error initializing progress:', error);
      }
    },
    async updateProgress({ state, commit }) {
      try {
        const newProgress = state.progress + 25;
        const db = getFirestore();
        if (state.userUID) {
          const userUID = state.userUID;
          const userDocRef = doc(db, 'users', userUID);
          await updateDoc(userDocRef, { progress: newProgress });
          commit('setProgress', newProgress);
        }
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    },
    async decreaseProgress({ state, commit }) {
      try {
        const newProgress = Math.max(0, state.progress - 25); // Ensure progress does not go below 0
        const db = getFirestore();
        if (state.userUID) {
          const userUID = state.userUID;
          const userDocRef = doc(db, 'users', userUID);
          await updateDoc(userDocRef, { progress: newProgress });
          commit('setProgress', newProgress);
        }
      } catch (error) {
        console.error('Error decreasing progress:', error);
      }
    }
  },
  getters: {
    currentProgress: state => state.progress
  }
});

// Die Funktion onAuthStateChanged wird aufgerufen, um den Authentifizierungsstatus zu überwachen
// Sie nimmt zwei Argumente entgegen: das Authentifizierungsobjekt (auth) und eine Callback-Funktion,
// die aufgerufen wird, wenn sich der Authentifizierungsstatus ändert
const unsub = onAuthStateChanged(auth, (user) => {
    /* Die Callback-Funktion erhält den aktuellen Benutzer (user) als Parameter, der entweder ein
       Benutzerobjekt ist, wenn ein Benutzer angemeldet ist, oder null, wenn kein Benutzer angemeldet ist */

  // Setze den Zustand 'authIsReady' im Vuex-Store auf true
  store.commit('setAuthIsReady', true)   
  
  // Setze den Benutzer im Zustand des Vuex-Stores auf den aktuellen User
  store.commit('setUser', user)

  //Beendet die Überwachung damit die Funktion nur einmal aufgerufen wird und nicht jedes mal
  // wenn "auth" sich ändert
  unsub()
})

// export the store
export default store
