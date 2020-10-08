<!-- https://github.com/xon52/medium-tutorial-vue-maps-example/tree/master/src -->

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  data() {
    return {
      marker: null,
    }
  },
  mounted() {
    this.$parent.getMap((map) => {
      let infoW = new window.google.maps.InfoWindow({
        content: this.$el,
        disableAutoPan: true,
      })
      this.marker = new window.google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: map,
      })
      this.marker.addListener('click', () => {
        infoW.open(map, this.marker)
      })
    })
  },
  beforeDestroy() {
    this.marker.setMap(null)
    window.google.maps.event.clearInstanceListeners(this.marker)
  },
  render() {
    return null
  },
}
</script>
