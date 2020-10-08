<template>
  <v-container fluid class="pa-0 ma-0">
    <v-navigation-drawer
      class="pt-14 pl-2"
      v-model="drawer"
      color="transparent"
      width="350px"
      height="896px"
      permanent
      clipped
      fixed
      app
    >
      <vue-scroll>
        <v-list app dense>
          <v-card
            v-for="item in cityData"
            :key="item.site_id"
            id="card"
            class="my-3 mr-3 pa-3 scroll"
            height="120px"
            shaped
            color="accent"
          >
            <v-card-title class="ma-0 py-1">
              <h2 class="subtitle-1">{{ item.site_name }}</h2>
            </v-card-title>
            <v-row class="px-6 py-0 my-0">
              <h1 class="caption">
                {{ item.about.substring(0, 70) }}
                <v-btn text small class="right" color="white"
                  ><strong
                    >Expand<v-icon small>mdi-chevron-down</v-icon></strong
                  ></v-btn
                >
              </h1>
            </v-row>
            <v-row class="px-6 py-0 my-0">
              <v-spacer></v-spacer>
            </v-row>
          </v-card>
        </v-list>
      </vue-scroll>
    </v-navigation-drawer>
    <LocMap />
  </v-container>
</template>

<script>
export default {
  name: 'CityInfo',
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
  data() {
    return {
      drawer: true,
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
  methods: {},
}
</script>

<style scoped>
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
  border-radius: 100px;
  text-align: justify;
  color: white;
}
</style>
