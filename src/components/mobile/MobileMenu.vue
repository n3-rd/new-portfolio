<template>
  <div class="q-mt-xl">
    <q-dialog
      v-model="on"
      transition-show="slide-right"
      transition-hide="slide-left"
    >
      <q-card class="bg-black text-white">
        <q-bar>
          <q-space />

          <!-- <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn> -->
        </q-bar>

        <q-card-section>
          <!-- <q-btn icon="close" size="lg" @click="closeMenu()" round /> -->

          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      on: true,
    };
  },
  methods: {
    closeMenu() {
      console.log(this.$.parent.ctx.showMobileMenu);

      this.$.parent.ctx.showMobileMenu == false;
      console.log(this.$.parent.ctx.showMobileMenu);
    },
  },
};
</script>
