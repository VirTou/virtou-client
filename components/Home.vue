<template>
  <v-container>
    <div id="background">
      <img src="bg.png" />
    </div>
    <div class="container">
      <div align="center">
        <img src="logo.png" height="150px" />
        <h1 class="headline subtitle my-2">
          Enjoy and make memories, leave the planning to us!
        </h1>
        <v-card class="sr-box mt-6">
          <v-row>
            <v-col cols="9">
              <v-text-field
                placeholder="Enter City"
                v-model="city"
                background-color="#fff"
                class="sr-text ml-4 my-0 pa-0"
                @keypress.enter="getCityInfo"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-btn
                color="accent"
                fab
                small
                class="sr-button"
                @click="getCityInfo"
                ><v-icon>mdi-magnify</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Search',
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'VirTou Home',
        },
      ],
    }
  },
  components: {},
  data: () => ({
    bg_image: { backgroundImage: '/bg.png' },
    isDepressed: false,
    city: '',
    ht: '',
  }),
  methods: {
    getCityInfo() {
      if (!this.city) {
        this.infobar = true
      } else {
        this.isDepressed = true
        this.$router.push(`/city/${this.city}`)
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.subtitle {
  color: #ffffff;
  word-spacing: 5px;
  padding-bottom: 15px;
}

#background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
}

.sr-box {
  filter: drop-shadow(1px 5px 5px rgba(0, 0, 0, 0.231));
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50px;
  overflow: visible;
  width: 300px;
  height: 49px;
}

.sr-text {
  width: 220px;
  height: 58px;
  overflow: visible;
  text-decoration: none;
  --web-animation: fadein 0.3s ease-out;
  --web-action-type: page;
  cursor: pointer;
}

.sr-button {
  width: 49px;
  height: 49px;
  overflow: visible;
  bottom: 12px;
  right: -5px;
}
</style>
