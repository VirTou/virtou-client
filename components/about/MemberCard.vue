<template>
  <v-container>
    <div class="ma-0 pa-0 member-card">
      <div align="center">
        <MemberImageCard :caption="member.caption" />
      </div>
      <br />
      <div class="member-info">
        <v-card-title>{{ member.name }}</v-card-title>
        <v-card-subtitle class="white--text">{{
          member.designation
        }}</v-card-subtitle>
        <v-card-text>{{ member.info }}</v-card-text>
        <v-card-actions>
          <v-btn text><v-icon color="#fff">mdi-instagram</v-icon></v-btn>
          <v-btn text><v-icon color="#fff">mdi-twitter</v-icon></v-btn>
          <v-btn text><v-icon color="#fff">mdi-facebook</v-icon></v-btn>
          <v-btn text><v-icon color="#fff">mdi-web</v-icon></v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['member'],
}
</script>

<style scoped>
.member-card {
  background-color: 'transparent';
  color: white;
  margin: 50px;
}

.member-info {
  padding: 30px;
}
</style>