<template>
  <v-overlay v-model='userDialogMobile' color='#003c3c' opacity='0.90'>
  <v-dialog
    v-model="userDialogMobile"
    content-class='card-user-login'
    color='transparent'
    @click:outside='closeDialog'
  >
    <div align='center' justify='center'>
      <v-btn color='#f27f18' large class='mx-4 def-color' to='/sign-up' @click='closeDialog'>Sign Up</v-btn>
      <v-btn color='#22fbff' large class='mx-4 def-color' to='/log-in' @click='closeDialog'>Login</v-btn>
    </div>
  </v-dialog>
  </v-overlay>
</template>

<script>
export default {
  name: 'UserModal',
  props: ['userDialogMobile'],
  data() {
    return { }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog-mobile')
    },
  },
}
</script>

<style>
.card-user-login {
  border-radius: 5px;
  background: transparent;
  text-align: justify;
}
</style>