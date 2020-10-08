<template>
  <v-dialog
    persistent
    v-model="userDialog"
    max-width="680px"
    max-height="700px"
    content-class="user-card"
  >
    <v-card
      max-width="650px"
      class="ml-4 user-card"
      color="transparent"
      elevation="0"
      text--bold
      text--color="modalText"
    >
      <v-row align="center" justify="center">
        <v-col cols="6" class="user-register-section">
          <UserRegisterSection />
        </v-col>
        <v-col cols="6" class="user-login-section">
          <UserLoginSection
            :userDialog="userDialog"
            @close-dialog="closeDialog"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserModal',
  props: ['userDialog'],
  methods: {
    closeDialog() {
      this.$emit('close-dialog')
    },
  },
}
</script>

<style scoped>
.user-card {
  border-radius: 120px;
}

.user-register-section {
  background-color: #f27f1b;
  border-radius: 120px 0px 0px 120px;
  height: 620px;
  filter: drop-shadow(12px 20px 10px rgba(0, 0, 0, 0.231));
}

.user-login-section {
  height: 620px;
  border-radius: 0px 120px 120px 0px;
  background-color: #22fbff;
  filter: drop-shadow(-12px 20px 10px rgba(0, 0, 0, 0.231));
}
</style>