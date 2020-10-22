<template>
  <v-container class='ma-0 pa-0'>
    <v-card class="about-team white--text" :class="$vuetify.breakpoint.mdAndUp ? 'border-rad-md' : 'border-rad-sm'">
      <v-card-title>
        <h2 class="headline title shrink">THE TEAM</h2>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols='12' lg='4' md='12' v-for="member in team" :key="member.name">
            <MemberCard :member="member" />
          </v-col>
        </v-row>
      </v-card-text>
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
  margin-top: -245px;
  margin-bottom: -120px;
}

.border-rad-md {
  border-radius: 200px 200px 0px 0px;
  padding: 60px 80px 30px 80px;
}

.border-rad-sm {
  border-radius: 120px 120px 0px 0px;
  padding: 60px 20px 30px 20px;
}
</style>