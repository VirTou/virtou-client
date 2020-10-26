<template>
  <v-container>
    <div class='bg'></div>
    <div class='fg mx-auto' justify='center'>
      <div class='mt-8'>
      <v-card class='login-mobile' id='card'>
        <v-card-text>
        <div class="py-6 ma-0 px-0">
          <v-form @submit.prevent="loginUser">
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
            <div>
              <v-row class='ml-8'>
                <v-checkbox 
                  color='#F27F1B' 
                  class="ma-0 pa-0" 
                  :ripple="false" />
                keep me logged in
              </v-row>
            </div>
            <div class='ml-8'>
              <v-btn rounded color="secondary" primary>
                <span style="color: #707070"><strong>LOGIN</strong></span>
              </v-btn>
            </div>
            <div>
              <v-row>
                <v-col cols="5" class='px-1'>
                  <v-divider />
                </v-col>
                <v-col cols="2" class="pr-0 pl-1 pt-5 mx-0 caption">
                  or use
                </v-col>
                <v-col cols="5" class='px-0'>
                  <v-divider />
                </v-col>
              </v-row>
            </div>
            <div>
              <v-row class='pb-4 ml-2'>
                <v-col cols='6'>
                  <v-btn text small color='transparent'>
                    <GoogleButton />
                  </v-btn>
                </v-col>
                <v-col cols='6'>
                <v-btn color="transparent" small text>
                    <FacebookButton />
                  </v-btn>
                </v-col>
              </v-row>
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
import GoogleButton from '../components/user/GoogleButton';
import FacebookButton from '../components/user/FacebookButton';

export default {
  name: 'Login',
  components: {
    GoogleButton,
    FacebookButton,
  },
  head() {
    return {
      title: 'Login Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'VirTou Login',
        },
      ],
    }
  },
}
</script>

<style scoped>
.login-mobile {
  background-color: #22fbff;
}

#card {
  border-radius: 40px;
}
</style>