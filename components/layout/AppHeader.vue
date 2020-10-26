<template>
  <v-container>
    <v-app-bar
      elevate-on-scroll
      app
      color="primary"
      class="ma-0"
      position="relative"
      height="60px"
      dark
    >
      <v-img
        alt="VirTou"
        class="shrink mr-1"
        contain
        src="logo.png"
        transition="scale-transition"
        width="100"
      />

      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-menu bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              outlined
              rounded
              v-bind="attrs"
              v-on="on"
              @click.stop="drawer = !drawer"
              >Menu</v-btn
            >
          </template>
          <v-list color='primary'>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              link
              align='center'
            >
              <v-list-item-content>
                <v-list-item-title class='white--text'>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div align='center'>
              <v-btn text x-large fab @click="openUserDialogMobile()">
                <v-icon color="secondary">mdi-account-circle</v-icon>
              </v-btn>
            </div>
          </v-list>
        </v-menu>
      </span>

      <div class="hidden-xs-only">
        <v-btn text dense to="/">Search</v-btn>
        <v-btn text dense to="/blogs">Discover</v-btn>
        <v-btn text dense to="/about">About Us</v-btn>
        <v-btn text dense to="/contact">Contact</v-btn>
        <v-btn class='ml-4 bttn' elevation="4" small fab color="secondary" @click="openUserDialog()">
          <v-icon class='ma-0 pa-0' color="primary">mdi-account</v-icon>
        </v-btn>
      </div>

      <UserLogin :userDialog="userDialog" @close-dialog="closeUserDialog" />
      <UserLoginMobile :userDialogMobile="userDialogMobile" @close-dialog-mobile='closeUserDialogMobile' />
    </v-app-bar>
  </v-container>
</template>

<script>
import UserLogin from '../user/UserLogin';
import UserLoginMobile from '../user/UserLoginMobile';

export default {
  name: 'Header',
  components: {
    UserLogin,
    UserLoginMobile,
  },
  data() {
    return {
      activeClass: 'active',
      userDialog: false,
      userDialogMobile: false,
      items: [
        { title: 'Search', link: '/' },
        { title: 'Discover', link: '/blogs' },
        { title: 'About Us', link: '/about' },
        { title: 'Contact', link: '/contact' },
      ],
    }
  },
  computed: {
    currentPage() {
      return this.$route.path;;
    },
  },
  methods: {
    openUserDialog() {
      this.userDialog = true
    },
    openUserDialogMobile() {
      this.userDialogMobile = true
    },
    closeUserDialog() {
      this.userDialog = false
    },
    closeUserDialogMobile() {
      this.userDialogMobile = false
    },
  },
}
</script>

<style scoped>
.v-btn {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 400;
  font-style: bold;
}
</style>