<template>
  <div class="home-text">
    <div class="main-text">
      <div class="wrapper">
        <span class="first line sp">
          Godwin Jemegah
          <span class="dot sp">.</span>
        </span>
        <span class="second line sp">
          Web developer and designer based in Lagos
          <img srcset="~src/assets/g885-small.png 6x" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-text {
  font-family: krona;
  .first {
    font-size: 3.2em;
    font-weight: 700;
    opacity: 0.9;
  }
  .second {
    font-size: 2.3em;
    font-family: syne;
    opacity: 0.8;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  overflow: hidden;
  .line {
    height: 70px;
    span {
      position: absolute;
      font-size: 2rem;
      line-height: 4.3rem;
    }
    .dot {
      font-size: 1.5em;
      opacity: 0.8;
    }
  }
}
</style>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      myContentString: "Hime",
    };
  },
  mounted() {
    const textrev = gsap.timeline();

    textrev.from(".sp", 1.8, {
      y: 200,
      ease: "power4.out",
      delay: 8,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    });
  },
};
</script>
