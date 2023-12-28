<template>
    <h1>Sign In to an Account</h1>
    <p> <input type="name" placeholder="Name" v-model="name" /></p>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p>{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
 import { ref } from "vue";
 import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

 }

</script>



