<template>
    
  <div class="mt-1">
    <div class="flex flex-col">
        <div class="w-60 h-50 text-center mx-auto">
          <img src="../assets/img/logobank.png" alt="imglogo" class="w-full h-auto object-cover">
          
        </div>
        <div class="text-center mt-12px">
          <h1 class="font-semibold  text-orange-800 text-base">Smart Banking for the Good Life!</h1>
        </div>
    </div>
    <div class="container mx-auto px-8 mt-8" > 
        <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6">
          <div class="row">
            <label class="flex flex-col" for="fullName">
              <span class="font-semibold">Full name</span>
              <input v-model="fullName" type="text" id="fullName"  class="px-4 py-3 rounded-lg border border-zinc-500 mt-1 " placeholder="Paula Andrews"/> 
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="email">
              <span class="font-semibold">Email</span>
              <input v-model="email" id="email" type="email" class="px-4 py-3 rounded-lg border border-zinc-500 mt-1" placeholder="Exemple@gmail.com"/> 
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="password">
              <span class="font-semibold">Password</span>
              <input v-model="password" id="password" type="password" class="px-4 py-3 rounded-lg border border-zinc-500 mt-1" placeholder="Password"/> 
            </label>
          </div>
          <div class="row">
            
            <button @click="register" type="submit" class="py-3 text-center w-full rounded-lg bg-blue-700 text-white font-semibold shadow-md" >Sign Up</button>
          </div>
        </form>


      




        <div class="w-full text-center mt-6">
          <span class="font-semibold">
              I'm already a member.
          </span>
          <span class="font-semibold ml-1 text-blue-500">
            <router-link :to="{name: 'login', params: {} }">Sign In</router-link>
          </span>
            
          
        </div>
    </div>
  </div>
</template>

<script> 
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { ref } from "vue";
import { message } from 'ant-design-vue';





export default {
  

  setup() {
    

    
    const email = ref("");
    const password = ref("");


    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Success");
        app.$router.push({name: 'profile'})

      })
      .catch((error) => {
        console.log("Error", error);
        alert("Error", error);
      });
    }

    
    return {
      register,
      
      email,
      password
    }
    
  },
  
 
    
  
}
</script>

<style>
 
</style>