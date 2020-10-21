<template>
  <v-container>
    <v-card class="py-1 blog-card txtColor--text" :style="{ backgroundColor: randomColor(), color: txtCol }">
      <v-card-title class='title'>
        {{ blogPost.title }}
      </v-card-title>
      <v-card-text :style="{ color: txtCol }" class="text" align='justify'>
        {{ blogPost.text.slice(0, randomLength()) }}
      </v-card-text>
      <v-card-actions :style="{ color: txtCol }" class='actions'>
        <v-btn text><v-icon color='white'>mdi-heart</v-icon>{{ blogPost.positive }}</v-btn>
        <v-btn text><v-icon color='white'>mdi-minus-box</v-icon>{{ blogPost.positive }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn text><v-icon color='white'>mdi-share</v-icon></v-btn>
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
      txtCol: '#212529',
      colors: ['#0779CC', '#F27F18', '#22FBFF'],
    }
  },
  methods: {
    txtColor() {

    },
    randomColor() {
      var r = Math.ceil(Math.random() * 100) % 3
      if(r==0) {
        this.txtCol='#fff'
      } 
      return this.colors[r]
    },
    randomLength() {
      return Math.ceil(Math.random() * 500)
    }
  },
}
</script>

<style scoped>
.blog-card {
  border-radius: 50px;
  padding: 20px;
}

.title {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 700 !important;
  font-size: 32px !important;
  font-style: bold !important;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  font-style: bold !important;
}

.actions, button {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  font-style: bold !important;
}
</style>