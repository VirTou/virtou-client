<template>
  <v-container class="ma-0 pa-0">
    <div class="mx-4 my-16">
      <v-form @submit.prevent="registerUser">
        <div class="ml-8 mr-4 mt-2">
          <b>Name</b><br />
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
        <div class="ml-8 mr-4 mt-2">
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
        <div class="ml-8 mr-4 mt-2">
          <b>Password</b><br />
          <v-text-field
            solo
            height='40px'
            width='220px'
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
            solo
            height='40px'
            width='220px'
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
  </v-container>
</template>

<style scoped>
.tf {
  max-height: 40px;
  border: none;
  text-decoration: none;
  box-shadow: 0px;
  padding: 4px 0px;
}
</style>