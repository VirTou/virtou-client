<template>
  <v-container>
    <v-card class="how-it-works white--text">
      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="8">
          <v-card-title>
            <h2 class="heading">HOW IT WORKS</h2>
          </v-card-title>
          <v-card-text>
            <br />
            <p>{{ text.p1 }}</p>
            <p>{{ text.p2 }}</p>
            <p>{{ text.p3 }}</p>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"><LocationIcon fill="#0779cc" /></v-col>
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
.how-it-works {
  border-radius: 200px 200px 0px 0px;
  background-color: #f27f18;
  padding: 100px;
  text-align: justify;
  padding-bottom: 200px;
  margin-top: -266px;
}
</style>