<template>
  <div class="background q-ma-none">
    <q-scroll-area style="height: 100vh">
      <div class="text-center krona text-black page-title">Mojo Music</div>

      <div class="top-links text-center q-mb-xl">
        <a href="https://mojomusic.netlify.app" target="_blank">Visit App</a>
        <router-link to="/"> My Portfolio</router-link>
        <a href="https://github.com/n3-rd/Mojo" target="_blank">Github</a>
        <a href="https://producthunt.com/posts/mojo-music" target="_blank"
          >Product Hunt</a
        >
      </div>

      <div class="container q-mt-xl">
        <div class="images-container">
          <a href="https://mojomusic.netlify.app" target="_blank">
            <img alt="" srcset="project-images/mojomusic/mojomusic1.png 6x" />
          </a>
          <a href="https://mojomusic.netlify.app" target="_blank">
            <img alt="" srcset="project-images/mojomusic/mojomusic2.png 6x" />
          </a>
          <a href="https://mojomusic.netlify.app" target="_blank">
            <img alt="" srcset="project-images/mojomusic/mojomusic3.png 6x" />
          </a>
        </div>
      </div>

      <div class="desc syne text-black q-py-lg q-mx-xl">
        <p>
          Mojo Music is an open source web app built for users to discover their
          favourite artists and their music. It helps users by providing them
          with a lot of discography details of an artist as well as providing
          similar artists and alternatives.
        </p>
        <p>
          Mojo Music was built using <a href="#">Vue JS</a> and The
          <a href="#">Quasar Framework</a> with a Node JS backend API, it
          utilized various API's like the <a href="#">Spotify</a> and
          <a href="#">last FM</a>
          API.
        </p>
        <p>
          Development initially started with the <a href="#">AudioDB API</a>,
          but I realized that that particular API was Problematic since it was
          community maintained and not constantly updated.
        </p>
        <p>
          I hosted the Backend Code on <a href="#">Glitch</a> to enable other
          developers to use my code free of charge, the Vue JS code is hosted on
          <a href="#">Github</a>
        </p>
      </div>
    </q-scroll-area>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-color: #ccc742;
  height: 100%;
  .page-title {
    font-size: 3.8rem;
  }
  a {
    color: #000;
    text-decoration: underline;
  }
  .images-container {
    display: flex;
    justify-content: space-around;
  }
  .desc {
    font-size: 1.3rem;
    font-weight: 700;
  }
  .top-links {
    display: flex;
    justify-content: space-between;
    width: 27%;
    margin: 0 auto;
    font-size: 1.1rem;
  }
}
</style>

<script>
import gsap from "gsap";

export default {
  data() {
    return {};
  },
  mounted() {
    const tl = gsap.timeline();
    tl.from(".background", 1.8, {
      background: "#000000",
      opacity: "0.1",
    });
  },
};
</script>
