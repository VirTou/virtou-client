<template>
  <v-container fluid class="pt-6 pa-0 ma-0">
    <gmap-map :center="city.center" :map-type-id="mapTypeId" :zoom="12">
      <gmap-marker
        v-for="(item, index) in geo"
        ref="gmap"
        :key="index"
        :position="item.position"
        :icon="iconOption(item)"
        :clickable="true"
        :animation="(item.position.id==markerId)? 4: 6"
        @click="toggleInfoWin(item)"
      ></gmap-marker>
       <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <span>{{rank}}. {{name}}</span>
      </gmap-info-window>
    </gmap-map>
  </v-container>
</template>

<script>
export default {
  props: ['geo', 'city', 'markerId'],
  data() {
    return {
      infoWinShow: false,
      mapTypeId: 'roadmap',
      infoOptions: {
        pixelOffset: {
          width: -15,
          height: -80
        }
      },
      infoWinOpen: false,
      infoWindowPos: {
        lat: 0, 
        lng: 0,
      },
      rank: null,
      name: null,
    }
  },
  methods: {
    toggleInfoWin(item) {
      this.infoWinOpen = !this.infoWinOpen;
      this.infoWindowPos['lat'] = item.position['lat'];
      this.infoWindowPos['lng'] = item.position['lng'];
      this.rank = item.position.rank;
      this.name = item.position.name;
    },
    iconOption(item)  {
      return {
        url: item.position.rank<=10 ? "ranked_marker.svg" : "normal_marker.svg",
        size: {width: 60, height: 90, f: 'px', b: 'px',},
        scaledSize: {width: 30, height: 45, f: 'px', b: 'px',},
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 100vh;
  width: 100%;
}

.markerAnimation {
  animation: pulse .5s 2000 alternate;
  -webkit-animation: pulse .5s 2000 alternate;
  transform-origin: center;
  -webkit-transform-origin: center;
}
</style>
