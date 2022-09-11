<template>
  <div id="app">
    <div class="h-screen  ">
      <CompSlogan/>
      <CompNav/>
      <CompFooter/>
      <CompCoppy/>
    </div>
  </div>
</template>
<script>

import CompNav from './components/CompNav.vue'
import CompSlogan from './components/nav/CompSlogan.vue';
import CompCoppy from './components/nav/CompCoppy.vue';
import CompFooter from './components/nav/CompFooter.vue';

export default {
  name: "app",
  components: {
    CompNav,
    CompSlogan,
    CompCoppy,
    CompFooter
}
};
</script>

<style>
  * {
    font-family: 'Quicksand', sans-serif;

  }
</style>
