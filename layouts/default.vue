<template>
  <div>
    <!--<NavBar />-->
    <nuxt/>
    <Copyright/>
  </div>
</template>

<script>
  import NavBar from '~components/Nav/Nav.vue'
  import Copyright from '~components/Footer.vue'

  export default {
    components: {
      NavBar,
      Copyright
    }
  }
</script>
