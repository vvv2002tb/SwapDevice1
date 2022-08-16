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
    <div class="container mx-auto px-8 mt-8"  > 
        <form class="flex flex-col justify-start space-y-6">
          
          <div class="row">
            <label class="flex flex-col" for="email">
              <span class="font-semibold">Email</span>
              <input id="email" type="email" class="px-4 py-3 rounded-lg border border-zinc-500 mt-1" placeholder="Exemple@gmail.com"/> 
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col" for="Password">
              <span class="font-semibold">Password</span>
              <input id="Password" type="password" class="px-4 py-3 rounded-lg border border-zinc-500 mt-1" placeholder="Password"/> 
            </label>
          </div>
          <div class="row">
            <button type="submit" class="py-3 text-center w-full rounded-lg bg-blue-700 text-white font-semibold shadow-md" >Sign In</button>
          </div>
        </form>
        <div class="w-full text-center mt-6">
          <span class="font-semibold">
              I'm a new user.
          </span>
          <span class="font-semibold ml-1 text-blue-500">
            <router-link :to="{name: 'signup', params: {} }">Sign Up</router-link>
          </span>
            
          
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
 
</style>