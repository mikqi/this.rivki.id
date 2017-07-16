<template>
  <div>
    <nav>
      <ul class="c-primary-nav">
        <li><nuxt-link class="js-nav-link" to="/">Home</nuxt-link></li>
        <li><nuxt-link class="js-nav-link" to="about">About page</nuxt-link></li>
        <!-- <li><nuxt-link class="js-nav-link" to="portfolio">Portfolio</nuxt-link></li> -->
        <li><a class="js-nav-link" href="http://blog.rivki.id/">Blog</a></li>
      </ul>
    </nav>

    <div class="c-overlay-nav">
      <span></span>
    </div> <!-- c-overlay-nav -->

    <div class="c-overlay-content">
      <span></span>
    </div> <!-- c-overlay-content -->

    <a href="#0" class="c-nav-trigger js-nav-trigger">Menu<span class="c-icon"></span></a>
  </div>
</template>

<script>
  export default {
    mounted() {
      require('./Nav')
      const navLinks = document.querySelectorAll('.js-nav-link')
      const navTrigger = document.querySelector('.js-nav-trigger')

      navLinks.forEach((nav) =>
        nav.addEventListener('click', () =>
          navTrigger.click()
        )
      )
    }
  }
    

</script>

<style scoped>
  li a {
    transition: ease .3s;
    color: #fff;
  }

  li a:hover {
    color: #2199e8;
  }
</style>
