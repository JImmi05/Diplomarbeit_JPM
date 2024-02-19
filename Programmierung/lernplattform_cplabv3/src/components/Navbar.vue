<template>
  <nav>
    <h1>CP-Lernplattform</h1>
    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/anleitungen">Anleitung</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <router-link to="/aufgaben">Aufgaben</router-link>
        <span>Logged in as {{ user.email }}</span>
        <button class="button"  @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    const handleClick = () => {
      store.dispatch('logout')
    }

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  }
}
</script>