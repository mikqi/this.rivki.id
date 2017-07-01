<template>
  <div>
    <!--<NavBar />-->
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from '~components/Nav/Nav.vue'
  import Footer from '~components/Footer.vue'

  export default {
    components: {
      NavBar,
      Footer
    }
  }
</script>
