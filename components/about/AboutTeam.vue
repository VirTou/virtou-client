<template>
  <v-container class='ma-0 pa-0'>
    <v-card class="about-team white--text pa-2">
      <div class='py-16'>
      <v-card-title>
        <h2 class="headline shrink px-6"><b>THE TEAM</b></h2>
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
.about-team {
  border-radius: 120px 120px 0px 0px;
  background-color: #0779cc;
  text-align: justify;
  margin-top: -266px;
  margin-bottom: -120px;
}
</style>