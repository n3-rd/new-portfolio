<template>
  <div class="q-mt-xl">
    <div class="container">
      <div class="row socials">
        <div
          class="col-sm-12 col-xs-12 col-md-4 social q-mt-md"
          v-for="social in socialData"
          :key="social.color"
        >
          <a :href="social.target" target="_blank">
            {{ social.name }}
          </a>
          <span class="dot" v-bind:style="{ color: social.color }">.</span>
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
          color: "#333",
          target: "https://github.com/n3-rd",
        },
        {
          name: "Email",
          color: "#dd4b39",
          target: "mailto:godwinjdayo@gmail.com",
        },
        {
          name: "Twitter",
          color: "#1da1f2",
          target: "https://twitter.com/web_n3rd",
        },
        {
          name: "LinkedIn",
          color: "#0077b5",
          target: "https://www.linkedin.com/in/godwin-jemegah-759866203/",
        },
        {
          name: "Producthunt",
          color: "#DA552F",
          target: "https://www.producthunt.com/@godwin_jemegah",
        },
      ],
    };
  },
};
</script>
