<template>
  <v-container class='ma-0 pa-0'>
    <v-card class="about-card pa-10 pb-12">
      <div class='pb-16'>
      <v-card-title>
        <h2 class="headline shrink"><b>ABOUT VIRTOU</b></h2>
      </v-card-title>
      <v-row>
        <v-col cols="12" md='8' sm='12'>
          <v-card-text>
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
.about-card {
  border-radius: 120px 120px 0px 0px;
  background-color: #22fbff;
  text-align: justify;
  padding-bottom: 190px;
  margin-top: 50px;
}
</style>