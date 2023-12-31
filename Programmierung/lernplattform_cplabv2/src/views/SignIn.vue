<template>
  <div class="sign-in-container">
    <h1>Sign In to an Account</h1>
    <div class="text-wrapper">
      <p><input type="text" placeholder="Name" v-model="name" /></p>
    </div>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p class="error-message">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
     <p>__________________________________________________________________________________</p>
    <p>You don't have an account yet?</p>
    <p><router-link to="/register">Sign up here</router-link></p>
  </div>
</template>

<script setup>
 import { ref } from "vue";
 import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
 import { useRouter } from 'vue-router'
 const email = ref("");
 const password =  ref("");
 const errMsg = ref();
 const name = ref("");
 
 const router = useRouter()
 const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value, name.value)
        .then(() => {
            console.log("Successfully signed in!");
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/use-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorecct password";
                    break;
                default:
                    errMsg.value =  "Email or password was incorrect";
                    break;
            }
        });
 };

 const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push('/feed');
    })
    .catch((error) => {
      console.log(error.code);
    });
 };

</script>

<style lang="scss">
.sign-in-container {
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


