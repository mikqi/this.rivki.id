<template>
  <section class="section hero">
    <div class="container u-full-width u-full-height flex">
      <div class="row u-full-width self-center">
        <div class="twelve columns">
          <p class="u-p--hero mb5">
            Hello,
          </p>
          <h1 class="hero-heading ma0">
            I'm Muhammad Rivki,
          </h1>
          <h2 class="ma0">
            currently i'm a Frontend Engineer at&nbsp;<a
              href="https://bukalapak.com"
              title="Bukalapak"
            >
              Bukalapak
            </a>
          </h2>
          <h2 class="ma0">
            and i love
            <span
              class="txt-rotate"
              data-period="5000"
              data-rotate="[ &quot;JavaScript.&quot;, &quot;chocolate.&quot;, &quot;classical music.&quot;, &quot;of course cat!!!!&quot; ]"
            />
          </h2>
          <p class="mt5 u-p--hero">
            I spend most of my day working with the frontend things and read articles at feedly. You can find me on <a
              href="https://facebook.com/this.mikqi"
              target="_blank"
              class="facebook"
            >
              Facebook
            </a>, <a
              href="https://twitter.com/__mikqi"
              target="_blank"
              class="twitter"
            >
              Twitter
            </a>, <a
              href="https://www.linkedin.com/in/muhammadrivki/"
              target="_blank"
              class="linkedin"
            >
              LinkedIn
            </a> and <a
              href="https://github.com/mikqi"
              target="_blank"
              class="github"
            >
              GitHub
            </a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  mounted: () => {
    require('./typing')
    // eslint-disable-next-line no-undef
    runTextRotator()
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  transition: ease 0.3s;
  cursor: pointer;
}

a:hover {
  color: #d71149;
}

.twitter:hover {
  color: #1da1f2;
}

.github:hover {
  color: #333;
}

.linkedin:hover {
  color: #0077b5;
}

.facebook:hover {
  color: #3d5b96;
}

h1 {
  line-height: 1.4;
}
</style>
