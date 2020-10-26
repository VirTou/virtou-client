<template>
  <v-container>
    <div class='bg'></div>
    <div class='fg' justify='center'>
      <div class='mt-8'>
      <v-card class='signup-mobile' id='card'>
        <v-card-text>
          <div class="ma-0 py-6">
            <v-form @submit.prevent="registerUser">
              <div class=" mr-4 ml-8 mt-2">
                <b>Name</b><br />
                <v-text-field
                  filled
                  rounded
                  small
                  dense
                  background-color="white"
                ></v-text-field>
              </div>
              <div class="ml-8 mr-4 mt-2">
                <b>E-mail</b><br />
                <v-text-field
                  filled
                  rounded
                  small
                  dense
                  background-color="white"
                ></v-text-field>
              </div>
              <div class="ml-8 mr-4 mt-2">
                <b>Password</b><br />
                <v-text-field
                  filled
                  rounded
                  small
                  dense
                  type="password"
                  background-color="white"
                ></v-text-field>
              </div>
              <div class="ml-8 mr-4 mt-2">
                <b>Confirm Password</b><br />
                <v-text-field
                  filled
                  rounded
                  small
                  dense
                  type="password"
                  background-color="white"
                ></v-text-field>
              </div>
              <div class="ml-8 mr-4 mt-2 caption">
                <p style="color: white"
                  >By signing up, you agree to our
                  <span style="color: black">Terms, Data</span> and
                  <span style="color: black">Cookies Policy</span></p
                >
              </div>
              <br />
              <div align="center">
                <v-btn rounded color="secondary" primary>
                  <span style="color: #707070"><strong>SIGN UP</strong></span>
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-card-text>
      </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  head() {
    return {
      title: 'Register Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'VirTou Register',
        },
      ],
    }
  },
}
</script>

<style scoped>
.signup-mobile {
  background-color: #f27f18;
}

#card {
  border-radius: 40px;
}
</style>