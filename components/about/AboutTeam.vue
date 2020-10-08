<template>
  <!-- <v-container>
    <v-card class="about-team white--text">
      <v-card-text>
        <div v-for="i in Math.ceil(team.length / 3)" :key="i">
          <v-row>
            <div
              v-for="member in team.slice((i - 1) * 3, (i - 1) * 3 + 3)"
              :key="member.name"
              class="ma-0 pa-0"
            >
              <v-col cols="4">
                <MemberCard :member="member" />
                {{ member.name }} 
              </v-col>
            </div>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </v-container> -->

  <v-container>
    <v-card class="about-team white--text">
      <v-card-text>
        <v-row>
          <v-col v-for="member in team" :key="member.name">
            <MemberCard :member="member" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['team'],
  data() {
    return {}
  },
}
</script>

<style scoped>
.about-team {
  border-radius: 200px 200px 0px 0px;
  background-color: #0779cc;
  padding: 100px;
  text-align: justify;
  margin-top: -276px;
  margin-bottom: -60px;
}
</style>