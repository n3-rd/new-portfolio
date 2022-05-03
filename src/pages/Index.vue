<template>
  <div class="q-pl-xl">
    <q-scroll-area style="height: 100vh" dark>
      <div class="fixed-top q-px-xl">
        <Header />
      </div>
      <div class="contact fixed-bottom-right">
        <GetInContact />
      </div>
      <div class="main-container">
        <div class="main-inner">
          <MainText />
        </div>
      </div>

      <div class="q-mr-lg">
        <About />
      </div>

      <div>
        <MyStack />
      </div>

      <div>
        <MyWork />
      </div>

      <div>
        <Footer />
      </div>
      <div>
        <Preloader />
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MainText from "../components/MainText.vue";
import Header from "../components/Header.vue";
import GetInContact from "../components/GetInContact.vue";
import About from "../components/About.vue";
import MyStack from "../components/MyStack.vue";
import MyWork from "../components/MyWork.vue";
import Footer from "../components/Footer.vue";
import Preloader from "../components/Preloader.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    MainText,
    Header,
    GetInContact,
    About,
    MyStack,
    MyWork,
    Footer,
    Preloader,
  },
});
</script>

<style lang="scss">
.main-container {
  display: flex;
  height: 100vh;
  align-items: center;
}
</style>
