<template>
  <v-overlay v-model='userDialog' color='#003c3c' opacity='0.90'>
  <v-dialog
    v-model="userDialog"
    max-width="680px"
    max-height="700px"
    content-class='card-user-login'
    color='transparent'
    @click:outside='closeDialog'
  >
    <div class='user-card'>
      <vue-scroll>
      <v-card
        max-width="650px"
        class="ml-4"
        color="transparent"
        elevation='0'
        text--bold
        text--color="modalText"
      >
        <v-row align="center" justify="center">
          <v-col cols="6" class="user-register-section">
            <UserRegisterSection />
          </v-col>
          <v-col cols="6" class="user-login-section">
            <UserLoginSection />
          </v-col>
        </v-row>
      </v-card>
      </vue-scroll>
    </div>
  </v-dialog>
  </v-overlay>
</template>

<script>
import UserRegisterSection from './UserRegisterSection';
import UserLoginSection from './UserLoginSection';

export default {
  name: 'UserModal',
  components: {
    UserRegisterSection,
    UserLoginSection,
  },
  props: ['userDialog'],
  data() {
    return { }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog')
    },
  },
}
</script>

<style>
.user-card {
  background-size: cover;
  background-image: url('../../static/login_section_bg.svg');
}

.card-user-login {
  border-radius: 105px 105px 105px 105px !important;
  background: transparent;
  text-align: justify;
}
</style>