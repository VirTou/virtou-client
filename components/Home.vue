<template>
  <div class='main-bg'>
  <v-container>
    <!-- <div id="background">
      <img src="bg.png" />
      <v-img alt='background' class='shrink main-bg' src='bg.png' transition='scale-transition' />
    </div> -->
    <div class='container'>
      <div align="center">
        <v-img
        alt="VirTou"
        class="shrink ml-2"
        contain
        src="logo.png"
        transition="scale-transition"
        width="350"
      />
        <h1 class="headline subtitle my-2">
          Enjoy and make memories, leave the planning to us!
        </h1>
        <v-card class="sr-box mt-6">
          <v-row>
            <v-col cols="9" class="mx-0 px-0">
              <v-autocomplete
                clearable
                rounded
                :items="cities"
                placeholder="Enter City"
                append-icon=""
                width='220px'
                v-model="city"
                background-color="#fff"
                class="my-0 ml-4 pa-0"
                @keypress.enter="getCityInfo"
              ></v-autocomplete>
            </v-col>
            <v-col cols="3">
              <v-btn
                color="accent"
                fab
                small
                class="ma-0 pa-0 sr-button"
                @click="getCityInfo"
                ><v-icon>mdi-magnify</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </v-container>
  </div>
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
    cities: ['Aurangabad', 'Delhi', 'Goa', 'Jaipur'],
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
.main-bg {
  background-image: url('../static/bg.png');
  height: 100%;
}

.container {
  margin: 0 auto;
  height: 100vh;
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
  width: 250px;
  height: 49px;
}

.sr-button {
  width: 49px;
  height: 49px;
  overflow: visible;
  bottom: 12px;
}
</style>
