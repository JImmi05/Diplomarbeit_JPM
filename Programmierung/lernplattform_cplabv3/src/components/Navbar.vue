<template>
  <nav>
    <h1>CP-Lernplattform</h1>
    <template v-if="authIsReady">
      <!-- für alle User -->
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/anleitungen">Anleitung</router-link>
      </div>
      <!-- für eingeloggte User -->
      <div v-if="user">       <!-- Ist der User eingeloggt? Erst wenn "ja" wird Inhalt angezeigt-->
        <router-link to="/aufgaben">Aufgaben</router-link>
        <span>Logged in as {{ user.email }}</span>  <!-- {{ user.email }}: nimmt die E-Mail aus dem User-Objekt heraus und zeigt diese an-->
        <button class="button"  @click="handleClick">Logout</button>
      </div>
      <!-- für ausgeloggte User -->
      <div v-if="!user">    <!-- Ist der User eingeloggt? Erst wenn "nein" (! steht für nicht) wird Inhalt angezeigt-->
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
//Importe
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const handleClick = () => {   // Funktion die aufgerufen wird wenn der Logout Button gedrückt wird
      store.dispatch('logout')    // hier wird die Aktion versendet (die Logout Funktion wird verwendet)
      router.push('/')            // Weiterleitung des Benutzers zur Startseite nach erfolgreichem Logout
    }

    return {
      handleClick,             
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  }
}

</script>