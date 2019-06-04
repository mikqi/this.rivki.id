<template>
  <section class="hero">
    <div class="scroll-indicator">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4="
        width="50"
      >
    </div>
    <div class="container u-full-width u-full-height mt7">
      <div class="section row u-full-width u-full-height">
        <div class="three columns u-align-center mb5">
          <img
            class="avatar"
            src="@/static/img/ava.jpg"
          >
        </div>
        <div class="eight columns">
          <h3 class="ma0">
            Hello.
          </h3>
          <h5><em>–- </em></h5>

          <p class="u-p--hero">
            I am Rivki, but my friend sometimes call me Ikki (e'ki). A Frontend Engineer who love simplicity, great performance in the good looking products that I made. Currently I am working at the most growing e-commerce company in Indonesia,
            <a
              href="https://bukalapak.com/"
              target="_blank"
            >
              Bukalapak.
            </a>
          </p>

          <p class="u-p--hero">
            My passionate is about web technology such as Javascript, Chrome Developer Tools, React, React Native, VueJS and many more. If you want to know more about me just say "Hi!" <a
              target="_blank"
              href="mailto:muhammad.rivki@live.com">
              here.
            </a>
          </p>
        </div>
      </div>

      <!-- EXPERIENCES AND ACHIEVEMENTS -->
      <div class="row u-full-width mb6">
        <div class="offset-by-one ten columns mb6">
          <h5 class="ma0 mb4">
            <em>– EXPERIENCES</em>
          </h5>
          <div class="row mb4">
            <!--BUKALAPAK.COM FTL-->
            <div class="six columns u-p--hero lh0 mb4">
              <div class="time">
                Oct 2018 - Today
              </div>
              <div>
                PT. Bukalapak.com
              </div>
              <div>
                <small class="mt0">
                  <em>Frontend Tribe Lead</em>
                </small>
              </div>
              <div class="mt3 pr4">
                <small>
                  Bukalapak use <a
                    target="_blank"
                    href="https://medium.com/productmanagement101/spotify-squad-framework-part-i-8f74bcfcd761">Spotify Engineering Culture</a> and on this position I focus to remove knowledge gap with other tribes and to keep my Tribe code quality is good.
                </small>
              </div>
            </div>

            <!--BUKALAPAK.COM FTL-->
            <div class="six columns u-p--hero lh0 mb4">
              <div class="time">
                Apr 2018 - Today
              </div>
              <div>
                PT. Bukalapak.com
              </div>
              <div>
                <small class="mt0">
                  <em>Frontend Engineer Squad Lead</em>
                </small>
              </div>
              <div class="mt3 pr4">
                <small>
                  As a lead i responsible to made my squad code quality better with code reviews and also handle for deployment my squad product to production with less bug.
                </small>
              </div>
            </div>
          </div>

          <div class="row mb4">
            <!--BUKALAPAK.COM-->
            <div class="six columns u-p--hero lh0 mb4">
              <div class="time">
                Oct 2016 - Today
              </div>
              <div>
                PT. Bukalapak.com
              </div>
              <div>
                <small class="mt0">
                  <em>Frontend Engineer</em>
                </small>
              </div>
              <div class="mt3 pr4">
                <small>
                  In Bukalapak I focus built and maintenance at seller side but before transactions such as <em>create product</em>, <em>product list</em> etc. I develop previously using jQuery and Coffescript, but now already use <a
                    target="_blank"
                    href="https://vuejs.org">VueJS</a>.
                </small>
              </div>
            </div>

            <!-- ShoutCap -->
            <div class="six columns u-p--hero lh0 mb4">
              <div class="time">
                Jul 2015 - Sep 2015
              </div>
              <div>
                ShoutID
              </div>
              <div>
                <small class="mt0">
                  <em>Frontend Engineer Intern</em>
                </small>
              </div>
              <div class="mt3 pr4">
                <small>
                  I develop iOS ShoutCap App using <a
                    target="_blank"
                    href="http://ionicframework.com">Ionic Framework</a> and create a Profile, Voucher, Transactions and Create a Cap Views.
                </small>
              </div>
            </div>
          </div>

          <div class="row mb4">
            <!--CODELABS.COM-->
            <div class="six columns u-p--hero lh0">
              <div class="time">
                Dec 2012 - Sep 2016
              </div>
              <div>
                Unikom Codelabs Division
              </div>
              <div>
                <small class="mt0">
                  <em>Fullstack Javascript</em>
                </small>
              </div>
              <div class="mt3 pr4">
                <small>
                  In Codelabs i do some reasearch for competition focus on Javascript technology and maintenance some internal websites.
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- PROJECTS -->
        <div
          v-if="isProjects"
          class="offset-by-one ten columns mb6"
        >
          <div class="twelve columns">
            <h5 class="ma0 mb4">
              <em>– PROJECTS</em>
            </h5>

            <!--Seller Center-->
            <div class="u-p--hero lh0 mb5">
              <div class="time">
                October 2018
              </div>
              <div>
                Component Library Bukalapak
              </div>
              <div class="mt3">
                <small>
                  Parallel with develop Seller Center, I and my team designing reuseable components from Seller Center. After that we move it to our internal npm registry to share with other engineer and now the project has been moved to Core Frontend.
                </small>
              </div>
            </div>

            <!--Seller Center-->
            <div class="u-p--hero lh0 mb5">
              <div class="time">
                March 2018
              </div>
              <div>
                Seller Center Bukalapak
              </div>
              <div class="mt3">
                <small>
                  I lead the team to develop <a href="https://seller.bukalapak.com">Seller Center Bukalapak</a>. I make standard for the the code to make it clean and also develop the server and client. It used <a href="https://nuxtjs.org">Nuxt.js</a>, so the server side use NodeJS + ExpressJS and the client side use VueJS. This project is recreate features from legacy codebase to the new stack. I responsible for stability and maintainabilty the code.
                </small>
              </div>
            </div>

            <!--7 Pagi Dashboard-->
            <div class="u-p--hero lh0 mb5">
              <div class="time">
                January 2017
              </div>
              <div>
                7 Pagi
              </div>
              <div class="mt3">
                <small>
                  Create a dashboard for <a
                    href="https://id.techinasia.com/7pagi-platform-interaksi-antara-guru-dan-orang-tua-siswa"
                    target="_blank">7 Pagi</a> startup. I work in backend and frontend side and both of that used JavaScript. NodeJS and Express for backend and AngularJS for frontend also use azure hosting.
                </small>
              </div>
            </div>

            <!--Twikipedia-->
            <div class="u-p--hero lh0 mb5">
              <div class="time">
                March 2016
              </div>
              <div>
                Twikipedia
              </div>
              <div class="mt3">
                <small>
                  I develop a marketing solution web apps for who runs the busniess in Twitter. I use sentiment analysis and machine learning for categorized the user based on their tweets and the web built with NodeJS for server side and AngularJS for the client. You can read detail about my research <a
                    target="_blank"
                    href="http://jsi.cs.ui.ac.id/index.php/jsi/article/download/500/342/">here</a>.
                </small>
              </div>
            </div>

            <!--Dodo Kids-->
            <div class="u-p--hero lh0 mb5">
              <div class="time">
                March 2015
              </div>
              <div>
                Dodo Kids Browser
              </div>
              <div class="mt3">
                <small>
                  I create an extension browser for our apps, and i do design too. Dodo Kids Browser is a parenting controlling apps. Which is have two frontend. First in Windows Phone, and second on extension browser.
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- ACHIEVEMENTS -->
        <div class="offset-by-one ten columns">
          <h5 class="ma0 mb4">
            <em>– ACHIEVEMENTS</em>
          </h5>
          I built a marketing solution apps in Twitter use sentiment analysis and categorized the user based on their tweets.
          <div class="u-p--hero lh0 mb5">
            <div class="time">
              May 2018
            </div>
            <div>
              Facebook F8 Hakcathon Participation
            </div>
            <div class="mt3">
              <small>
                I've invited by Facebook to become a participant F8 Hackathon in McEnery Convention Center, San Jose. There was three people in my team with one Backend, Frontend and Business Analyst. And of course the Frontend role is Me. We built an apps focus on helping a community you can check it <a
                  target="_blank"
                  href="https://devpost.com/software/komun-ally">here</a>.
              </small>
            </div>
          </div>

          <!--IMAGINE CUP 2017-->
          <div class="u-p--hero lh0 mb5">
            <div class="time">
              March 2017
            </div>
            <div>
              Semi Finalist Microsoft Imagine Cup Indonesia 2017
            </div>
            <div class="mt3">
              <small>
                I built a marketing solution apps in Twitter use sentiment analysis and categorized the user based on their tweets. With codename <a
                  target="_blank"
                  href="http://sellution.azurewebsites.net/"> Sellution
                </a> or <a
                  target="_blank"
                  href="http://twikipedia-apps.herokuapp.com">
                  Twikipedia
                </a>.
              </small>
            </div>
          </div>

          <!--IMAGINE CUP 2015-->
          <div class="u-p--hero lh0 mb5">
            <div class="time">
              May 2015
            </div>
            <div>
              1<sup>st</sup> Winner Microsoft Imagine Cup Indonesia 2016
            </div>
            <div class="mt3">
              <small>
                I built parenting control apps that integrate parent device and browser. Parent can see what are kids open in a browser and give an action to block a website if parent doesn't want the kid to open that website. And we win in Innovation Category. We won in first place in <a
                  target="_blank"
                  href="https://dailysocial.id/post/pemenang-imagine-cup-indonesia-2015">
                  Indonesia
                </a> and get the chance to <a
                  target="_blank"
                  href="https://imagine.microsoft.com/en-us/Winner/2015WorldSemifinalists">
                  world semifinals
                </a>.
              </small>
            </div>
          </div>

          <!--IMAGINE CUP 2018-->
          <div class="u-p--hero lh0 mb5">
            <div class="time">
              April 2018
            </div>
            <div>
              Nominator INAICTA 2014
            </div>
            <div class="mt3">
              <small>
                We develop apps citizen journalism about crime. With codename <a
                  target="_blank"
                  href="http://if.unikom.ac.id/web/prestasi.php">
                  Crimezone
                </a>. My role in team as a Frontend and UX.
              </small>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      isProjects: true
    }
  }
}
</script>

<style scope>
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.lh0 {
  line-height: 1;
}

.time {
  font-size: 75%;
  color: #aaa;
  line-height: 2.5;
}

@media only screen and (min-width: 320px) {
  .scroll-indicator {
    display: none;
  }
}

@media only screen and (min-width: 600px) {
  .scroll-indicator {
    display: inline;
    position: absolute;
    bottom: 10px;
    left: 50%;
    animation: updown 1s infinite alternate;
    -webkit-animation: updown 1s infinite alternate;
  }
}

@-webkit-keyframes updown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes updown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
</style>
