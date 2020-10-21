<template>
  <v-footer inset color="primary">
    <v-layout justify-center row wrap>
      <v-flex lighten py-1 text-center white--text xs-12 class="caption">
        <v-row class="ma-0 pa-0">
          <v-col lg='3' md='3' sm='3' cols='12' class="ma-0 pa-0 shrink">
            Designed & Developed in <br />
            <IndiaLogo />
          </v-col>
          <v-col lg='1.5' md='1.5' sm='1.5'></v-col>
          <v-col lg='3' sm='3' md='3' cols='12' class="ma-0 pa-0 shrink">
            Copyright &copy; {{ new Date().getFullYear() }} -
            <strong>VirTou</strong> Pvt. Ltd. <br />All rights reserved.
          </v-col>
          <v-col lg='1.5' md='1.5' sm='1.5'></v-col>
          <v-col lg="3" md='3' sm='3' cols='12' class="shrink ma-0 pa-0"> contact@virtou.com</v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import IndiaLogo from './IndiaLogo';

export default {
  name: 'Footer',
  components: {
    IndiaLogo, 
  },
}
</script>

<style scoped>
* {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 400 !important; 
}
</style>