<template>
  <div class="create-account-container">
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Name" v-model="name" /></p>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    <p>__________________________________________________________________________________</p>
    <p>You already have an account?</p>
    <p><router-link to="/sign-in">Sign in here</router-link></p>
  </div>
</template>

<script setup>
 import { ref } from "vue";
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 import { useRouter } from 'vue-router'
 const email = ref("");
 const password =  ref("");
 const name = ref("");
 
 const router = useRouter()
 const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value, name.value)
        .then(() => {
            console.log("Successfully registered!");
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
 };

 const signInWithGoogle = () => {

 }

</script>

<style lang="scss">
.create-account-container {
  max-width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  font-size: 50px;
  text-align: center;
  color: #333;
}

p {
  margin-bottom: 15px;
}

input {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
  background-color: #fafaf5;
}

button {
  width: 30%;
  padding: 10px;
  background-color: #426b1f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
}

button:hover {
  background-color: #2c4715;
}
</style>


