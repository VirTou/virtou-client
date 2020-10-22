<template>
  <v-container>
    <div>
      <v-form class='shrink def-color my-0 py-0'> 
        <v-card-title class="display-2 font-weight-bold">Write to us!</v-card-title>
        <v-card-subtitle class='text'>
          You are important to us so is your feedback.
        </v-card-subtitle>
        <v-card-text class='body-1 subt'>
            Name*<br />
            <div class="textbox">
              <v-text-field class='tf' solo dense rounded />
            </div>

            E-mail*<br />
            <div class="textbox">
              <v-text-field class='tf' solo dense rounded />
            </div>

            Select Category*<br />
            <div class="textbox mt-5">
              <v-autocomplete class='textfield' solo dense :items="categories" rounded />
            </div>

            Description*<br />
            <div class="textarea">
              <vue-scroll>
                <v-textarea solo dense rounded no-resize></v-textarea>
              </vue-scroll>
            </div>
        </v-card-text>
        <v-card-actions>
          <p class='pa-0 ma-0 shrink'>Rate your experience &nbsp;</p>
          <v-rating
            color="yellow accent-4"
            background-color="white"
            empty-icon="$ratingFull"
            dense
            hover
            class='pa-0 ma-0'
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
export default {
  data() {
    return {
      categories: ['Complaint', 'Feedback', 'Query', 'Review', 'Suggestion'],
    }
  },
}
</script>

<style scoped>
.v-application .display-1, 
.v-application .display-2 {
  font-family: 'PT Sans Narrow', sans-serif !important;
}

.text {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 600 !important;
  font-size: 14px !important;
}

.subt {
  font-family: 'PT Sans Narrow', sans-serif !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  font-style: bold !important;
}

.tf {
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  max-height: 40px;
  border: none;
  text-decoration: none;
  box-shadow: 0px;
  padding: 4px 0px;
}

.textfield {
  bottom: 8px;
  margin-top: 10px;
}

.textbox {
  background-color: transparent;
  border-radius: 28px;
  margin-bottom: 15px;
  margin-right: 30%;
  max-height: 40px;
  margin-top: 5px;
}

.textarea {
  background-color: transparent;
  border-radius: 28px;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 0px;
}

.bg-img {
  z-index: 0;
  margin-bottom: -100px;
}
</style>