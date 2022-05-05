<template>
  <div class="background">
    <h3 class="text-center krona text-black">Mojo Music</h3>
  </div>
</template>

<style lang="scss" scoped>
.background {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #ccc742;
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
    });
  },
};
</script>
