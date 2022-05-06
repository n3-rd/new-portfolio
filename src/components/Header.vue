<template>
  <div>
    <div class="mobile-menu lt-md" v-if="this.showMobileMenu == true">
      <q-btn
        icon="close"
        class="float-right"
        @click="this.showMobileMenu = false"
        round
      />
      <MobileMenu class="q-mt-xl" />
    </div>

    <div class="mobile-menu lt-md float-right" v-if="!this.showMobileMenu">
      <q-btn icon="menu" @click="this.showMobileMenu = true" round />
    </div>

    <div class="gt-sm header-container q-pr-md q-pt-lg">
      <div class="wrapper line">
        <div class="title sp">
          <a href="#"> Godwin <span class="dot">.</span> </a>
        </div>
      </div>

      <div class="links">
        <div class="wrapper line">
          <div class="about q-px-sm q-mx-sm sp">
            <a href="#">About</a>
          </div>
        </div>
        <div class="wrapper line">
          <div class="my-work q-px-sm q-mx-sm sp">
            <a href="#">My Work</a>
          </div>
        </div>
        <div class="wrapper line">
          <div class="contact q-px-sm q-mx-sm sp">
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header-container {
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;
    .dot {
      font-size: 1.9rem;
    }
  }
  .links {
    flex-direction: row;
    display: flex;
    font-size: 1rem;
  }
}
</style>

<script>
import MobileMenu from "../components/mobile/MobileMenu";

export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
