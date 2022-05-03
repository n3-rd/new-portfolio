<template>
  <div class="q-mt-xl">
    <div class="container">
      <div class="row socials">
        <div
          class="col-sm-6 col-md-4 social"
          v-for="social in socialData"
          :key="social.color"
        >
          <a :href="social.target" target="_blank">
            {{ social.name }}
          </a>
          <span class="dot" style="'color:{social.color}'">.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.socials {
  .social {
    font-size: 2.4rem;
    font-family: krona;
    opacity: 0.8;
    cursor: pointer;
    text-align: center;
    .dot {
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      socialData: [
        {
          name: "Github",
          color: "#121212",
          target: "https://github.com/n3-rd",
        },
        { name: "Email", color: "#121212", target: "https://github.com/n3-rd" },
        {
          name: "Twitter",
          color: "#121212",
          target: "https://github.com/n3-rd",
        },
      ],
    };
  },
};
</script>
