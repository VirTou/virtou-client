<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      cities: '',
    }
  },
  methods: {
    async getCities() {

    },
  },
}
</script>
