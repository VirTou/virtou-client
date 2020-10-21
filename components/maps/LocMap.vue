<template>
  <v-container fluid class="pt-6 pa-0 ma-0">
    <gmap-map :center="city.center" :map-type-id="mapTypeId" :zoom="12">
      <gmap-marker
        v-for="(item, index) in geo"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      >
      </gmap-marker>
    </gmap-map>
  </v-container>
</template>

<script>
export default {
  props: ['geo', 'city'],
  data() {
    return {
      mapTypeId: 'roadmap',
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 100vh;
  width: 100%;
}
</style>
