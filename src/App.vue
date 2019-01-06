<template>
  <div>
    <NavBar />
    <router-view />
    <Copyright />
  </div>
</template>

<script>
import NavBar from '@/components/Nav/Nav.vue'
import Copyright from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Copyright
  }
}
</script>

<style src="@/assets/css/main.css"></style>
<style src="@/assets/scss/skeleton.scss" lang="scss"></style>
