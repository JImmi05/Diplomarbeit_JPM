<template>
  <form @submit.prevent="handleSubmit" class="signup-form">
    <h3>Registrieren</h3>

    <label for="email">E-Mail:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Passwort:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Registrieren</button>
    <div v-if="error" class="error-message">{{ error }}</div>
  </form>
</template>

<script>
//Importe
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    // reaktive Variablen für email, passowort und error
    const email = ref('')
    const password = ref('')   
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {    //handleSubmit: ist eine Funktion die aufgerufen wird wenn das Formular abgesendet wird.
      try {
        await store.dispatch('signup', {   //hier wird die Aktion versendet (die signup Funktion wird verwendet)
          email: email.value,              //Dabei wird ein Objekt mitgegeben mit Email und
          password: password.value         //Passwort
        })
        router.push('/')  // Weiterleitung des Benutzers zur Startseite nach erfolgreicher Registrierung
      }
      catch (err) {
        error.value = err.message // Festlegung des Fehlerwerts bei einem Fehler während der Registrierung
      }
    }

  

    
    
  // Rückgabe der erforderlichen Werte und Funktionen für die Verwendung im Template 
  //(unter anderem damit der Error auf der Website ausgegeben werden kann)
    return { handleSubmit, email, password, error }
  }
}
</script>

