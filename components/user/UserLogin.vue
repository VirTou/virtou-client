<template>
  <v-overlay v-model='userDialog' color='#003c3c' opacity='0.8'>
  <vuescroll>
  <v-dialog
    v-model="userDialog"
    max-width="680px"
    max-height="700px"
    content-class='card-user-login'
    color='transparent'
    @click:outside='closeDialog'
  >
    <div class='user-card'>
      <v-card
        max-width="660px"
        color="transparent"
        elevation='0'
        text--bold
        text--color="modalText"
      >
        <v-row justify='center'>
          <v-col cols="6" class="user-register-section">
            <UserRegisterSection />
          </v-col>
          <v-col cols="6" class="user-login-section">
            <UserLoginSection />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-dialog>
  </vuescroll>
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
  border-radius: 110px !important;
  background-image: url('../../static/login_section_bg.svg');
  text-align: justify;
}

.v-application {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-size: 18px;
  font-weight: 700 !important;
  font-style: bold !important;
}
div, button, input, optgroup, select, textarea, p, .row {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px;
  font-weight: 600 !important;
  font-style: bold !important;
}
</style>