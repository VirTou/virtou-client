<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home';
// import citiesQuery from "~/apollo/queries/city/cities";

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
  // apollo: {
  //   cities: {
  //     prefectch: true,
  //     query: citiesQuery
  //   }
  // },
  // created() {
  //   this.getCities();
  // },
  // methods: {
  //   async getCities() {
  //     try {
  //       console.log(process.env.apiUrl);
  //       const res = await axios.post(
  //         process.env.apiUrl, {
  //           query: `
  //             getCities() {
  //               id
  //               name
  //             }
  //           `
  //         }, { header: {
  //           'Content-Type': 'application/json'
  //         }
  //       });
  //       console.log(res);
  //     } catch(error) {
  //       console.log(error);
  //     }
  //   },
  // },
}
</script>
