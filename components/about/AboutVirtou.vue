<template>
  <v-container class='mx-0 mb-0 px-0 pb-0'>
    <v-card class="about-card"
      :class="$vuetify.breakpoint.mdAndUp ? 'border-rad-md' : 'border-rad-sm'">
      <div class='pad-bottom'>
      <v-card-title>
        <h2 class="headline title shrink">ABOUT VIRTOU</h2>
      </v-card-title>
      <v-row>
        <v-col cols="12" md='8' sm='12'>
          <v-card-text class='text'>
            <p>{{ text.p1 }}</p>
            <p>{{ text.p2 }}</p>
            <p>{{ text.p3 }}</p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row v-if="$vuetify.breakpoint.smAndUp">
        <v-col cols="11" lg='11' md='10' sm='10'></v-col>
        <v-col cols="1" lg='1' md='2' sm='2' class='my-0 py-0' :class="($vuetify.breakpoint.width < 1905 && $vuetify.breakpoint.width>1260) ? 'extra-mar' : ''">
          <LocationIcon fill="#F27F18" />
        </v-col>
      </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import LocationIcon from './LocationIcon';

export default {
  props: ['text'],
  components: {
    LocationIcon,
  },
}
</script>

<style scoped>
.title {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 700 !important;
  font-size: 40px !important;
  font-style: bold !important;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  font-style: bold !important;
}

.about-card {
  background-color: #22fbff;
  text-align: justify;
}

.pad-bottom {
  padding-bottom: 200px;
}

.extra-mar {
  margin-bottom: -20px !important;
}

.border-rad-md {
  border-radius: 200px 200px 0px 0px;
  padding: 60px 80px 0px 80px;
}

.border-rad-sm {
  border-radius: 120px 120px 0px 0px;
  padding: 60px 20px 0px 20px;
}
</style>