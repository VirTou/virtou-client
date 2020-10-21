<template>
  <v-container class='ma-0 pa-0'>
    <v-card class="about-team white--text pa-8">
      <div class='py-16'>
      <v-card-title>
        <h2 class="headline title shrink px-6">THE TEAM</h2>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols='12' lg='4' md='12' v-for="member in team" :key="member.name">
            <MemberCard :member="member" />
          </v-col>
        </v-row>
      </v-card-text>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import MemberCard from "./MemberCard";

export default {
  props: ['team'],
  components: {
    MemberCard,
  },
  data() {
    return {}
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

.about-team {
  border-radius: 180px 180px 0px 0px;
  background-color: #0779cc;
  text-align: justify;
  margin-top: -280px;
  margin-bottom: -120px;
}
</style>