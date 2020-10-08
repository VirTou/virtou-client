<template>
  <v-container>
    <div class="bg contact-bg"></div>

    <div class="fg">
      <v-row>
        <v-col cols="12">
          <div class="contact">
            <v-row>
              <v-col cols="4" md="4" sm="12">
                <div class="contact-form">
                  <ContactForm />
                </div>
              </v-col>
              <v-col cols="1" md="1" sm="0"></v-col>
              <v-col cols="7" md="7" sm="12">
                <div class="contact-social-tree">
                  <ContactSocialTree />
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="contact-bottom">
            <ContactBottom />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'VirTou Contact',
        },
      ],
    }
  },
  data() {
    return {
      categories: ['Complaint', 'Feedback', 'Query', 'Review', 'Suggestion'],
    }
  },
}
</script>

<style scoped>
.contact {
  border-radius: 200px 200px 0px 0px;
  background-color: #22fbff;
  margin-top: 50px;
  padding: 80px;
}

.contact-bottom {
  margin-top: -220px;
  margin-bottom: -35px;
}
</style>