<template>
  <v-container class='ma-0 pa-0'>
    <v-card class="how-it-works white--text pa-10">
      <div class='pad-bottom'>
        <v-row>
          <v-col cols="0" lg='4' md='4' sm='0'></v-col>
          <v-col cols="12" lg='8' md='8' sm='12'>
            <v-card-title>
              <h2 class="headline shrink"><b>HOW IT WORKS</b></h2>
            </v-card-title>
            <v-card-text>
              <br />
              <p>{{ text.p1 }}</p>
              <p>{{ text.p2 }}</p>
              <p>{{ text.p3 }}</p>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row v-if='$vuetify.breakpoint.smAndUp'>
          <v-col cols="1" class='my-0 py-0'><LocationIcon fill="#0779cc" /></v-col>
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
.how-it-works {
  border-radius: 120px 120px 0px 0px;
  background-color: #f27f18;
  text-align: justify;
  margin-top: -145px;
}

.pad-bottom {
  padding-bottom: 190px;
}
</style>