<template>
  <v-container fluid class="pa-0 ma-0">
    <div class='ma-0 pa-0'>
      <v-btn x-small v-ripple="{class: 'primary--text'}" class='floating-button btn' :class="drawer_left ? 'left' : ''" @click='openDrawer'>
          <v-icon v-on='on'>{{ drawer_icon }}</v-icon>
      </v-btn>
    </div>
    <v-navigation-drawer
      clipped
      class="pt-10"
      :style='navStyle'
      id='nav-drawer'
      v-model="drawer"
      color="transparent"
      width="340px"
      :permanent='drawer'
      absolute
    >
      <vue-scroll>
        <v-expansion-panels accordion 
          elevation='0'
        >
          <v-expansion-panel 
            v-for='item in getCitySites'
            :key='item.site_id'
            class='pa-0 ma-0'
            id='exp-panel'
            elevation='4'
            @click='clickedMarker(item)'
          >
            <v-card
              id='card'
              class="ma-2 px-1 py-0 scroll"
              shaped 
              color='accent'
            >
              <v-expansion-panel-header>
                <v-card-title class="ma-0 pa-0">
                  <h2 class="title">{{ item.rank }}.&nbsp;{{ item.name }}</h2>
                </v-card-title>
              </v-expansion-panel-header>
              <v-expansion-panel-content class='text'>
                {{ item.about }}
              </v-expansion-panel-content>
            </v-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </vue-scroll>
    </v-navigation-drawer>
    <div v-if="$apollo.loading || this.city.id==null" class='ma-16'>
      <p>Loading...</p>
    </div>
    <div v-else id='map' ref='map'>
      <LocMap :geo="getSiteData()" :markerId='id' :city='city'/>
    </div>
    <div>
      <v-snackbar
        v-model='snackbar'
        :timeout='2000'
      >
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="secondary"
            text
            v-bind='attrs'
            @click="snackbar=false"
            >
            Close
          </v-btn>
        </template>  
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import LocMap from "~/components/maps/LocMap";
import sitesQuery from "~/apollo/queries/site/sites";

export default {
  name: 'CityInfo',
  components: {
    LocMap,
  },
  created() {
    if(this.$route.params.city_id==undefined) {
      this.$apollo.queries.getCitySites.skip = true;
      this.goBack();
    }
  },
  head() {
    return {
      title: 'Search',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'VirTou Search',
        },
      ],
    }
  },
  apollo: {
    getCitySites: {
      prefetch: true,
      query: sitesQuery,
      variables() {
        return { cityid: this.city.id }
      },
      error(error) {
        console.log(error);
      },
    }
  },
  mounted() {
    if(this.$apollo.loading){
      this.setCityInfo();
      this.mapHeight();
    }
  },
  methods: {
    clickedMarker(item) {
      this.id = item.id;
      if(item.geo == "NaN") {
        this.snackbar = true;
        this.snackbarText = "GeoLocation not Present.";
      }
      console.log(item);
    },
    goBack() {
      this.$router.go(-1)
    },
    mapHeight() {
      // console.log(this.$refs.map.clientHeight);
      // var ht = this.$refs.map.clientHeight + "px";
      // Vue.set(this.navStyle, 'height', ht);
    },
    getSiteData() {
      if(this.geoSites.length < 1) {
        var val = {};
        var pos = {};
        this.geoSites = [];
        if(this.getCitySites.length > 0) {
          this.getCitySites.forEach((site) => {
            var lat = parseFloat(site['geo'].split(',')[0]);
            var lng = parseFloat(site['geo'].split(',')[1]);
            var name = site['name'];
            var rank = parseInt(site['rank']);
            var id = parseInt(site['id']);
            this.geoSites.push({'position': {'id': id,
                                          'lat': lat,
                                          'lng': lng,
                                          'name': name,
                                          'rank': rank}});
        });
        }
      }
      return this.geoSites;
    },
    openDrawer() {
      this.drawer = !this.drawer;
      this.drawer_icon = 'mdi-chevron-right'==this.drawer_icon ? 'mdi-chevron-left' : 'mdi-chevron-right';
      this.drawer_left = !this.drawer_left;
    },
    openExpandedDialog(item) {
      this.expandedDialog = true;
      this.expandedItem = item;
    },
    closeExpandedDialog() {
      this.expandedDialog = false;
      this.expandedItem = '';
    },
    setCityInfo() {
      this.city['id'] = parseInt(this.$route.params.city_id);
      this.city['name'] = this.$route.params.city_name;
      this.city['center']['lat'] =  parseFloat(this.$route.params.city_geo.split(',')[0]);
      this.city['center']['lng'] =  parseFloat(this.$route.params.city_geo.split(',')[1]);
    }
  },
  data() {
    return {
      id: null,
      snackbar: false,
      snackbarText: '',
      geoSites: [],
      navStyle: {},
      getCitySites: [],
      on: null,
      expandedItem: '',
      expandedDialog: false,
      drawer: false,
      drawer_icon: 'mdi-chevron-right',
      drawer_left: false,
      city: {
        id: null,
        name: null,
        center: {},
      },
    }
  },
}
</script>

<style scoped>
.title {
  font-family: 'PT Sans', sans-serif !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  word-break: keep-all;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 400 !important;
  font-size: 12px !important;
}

#nav-drawer {
  background-color: transparent;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  -o-backdrop-filter: blur(5px);
  -ms-backdrop-filter: blur(5px);
}

#exp-panel {
  background-color: transparent;
  z-index: 100;
}

.v-expansion-panel:before {
  box-shadow: none;
  transition: none;
  border-radius: none;
}

.v-expansion-panel:not(:first-child):after {
  border-top: none;
}

li {
  text-decoration: none;
  list-style: none;
}

.v-btn-ex {
  right: 0;
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}

#card {
  border-radius: 50px;
  text-align: justify;
  color: white;
}

.floating-button {
  position: fixed;
  z-index: 1;
  top: 10%;
}

.btn {
  width: 12px;
  min-width: 0px;
  height: 56px;
  min-height: 56px;
  border-radius: 5px;
}

.btn::before {
  background-color: transparent;
}

.btn i:hover {
  transform: scale(2);
}

.left {
  transform: translateX(340px);
}
</style>
