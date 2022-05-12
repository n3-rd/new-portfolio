<template>
  <div class="q-my-xl">
    <div class="title q-my-xl">My Work</div>

    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 col-md-4 q-mt-xl"
          v-for="project in projects"
          :key="project.imgPath"
        >
          <router-link :to="project.link">
            <q-img
              :src="project.imgPath"
              style="width: 323px"
              spinner-color="primary"
              class="project-image"
            />

            <div class="project-title text-center">
              {{ project.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2.1rem;
  font-family: krona;
  opacity: 0.8;
}
.project-image {
  display: block;
  margin: 0 auto;
  opacity: 0.8;
  &:hover {
    opacity: 0.6;
  }
}
.project-title {
  font-size: 1.9rem;
  font-family: syne;
  opacity: 0.8;
}
</style>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Mojo Music",
          desc: "",
          imgPath: "project-images/mojo-music.png",
          link: "/MojoMusic",
        },
        {
          name: "Roqqu Clone",
          desc: "",
          imgPath: "project-images/roqqu-clone.png",
          link: "/RoqquAppClone",
        },
        {
          name: "Sonicology",
          desc: "",
          imgPath: "project-images/sonicology.png",
          link: "/Sonicology",
        },
        {
          name: "Iotanotes",
          desc: "",
          imgPath: "project-images/iotanotes.png",
          link: "/Iotanote",
        },
        {
          name: "Shorten-er",
          desc: "",
          imgPath: "project-images/shortener.png",
          link: "/MojoMusic",
        },
      ],
    };
  },
  methods: {
    goToProject: function () {},
  },
};
</script>
