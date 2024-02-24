import { createStore } from 'vuex'

// firebase Importe
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword, //registrierungs-Funktion
  signInWithEmailAndPassword,     //sign-in-Funktion
  signOut,                        //signOut-Funktion
  onAuthStateChanged
} from 'firebase/auth'

const store = createStore({   //Hier wird der Authentifizierungsspeicher angelegt
  state: {                    //state:  verfolgt den Status des Users
    user: null,               /*dieser wird am Anfang auf null gestzt. Das heißt der User 
                              ist nicht angemeldet*/
    authIsReady: false        
  },
  mutations: {                    //mutations: wird verwendet um den user zu updaten
    setUser(state, payload) {     /*payload: wenn eingeloggt: ist das User-Objekt. Dieses 
                                    beiinhaltet alle Daten des users (Email, Passwort,etc.)
                                             wenn ausgeloggt: beträgt null*/
      state.user = payload        //Setzt den Benutzerzustand auf die übergebene Payload
      console.log('user state changed:', state.user)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    }
  },
  actions: {
    async signup(context, { email, password }) { //Definition der Aktion "signup"
      console.log('signup action')

      // Versuche, einen Benutzer mit der bereitgestellten E-Mail und dem Passwort zu registrieren
      // await: warte bis die Funktion fertig ist befor du im code weitergehst
      // hat es funktioniert wird email und passwort in 'res' gespeichert, sonst ist 'res' leer
      const res = await createUserWithEmailAndPassword(auth, email, password)

      // Überprüfe, ob die Registrierung erfolgreich war (ob 'res' einen Wert enthält)
      if (res) {
        // Wenn die Registrierung erfolgreich war, aktualisiere den Benutzer im Vuex-Store
        context.commit('setUser', res.user) // Aktualisiere den Benutzer im Store mit den Benutzerdaten aus der Antwort
      } else {
        // Wenn die Registrierung fehlschlägt, wirf einen Fehler mit einer entsprechenden Fehlermeldung
        throw new Error('could not complete signup')
      }
    },
    async login(context, { email, password }) {
      console.log('login action')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    },
    async logout(context) {
      console.log('logout action')
 
      await signOut(auth)
      context.commit('setUser', null)
    }
  }
})

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})


// export the store
export default store