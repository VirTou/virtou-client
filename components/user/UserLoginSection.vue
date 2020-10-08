<template>
  <v-container class="ma-0 pa-0">
    <div class="ma-4 my-16">
      <v-form @submit.prevent="loginUser">
        <div class="ml-2 mr-6 mt-2">
          <b>E-mail</b><br />
          <v-text-field
            filled
            rounded
            small
            dense
            background-color="white"
          ></v-text-field>
        </div>
        <div class="ml-2 mr-6 mt-2">
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
          <v-row>
            <v-col cols="2"><v-checkbox class="ma-0 pa-0" /></v-col>
            <v-col cols="10">keep me logged in</v-col>
          </v-row>
        </div>
        <div>
          <v-btn>LOGIN</v-btn>
        </div>
        <div>
          <v-row>
            <v-col cols="4.5">
              <v-divider />
            </v-col>
            <v-col cols="3" class="caption"> or use </v-col>
            <v-col cols="4.5">
              <v-divider />
            </v-col>
          </v-row>
        </div>
        <div align="center">
          <v-btn rounded large class="mr-8"><v-icon>mdi-google</v-icon></v-btn>
          <v-btn color="blue" rounded large class="ml-8"
            ><v-icon>mdi-facebook</v-icon></v-btn
          >
        </div>
      </v-form>
    </div>
    <div>
      <v-row>
        <v-col cols="7"></v-col>
        <v-col cols="5">
          <v-btn rounded small class="" @click="closeDialog()">CLOSE</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['userDialog'],
  methods: {
    closeDialog() {
      this.$emit('close-dialog')
    },
  },
}
</script>