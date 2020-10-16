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

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/blogs">Blogs</v-btn>
        <v-btn text to="/about">About Us</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
        <v-btn text x-large fab @click="openUserDialog()">
          <v-icon color="secondary">mdi-account-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
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
        { title: 'Home', link: '/' },
        { title: 'Blogs', link: '/blogs' },
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
.active {
  font-weight: bold;
  opacity: 1;
  visibility: visible;
  transition: all 0.25s;
  border-bottom: 5px solid #fff;
}

li {
  list-style: none;
}

li a {
  text-decoration: none;
}
</style>