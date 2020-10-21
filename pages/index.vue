<template>
  <div>
    <Home :cities="cities" />
  </div>
</template>

<script>
import Home from '@/components/Home';
import citiesQuery from "~/apollo/queries/city/cities";

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      cities: [],
    }
  },
  apollo: {
    cities: {
      prefetch: true,
      query: citiesQuery
    }
  },
  // apollo: {
  //   cities: gql `
  //     query getCities {
  //       cities {
  //         id
  //         city
  //       }
  //   }` 
  // },
  // created() {
  //   this.getCities();
  // },
  // methods: {
  //   getCities() {
  //     axios({
  //       url: "http://localhost:3010/graphql",
  //       method: 'post',
  //       data: {
  //         query: `
  //           query getCities {
  //             cities {
  //               id
  //               city
  //             }
  //           }
  //         `
  //       }
  //     }).then((result) => {
  //       console.log(result.data.data.cities)
  //     });
  //   },
  // }
}
</script>
