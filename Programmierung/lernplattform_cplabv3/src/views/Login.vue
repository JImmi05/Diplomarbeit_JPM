<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <h3>Anmelden</h3>

    <label for="email">E-Mail:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Passwort:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Anmelden</button>
    <div v-if="error" class="error-message">{{ error }}</div>
  </form>
</template>


<script>
import { ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
        
      }
      catch (err) {
        error.value = err.message
      }
    }

    

    return { handleSubmit, email, password, error }
  }
}
</script>

<style>
form h3{
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

.label{
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}
input{
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}
</style>

