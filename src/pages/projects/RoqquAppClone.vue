<template>
  <div class="background q-ma-none">
    <q-scroll-area style="height: 100vh">
      <div class="text-center krona page-title">Roqqu App ( Clone )</div>

      <div class="top-links text-center q-mb-xl">
        <a href="https://roqqu-app-clone.netlify.app/" target="_blank"
          >Visit App</a
        >
        <router-link to="/"> My Portfolio</router-link>
        <a href="https://github.com/n3-rd/roqqu-app-clone/" target="_blank"
          >Github</a
        >
      </div>

      <div class="container q-mt-xl">
        <div class="images-container">
          <a href="https://roqqu-app-clone.netlify.app/" target="_blank">
            <img
              alt=""
              srcset="project-images/roqquappclone/roqquappclone1.png 6x"
            />
          </a>
          <a
            href="https://roqqu-app-clone.netlify.app/"
            target="_blank"
            class="gt-sm"
          >
            <img
              alt=""
              srcset="project-images/roqquappclone/roqquappclone2.png 6x"
            />
          </a>
          <a
            href="https://roqqu-app-clone.netlify.app/"
            target="_blank"
            class="gt-sm"
          >
            <img
              alt=""
              srcset="project-images/roqquappclone/roqquappclone3.png 6x"
            />
          </a>
        </div>
      </div>

      <div class="desc syne q-py-lg q-mx-xl">
        <p>
          Mojo Music is an open source web app built for users to discover their
          favourite artists and their music. It helps users by providing them
          with a lot of discography details of an artist as well as providing
          similar artists and alternatives.
        </p>
        <p>
          Mojo Music was built using
          <a href="https://vuejs.org/" target="_blank">Vue JS</a> and The
          <a href="https://quasar.dev/" target="_blank">Quasar Framework</a>
          with a Node JS backend API, it utilized various API's like the
          <a href="https://developer.spotify.com" target="_blank">Spotify</a>
          and
          <a href="https://www.last.fm/api" target="_blank">last FM</a>
          API.
        </p>
        <p>
          Development initially started with the
          <a href="https://www.theaudiodb.com/" target="_blank">AudioDB API</a>,
          but I realized that that particular API was Problematic since it was
          community maintained and not constantly updated.
        </p>
        <p>
          I hosted the Backend Code on
          <a href="https://glitch.com/~n3rd-last-fm-api" target="_blank"
            >Glitch</a
          >
          to enable other developers to use my code free of charge, the Vue JS
          code is hosted on
          <a href="https://github.com/n3-rd/roqqu-app-clone/" target="_blank"
            >Github</a
          >
        </p>
      </div>
    </q-scroll-area>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-color: #001a3f;
  // lighter color
  background-image: linear-gradient(
    to bottom,
    rgba(0, 26, 63, 0.8),
    rgba(0, 26, 63, 0.8)
  );
  color: #fff !important;
  height: 100%;
  .page-title {
    font-size: 2.1rem;
    @media (max-width: 576px) {
      font-size: 1.9rem;
    }
  }
  a {
    color: #fff;
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

    // check if device is mobile
    @media (max-width: 576px) {
      width: 100%;
      // put a reasonable padding
      padding: 1rem;
    }
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
