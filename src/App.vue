<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'left'
    }
  },
  computed: {
  
  },
  created() {
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
