<template>
  <section class="section hero">
    <div class="flex vh-100 w-60-l w-90-ns center justify-center items-center">
      <div>
        <p class="f2 fw1 mb4">
          Hello.
        </p>
        <h1 class="f1-m f1-l f2-ns ma0">
          I'm Muhammad Rivki,
        </h1>
        <h2 class="f2-m f2-l f3-ns fw1 ma0 lh-copy">
          Frontend Engineer at&nbsp;<a
            href="https://bukalapak.com"
            title="Bukalapak"
          >
            Bukalapak
          </a>
        </h2>
        <h2 class="f2-m f2-l f3-ns fw1 ma0 lh-copy">
          who love
          <span
            class="txt-rotate"
            data-period="5000"
            data-rotate="[ &quot;JavaScript.&quot;, &quot;chocolate.&quot;, &quot;classical music.&quot;, &quot;of course cat!!!!&quot; ]"
          />
        </h2>
        <p class="f4-m f4-l f5-ns mt4 fw1 lh-copy tracked-sm">
          I spend most of my day working with the frontend things and read articles at feedly. You can find me on <a
            href="https://facebook.com/this.mikqi"
            target="_blank"
            class="underline facebook"
          >
          Facebook</a>,
          <a
            href="https://instagram.com/mikqii"
            target="_blank"
            class="underline github"
          >
          Instagram</a>,
          <a
            href="https://twitter.com/__mikqi"
            target="_blank"
            class="underline twitter"
          >
          Twitter</a>,
          <a
            href="https://www.linkedin.com/in/muhammadrivki/"
            target="_blank"
            class="underline linkedin"
          >
          LinkedIn</a> and
          <a
            href="https://github.com/mikqi"
            target="_blank"
            class="underline github"
          >GitHub</a>.
        </p>
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
