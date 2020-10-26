<template>
  <v-container class="ma-0 pa-0">
    <div class="ml-8 my-16 mr-4">
      <v-form @submit.prevent="loginUser">
        <div class="ml-2 mr-6 mt-2">
          <b>E-mail</b><br />
          <v-text-field
            solo
            height='40px'
            width='220px'
            rounded
            small
            dense
            background-color="white"
          ></v-text-field>
        </div>
        <div class="ml-2 mr-6 mt-2">
          <b>Password</b><br />
          <v-text-field
            height='40px'
            width='220px'
            solo
            rounded
            small
            dense
            type="password"
            background-color="white"
          ></v-text-field>
        </div>
        <div>
          <v-row class='ml-4'>
            <v-checkbox color='#F27F1B' class="ma-0 pa-0" />
            keep me logged in
          </v-row>
        </div>
        <div>
          <v-btn class='bttn' rounded color="secondary" primary>
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
          <v-row class='ml-4'>
            <v-col cols='6'>
              <v-btn class='bttn' height='50' width='75' color='transparent' small text>
                <GoogleButton />
              </v-btn>
            </v-col>
            <v-col cols='6'>
              <v-btn class='bttn' height='50' width='75' color='transparent' small text>
                <FacebookButton />
              </v-btn>
            </v-col>
            <v-col cols='2'></v-col>
          </v-row>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';

export default {
  props: [''],
  components: {
    GoogleButton,
    FacebookButton,
  },
}
</script>