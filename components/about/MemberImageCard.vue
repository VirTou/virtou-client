<template>
  <v-container>
    <v-card width="269px" class="member-image">
      <v-img height="210px" width="269px" src="test.png" />
      <v-card-text>
        <b>{{ caption }}</b>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['caption'],
}
</script>

<style scoped>
.member-image {
  border-radius: 50px;
  background-color: #22fbff;
}
</style>