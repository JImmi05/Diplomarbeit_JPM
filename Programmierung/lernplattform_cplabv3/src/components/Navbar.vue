<template>
  <nav>
    <h1>CPLab-Lernplattform</h1>
    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <router-link to="/aufträge">Aufträge</router-link>
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

<style>

nav{
  color: #426b1f;
  font-size: 20px;;
}


.button {
  all: unset;
  background-color: #426b1f;
  color: white;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 3px;
  position: absolute;
  cursor: pointer;
  
}

button:hover{
  background-color: #3a5918;;
}

h1{
  color: #426b1f;
  border: 2px solid;
  border-radius: 8px;
  padding: 3px;
}



</style>