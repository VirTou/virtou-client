<template>
  <v-container>
    <div class="ma-0 pa-0 member-card ">
      <div align="center">
        <MemberImageCard :caption="member.caption" />
      </div>
      <br />
      <div class="member-info">
        <v-card-title class='pr-0 title'>{{ member.name }}</v-card-title>
        <v-card-subtitle class="white--text subtit">{{
          member.designation
        }}</v-card-subtitle>
        <v-card-text class='text'>{{ member.info }}</v-card-text>
        <v-card-actions>
          <div cols='6' lg='12'>
          <v-btn text><v-icon color="#fff">mdi-instagram</v-icon></v-btn>
          <v-btn text><v-icon color="#fff">mdi-twitter</v-icon></v-btn>
          </div>
          <div cols='6' lg='12'>
          <v-btn text><v-icon color="#fff">mdi-facebook</v-icon></v-btn>
          <v-btn text><v-icon color="#fff">mdi-web</v-icon></v-btn>
          </div>
        </v-card-actions>
      </div>
    </div>
  </v-container>
</template>

<script>
import MemberImageCard from './MemberImageCard';

export default {
  props: ['member'],
  components: {
    MemberImageCard,
  },
}
</script>

<style scoped>
.title {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 700 !important;
  font-size: 24px !important;
  font-style: bold !important;
}

.subtit {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  font-style: bold !important;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 400 !important;
  font-size: 14px !important;
}

.member-card {
  background-color: 'transparent';
  color: white;
  margin: 50px;
}

.member-info {
  padding: 30px;
}
</style>