<template>
  <v-container>
    <v-app-bar
      elevate-on-scroll
      fixed
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
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              link
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text rounded to="/">Home</v-btn>
        <v-btn text rounded to="/blogs">Blogs</v-btn>
        <v-btn text rounded to="/about">About Us</v-btn>
        <v-btn text rounded to="/contact">Contact</v-btn>
        <v-btn text x-large fab @click="openUserDialog()">
          <v-icon color="secondary">mdi-account-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
      <UserLogin :userDialog="userDialog" @close-dialog="closeUserDialog" />
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userDialog: false,
      items: [
        { title: 'Home', link: '/' },
        { title: 'Blogs', link: '/blogs' },
        { title: 'About Us', link: '/about' },
        { title: 'Contact', link: '/contact' },
        { title: 'User', link: '/user' },
      ],
    }
  },
  methods: {
    openUserDialog() {
      this.userDialog = true
    },
    closeUserDialog() {
      this.userDialog = false
    },
  },
}
</script>