<template>
  <v-footer color="primary">
    <v-layout justify-center row wrap>
      <v-flex lighten py-4 text-center white--text xs12 class="caption">
        <v-row class="ma-0 pa-0">
          <v-col cols="3" class="ma-0 pa-0">
            Designed & Developed in <br />
            <IndiaLogo />
          </v-col>
          <v-col cols="1.5"></v-col>
          <v-col cols="3" class="ma-0 pa-0">
            Copyright &copy; {{ new Date().getFullYear() }} -
            <strong>VirTou</strong> Pvt. Ltd. <br />All rights reserved.
          </v-col>
          <v-col cols="1.5"></v-col>
          <v-col cols="3" class="ma-0 pa-0"> contact@virtou.com </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>