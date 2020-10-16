<template>
  <v-container fluid class="pa-0 ma-0">
    <div class='ma-0 pa-0'>
      <v-btn x-small v-ripple="{class: 'primary--text'}" class='floating-button btn' :class="drawer_left ? 'left' : ''" @click='openDrawer'>
          <v-icon v-on='on'>{{ drawer_icon }}</v-icon>
      </v-btn>
    </div>
    <v-navigation-drawer
      class="pt-14"
      id='nav-drawer'
      v-model="drawer"
      color="transparent"
      width="340px"
      :permanent='drawer'
      clipped
      fixed
    >
      <vue-scroll>
        <v-expansion-panels accordion 
          elevation='0'
        >
          <v-expansion-panel 
            v-for='item in cityData'
            :key='item.site_id'
            class='pa-0 ma-0'
            id='exp-panel'
            elevation='4'
          >
            <v-card
              id='card'
              class="ma-2 px-3 scroll"
              shaped 
              color='accent'
            >
              <v-expansion-panel-header>
                <v-card-title class="ma-0 py-1">
                  <h2 class="subtitle-1">{{ item.site_name }}</h2>
                </v-card-title>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.about }}
              </v-expansion-panel-content>
            </v-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </vue-scroll>
    </v-navigation-drawer>
    <LocMap />
  </v-container>
</template>

<script>
import LocMap from "../../../components/maps/LocMap";

export default {
  name: 'CityInfo',
  components: {
    LocMap,
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
  methods: {
    openDrawer() {
      this.drawer = !this.drawer;
      this.drawer_icon = 'mdi-chevron-right'==this.drawer_icon ? 'mdi-chevron-left' : 'mdi-chevron-right';
      this.drawer_left = !this.drawer_left;
    },
    openExpandedDialog(item) {
      console.log(item);
      this.expandedDialog = true;
      this.expandedItem = item;
    },
    closeExpandedDialog() {
      this.expandedDialog = false;
      this.expandedItem = '';
    }
  },
  data() {
    return {
      on: null,
      expandedItem: '',
      expandedDialog: false,
      drawer: false,
      drawer_icon: 'mdi-chevron-right',
      drawer_left: false,
      city: '',
      headers: [
        { text: 'Rank', align: 'start', value: 'site_id' },
        {
          text: 'Site Name',
          align: 'center',
          value: 'site_name',
          sortable: false,
        },
        { text: 'Link', align: 'center', value: 'link', sortable: false },
        { text: '', value: 'data-table-expand' },
      ],
      cityData: [
        {
          site_id: '1',
          site_name: 'abc',
          link: 'www.abc.com',
          about:
            'Lorem ipsum incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
        },
        {
          site_id: '2',
          site_name: 'xyz',
          link: 'www.xyz.com',
          about:
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          site_id: '3',
          site_name: 'der',
          link: 'www.xyz.com',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          site_id: '4',
          site_name: 'lmn',
          link: 'www.xyz.com',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          site_id: '5',
          site_name: 'ter',
          link: 'www.xyz.com',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          site_id: '6',
          site_name: 'mno',
          link: 'www.xyz.com',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo lit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          site_id: '7',
          site_name: 'mno',
          link: 'www.xyz.com',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo lit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          site_id: '8',
          site_name: 'mno',
          link: 'www.xyz.com',
          about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo lit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    }
  },
  async created() {
    this.loading = false
    // this.city = this.route.params.city;
    // try {
    //   // const res = await axios.get(`/api/v1/profile/${this.route.params.city}`);
    //   // this.cityData = res.data.data;
    //   console.log(this.cityData);
    //   this.loading = false;
    // } catch (err) {
    //   this.loading = false;
    //   this.error = err.response.data.message;
    // }
  },
  computed: {},
}
</script>

<style scoped>
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
  position: absolute;
  z-index: 1;
  top: 8%;
}

.btn {
  width: 12px;
  min-width: 0px;
  height: 56px;
  min-height: 56px;
  border-radius: 0px;
}

.btn::before {
  background-color: transparent;
}

.btn i:hover {
  transform: scale(1.5);
}

.left {
  transform: translateX(340px);
}
</style>
