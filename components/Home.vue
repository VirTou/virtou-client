<template>
  <div class='main-bg ma-0 pa-0'>
  <v-container fluid>
    <div class='container'>
      <div align="center">
        <v-img
        alt="VirTou"
        class="shrink"
        contain
        src="logo.png"
        transition="scale-transition"
        width="350"
      />
        <p class="headline subtitle my-2">
          Enjoy and make memories, leave the planning to us!
        </p >
        <v-card class="sr-box mt-6">
          <v-row>
            <v-col cols="9" class="mx-0 px-0">
              <v-autocomplete
                clearable
                rounded
                :items="cities"
                item-text="city"
                item-value='id'
                hide-no-data
                placeholder="ENTER CITY"
                append-icon=""
                width='220px'
                v-model="city"
                background-color="#fff"
                class="mt-0 ml-4 pa-0 sr-field"
                @keypress.enter="getCityInfo"
                return-object
              ></v-autocomplete>
            </v-col>
            <v-col cols="3">
              <v-btn
                color="accent"
                elevation='4'
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
  props: ['cities'],
  components: {},
  data: () => ({
    isDepressed: false,
    city: '',
  }),
  computed: {},
  methods: {
    getCityInfo() {
      if (!this.city) {
        this.infobar = true
      } else {
        this.isDepressed = true;
        this.$router.push({ name: 'city', params: {
          city_geo: this.city.geo, 
          city_id: this.city.id, 
          city_name: this.city.name,
        }});
      }
    },
  },
}
</script>

<style scoped>
.main-bg {
  background: url('../static/bg.svg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
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
  font-family: 'Open Sans' !important;
  font-weight: 600 !important;
  font-style: bold !important;
  color: #ffffff;
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
  height: 40px;
}

.sr-field {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 600 !important;
  font-style: bold !important;
  bottom: 8px;
}

.sr-button {
  width: 40px;
  height: 40px;
  overflow: visible;
  bottom: 12px;
  right: -5px;
}
</style>
