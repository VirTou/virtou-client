<template>
  <v-container>
    <v-card width="269px" class="member-image mb-0">
      <v-img height="210px" width="269px" src="test.png" />
      <v-card-text class='cap'>
        {{ caption }}
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
.cap {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  font-style: bold !important;
}

.member-image {
  border-radius: 50px;
  background-color: #22fbff;
}
</style>