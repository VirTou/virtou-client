<template>
  <v-container>
    <div>
      <v-form>
        <v-card-title class="headline"> Write to us! </v-card-title>
        <v-card-subtitle>
          You are important to us so is your feedback.
        </v-card-subtitle>
        <v-card-text>
          <b>
            Name*<br />
            <div class="textbox">
              <v-text-field rounded />
            </div>

            E-mail*<br />
            <div class="textbox"><v-text-field rounded /></div>

            Select Category*<br />
            <div class="textbox">
              <v-autocomplete :items="categories" rounded />
            </div>

            Description*<br />
            <div class="textarea"><v-textarea rounded /></div>
          </b>
        </v-card-text>
        <v-card-actions>
          <b>Rate your experience</b>
          <v-rating
            color="yellow accent-4"
            background-color="white"
            empty-icon="$ratingFull"
            dense
            hover
          />
          <v-spacer></v-spacer>
          <v-btn rounded class="black--text" color="secondary"
            ><b>SUBMIT</b></v-btn
          >
        </v-card-actions>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.textbox {
  background-color: #fff;
  border-radius: 28px;
  height: 57px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 0px;
}

.textarea {
  background-color: #fff;
  border-radius: 28px;
  height: 150px;
  margin-bottom: 30px;
  margin-top: 10px;
  padding: 0px;
}

.bg-img {
  z-index: 0;
  margin-bottom: -100px;
}
</style>