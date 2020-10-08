<template>
  <v-container>
    <v-card class="mt-8 blog-card" :style="{ backgroundColor: randomColor() }">
      <v-card-title>
        {{ blogPost.title }}
      </v-card-title>
      <v-card-text class="caption">
        {{ blogPost.text }}
      </v-card-text>
      <v-card-actions>
        <v-btn text><v-icon>mdi-heart</v-icon>{{ blogPost.positive }}</v-btn>
        <v-btn text><v-icon>mdi-negative</v-icon>{{ blogPost.positive }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn text><v-icon>mdi-share</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'BlogPostCard',
  props: ['blogPost'],
  data() {
    return {
      colors: ['#0779CC', '#F27F18', '#22FBFF'],
    }
  },
  methods: {
    randomColor() {
      var r = Math.ceil(Math.random() * 100) % 3
      return this.colors[r]
    },
  },
}
</script>

<style scoped>
.blog-card {
  border-radius: 50px;
  padding: 20px;
}
</style>