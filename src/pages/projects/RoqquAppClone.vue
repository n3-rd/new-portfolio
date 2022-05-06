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
          This web app is a clone of the
          <a href="https://roqqu.com/">Roqqu App</a>, a Nigerian cryptocurrency
          platform that I had developed some interest in some while ago.
        </p>
        <p>
          Although the app has gone through numerous updates since I built this
          UI, it still illustrates many of the functions that the app had at
          that version.
        </p>
        <p>
          This app was built using my usual tech stack of
          <a href="https://vuejs.org/">Vue JS</a> and the
          <a href="https://quasar.dev/">Quasar Framework</a>. The
          <a href="https://developers.coinranking.com/api/documentation"
            >Coinranking API</a
          >
          was used to generate cryptocurrency prices and price history
        </p>
        <p>
          You can find the repository on
          <a href="https://github.com/n3-rd/roqqu-app-clone/">Github</a> and
          visit the site <a href="https://roqqu-app-clone.netlify.app/">Here</a>
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
