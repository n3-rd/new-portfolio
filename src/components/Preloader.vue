<template>
  <div>
    <div class="loader">
      <div class="wrapper">
        <span class="loader-counter">
          <span id="value">0</span>
          <span>%</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 78px;
  overflow: hidden;
}
.loader {
  position: fixed;
  background: #000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .loader-counter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4.6rem;
    color: #fff;
    font-family: krona;
    opacity: 0.8;
  }
}
</style>

<script>
import gsap from "gsap";

setTimeout(() => {}, 1000);

export default {
  name: "preloader",
  data() {
    return {};
  },
  mounted() {
    const value = document.getElementById("value");
    const loader = document.querySelector(".loader");
    const loaderCounter = document.querySelector(".loader-counter");
    const tl = gsap.timeline({
      onComplete: () => {
        tl.to(loader, 0.5, {
          opacity: 0,
        });
        loader.style.display = "none";

        loaderCounter.style.display = "none";
      },
    });
    tl.to(value, {
      duration: 7,
      text: "100",
      ease: "power4.out",
    });

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    const obj = document.getElementById("value");
    animateValue(obj, 0, 100, 5000);
  },
};
</script>
