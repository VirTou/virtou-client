<template>
  <v-container>
    <div class='bg'></div>
    <div class='fg' justify='center'>
      <div class='my-8'>
      <v-card class='signup-mobile' id='card'>
        <v-card-content>
          <div class="my-2 py-12">
            <v-form @submit.prevent="registerUser">
              <div class="ml-8 mr-4 mt-2">
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
                <v-text style="color: white"
                  >By signing up, you agree to our
                  <span style="color: black">Terms, Data</span> and
                  <span style="color: black">Cookies Policy</span></v-text
                >
              </div>
              <br />
              <div align="center">
                <v-btn rounded color="secondary" primary>
                  <v-text color="primary">
                    <span style="color: #707070"><strong>SIGN UP</strong></span>
                  </v-text>
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-card-content>
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