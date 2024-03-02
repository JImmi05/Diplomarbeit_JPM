import { createStore } from 'vuex'

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
    aufgabenState: 0,
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
    setAufgabenState(state, payload) {
      state.aufgabenState = payload;
    }
  },
  actions: {
    async signup(context, { email, password }) {
      console.log('signup action');

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit('setUser', res.user);
        context.commit('setUserUID', res.user.uid); // Setzen der Benutzer-UID im Store
      } else {
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
    setAufgabenState({ commit }, payload) {
      console.log('aufgabenState action');

      commit('setAufgabenState', payload);
    }
  },
  getters: {
    currentAufgabenState: state => {
      return state.aufgabenState;
    },
    currentUserUID: state => state.userUID // Getter, um auf die Benutzer-UID zuzugreifen
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