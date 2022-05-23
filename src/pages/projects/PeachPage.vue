<template>
  <div class="background q-ma-none">
    <q-scroll-area style="height: 100vh">
      <div class="text-center krona page-title">peachpage</div>

      <div class="top-links text-center q-mb-xl">
        <a href="https://peachpage.netlify.app/" target="_blank">Visit App</a>
        <router-link to="/"> My Portfolio</router-link>
        <a href="https://github.com/n3-rd/Peachpage/" target="_blank">Github</a>
      </div>

      <div class="container q-mt-xl">
        <div class="images-container">
          <a href="https://peachpage.netlify.app/" target="_blank">
            <img alt="" srcset="project-images/peachpage/peachpage1.png 6x" />
          </a>
          <a
            href="https://peachpage.netlify.app/"
            target="_blank"
            class="gt-sm"
          >
            <img alt="" srcset="project-images/peachpage/peachpage2.png 6x" />
          </a>
          <a
            href="https://peachpage.netlify.app/"
            target="_blank"
            class="gt-sm"
          >
            <img alt="" srcset="project-images/peachpage/peachpage3.png 6x" />
          </a>
        </div>
      </div>

      <div class="desc syne q-py-lg q-mx-xl">
        <p>
          Save articles to read later, on the web!. Peachpage helps you save
          articles on your device so you can read them later. Never miss an
          article again!
        </p>
        <p>
          Inspired by Pocket, an app that helped me a lot to save stuff I saw
          but couldn't read yet in the University, I decided to challenge my
          self by creating this project. It's probably not perfect, but it's
          hard, honest work I put into this while juggling my studies with code.
        </p>
        <p>
          The app is built using the
          <a href="https://vuejs.org/">Vue JS</a> framework and the
          <a href="https://quasar.dev/">Quasar Framework</a>.
        </p>
        <p>
          You can find the repository on
          <a href="https://github.com/n3-rd/Peachpage/">Github</a> and visit the
          site <a href="https://peachpage.netlify.app/">Here</a>
        </p>
      </div>
    </q-scroll-area>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-color: #cf2865;
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
