<template>
  <div id="app">
    <div class="h-screen  ">
      <CompSlogan/>
      <CompNav/>
    </div>
  </div>
</template>
<script>

import CompNav from './components/CompNav.vue'
import CompSlogan from './components/nav/CompSlogan.vue';

export default {
  name: "app",
  components: {
    CompNav,
    CompSlogan
}
};
</script>

<style>
  * {
    font-family: 'Quicksand', sans-serif;

  }
</style>
