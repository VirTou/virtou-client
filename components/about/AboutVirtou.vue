<template>
  <v-container>
    <v-card class="about-card">
      <v-card-title>
        <h2 class="heading">ABOUT VIRTOU</h2>
      </v-card-title>
      <v-row>
        <v-col cols="8">
          <v-card-text>
            <p>{{ text.p1 }}</p>
            <p>{{ text.p2 }}</p>
            <p>{{ text.p3 }}</p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="11"></v-col>
        <v-col cols="1"><LocationIcon fill="#F27F18" /></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style scoped>
.about-card {
  border-radius: 200px 200px 0px 0px;
  background-color: #22fbff;
  padding: 100px;
  text-align: justify;
  padding-bottom: 200px;
  margin-top: 50px;
}
</style>