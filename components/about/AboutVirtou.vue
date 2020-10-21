<template>
  <v-container class='ma-0 pa-0'>
    <v-card class="about-card pa-10 pb-12 pl-16">
      <div class='pb-16'>
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
        <v-col cols="10" lg='11' sm='10'></v-col>
        <v-col cols="2" lg='1' sm='2' class='my-0 py-0'><LocationIcon fill="#F27F18" /></v-col>
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
  border-radius: 180px 180px 0px 0px;
  background-color: #22fbff;
  text-align: justify;
  padding-bottom: 190px;
  margin-top: 50px;
}
</style>