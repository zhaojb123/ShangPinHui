<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  components: {
    Header,
    Footer
  },
  created () {
    this.$store.dispatch('CategoryList')
  }
}
</script>

<style>

</style>
