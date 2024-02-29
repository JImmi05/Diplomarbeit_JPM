import { initializeApp } from 'firebase/app' //firebase/app: ist der Hauptteil der Firebase Library    
                                             /*initializeApp: Ist die Funktion die wir benutzen um
                                              die Verbindung mit dem Backend zu initialisieren*/

import { getAuth } from 'firebase/auth'      /*getAuth: Ist die Funktion die verwendet wird um den Authentication
                                                        Service im Frontend zu initialisieren damit wir das ganze mit dem
                                                        Backend verknüpfen können
                                                        */

const firebaseConfig = {                              
  apiKey: "AIzaSyDAkEz_C-uRid4xznChepeSg5FTP5dT_-M",
  authDomain: "vue-auth-da.firebaseapp.com",
  projectId: "vue-auth-da",                           //Firebase Konfigurations-Obekt: Ist die Information die Firebase verwendet um 
  storageBucket: "vue-auth-da.appspot.com",           // sich auf das richtige Backend zu verbinden.
  messagingSenderId: "570472278786",
  appId: "1:570472278786:web:94ba1e4189d60d1272301b" 
}

// firebase initalisieren
initializeApp(firebaseConfig)

// firebase authorization initialisieren
const auth = getAuth()

// Objekt exportieren damit es in einer anderen Datei verwendet werden kann
export { auth }

