<template>
  <section class="hero">
    <div class="scroll-indicator"></div>
    <div class="container u-full-width u-full-height mt7">
      <div class="section row u-full-width u-full-height">
        <div class="three columns u-align-center mb5">
          <img class="avatar" :src="AVA">
        </div>
        <div class="eight columns">
          <h4 class="ma0">MUHAMMAD RIVKI</h4>
          <h5><em>– A CURIOUS PERSON</em></h5>

          <p class="u-p--hero">
            Hello my name is Muhammad Rivki. I'm a Frontend Engineer who loves simplicity, create great looking web products and performance first. Currently i live in Jakarta, Indonesia and now working at
            <a href="https://bukalapak.com/" target="_blank">Bukalapak</a>. 
          </p>
          
          <p class="u-p--hero">
            My passionate is about Web Technologies such as Javascript, Chrome Developer Tools, React, React Native, VueJS and many more. If you want to know more about me or discuss about our interests just say "Hi!" <a href="">here</a>.
          </p>

        </div>
      </div>

      <div class="row u-full-width mb4">
        <div class="five columns">
          <h5 class="ma0 mb4"><em>– EXPERIENCES</em></h5>

          <!--BUKALAPAK.COM-->
          <p class="u-p--hero lh0">
            <small class="time"> 2016 - Today </small>
            <br />
            <span>
              PT. Bukalapak.com
            </span>
            <br />
            <small class="mt0"><em>Frontend Engineer</em></small>
          </p>

          <!--CODELABS.COM-->
          <p class="u-p--hero lh0">
            <small class="time"> 2012 - 2016 </small>
            <br />
            <span>
              Codelabs Unikom
            </span>
            <br />
            <small class="mt0"><em>Frontend Engineer</em></small>
          </p>

        </div>
        <div class="seven columns">
          <h5 class="ma0 mb4"><em>– ACHIEVEMENTS</em></h5>

          <!--IMAGINE CUP 2018-->
          <p class="u-p--hero lh0">
            <small class="time"> March 2017</small>
            <br />
            <span>
              Semi Finalist Microsoft Imagine Cup Indonesia 2017
            </span>
            <br />
            <small class="mt0">I built a marketing solution apps in Twitter. With codename <a href="http://sellution.azurewebsites.net/">Sellution</a> or <a href="http://twikipedia-apps.herokuapp.com">Twikipedia</a>.</small>
          </p>

          <!--IMAGINE CUP 2016-->
          <p class="u-p--hero lh0">
            <small class="time"> May 2015</small>
            <br />
            <span>
              1<sup>st</sup> Winner Microsoft Imagine Cup Indonesia 2016
            </span>
            <br />
            <small class="mt0">
              We built parenting control apps that integrate parent device and browser. Parent can see what are kids open in a browser and give an action to block a website if parent doesn't want the kid to open that website. And we win in Innovation Category. We won in first place in <a href="https://dailysocial.id/post/pemenang-imagine-cup-indonesia-2015">Indonesia</a> and get the chance to <a href="https://imagine.microsoft.com/en-us/Winner/2015WorldSemifinalists">world semifinals</a>.
            </small>
          </p>

          <!--IMAGINE CUP 2018-->
          <p class="u-p--hero lh0">
            <small class="time"> April 2018</small>
            <br />
            <span>
              Nominator INAICTA 2014
            </span>
            <br />
            <small class="mt0">We develop apps citizen journalism about crime. With codename <a href="http://if.unikom.ac.id/web/prestasi.php">Crimezone</a>. My role in team as a Frontend and UX.</small>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

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

  @media only screen and (min-width: 960px) {
    .scroll-indicator {
      position: absolute;
      height: 50px;
      width: 1px;
      background-color: #1f1f1f;
      bottom: 0;
      left: 50%;
    }
  }
</style>

<script>
  import AVA from '~static/ava.jpg'
  export default {
    data: () => {
      return {
        AVA
      }
    }
  }
</script>
