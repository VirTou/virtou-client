<template>
  <v-container fluid class="pt-6 pa-0 ma-0">
    <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="6">
      <gmap-marker
        v-for="(item, index) in markers"
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
  data() {
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: 'roadmap',
      markers: [
        { position: { lat: -0.48585, lng: 117.1466 } },
        { position: { lat: -6.9127778, lng: 107.6205556 } },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 848px;
  width: 100%;
}
</style>
