<template>
  <router-view></router-view>
</template>

<script>

import store from "@/store";

export default {
  name: 'App',
  components: {
  },
  mounted() {
    console.log(store.getters)
  }
}
</script>

<style>

</style>
