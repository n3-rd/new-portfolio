<template>
  <div class="q-my-xl">
    <div class="title q-my-xl">My Stack</div>

    <div class="container stack-container">
      <div class="row">
        <div
          class="col-xs-6 col-md-4 q-py-md stack-icon"
          v-for="stack in stacks"
          :key="stack.iconPath"
        >
          <q-img alt="" :src="stack.iconPath" width="55px">
            <q-tooltip
              transition-show="rotate"
              class="bg-grey-10 text-white"
              transition-hide="rotate"
            >
              {{ stack.name }}
            </q-tooltip>
          </q-img>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2.1rem;
  font-family: krona;
  opacity: 0.8;
}
.stack-container {
  width: 40%;
  .stack-icon {
    object-fit: contain !important;
    object-position: 50% 50%;
    // width: 55px !important;
  }
  img {
    object-fit: contain !important;
    object-position: 50% 50%;
    width: 55px !important;
  }
}
</style>
<script>
export default {
  data() {
    return {
      stacks: [
        { name: "HTML", iconPath: "stack-icons/html.svg" },
        { name: "CSS", iconPath: "stack-icons/css.svg" },
        { name: "Javascript", iconPath: "stack-icons/javascript.svg" },
        { name: "NodeJs", iconPath: "stack-icons/nodejs.svg" },
        { name: "VueJs", iconPath: "stack-icons/vue.svg" },
        { name: "Quasar Framework", iconPath: "stack-icons/quasar.svg" },
        { name: "Sass", iconPath: "stack-icons/sass.svg" },
        { name: "Nuxt", iconPath: "stack-icons/nuxt.svg" },
        { name: "Firebase", iconPath: "stack-icons/firebase.svg" },
        { name: "SQL & SQLite", iconPath: "stack-icons/database.svg" },
        { name: "Tailwind css", iconPath: "stack-icons/tailwindcss.svg" },
        { name: "Figma", iconPath: "stack-icons/figma.svg" },
        { name: "Capacitor", iconPath: "stack-icons/capacitor.svg" },
      ],
    };
  },
};
</script>
