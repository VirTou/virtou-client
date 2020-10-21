<template>
  <v-container class='mb-n10'>
    <div class="bg contact-bg"></div>
    <div class="fg">
      <v-row>
        <v-col cols="12">
          <div v-if="$vuetify.breakpoint.mdAndUp">
            <div class="contact-lg">
              <v-row>
                <v-col cols="12" md="5" sm="12" xs="12">
                  <div class="contact-form pl-10 pr-6">
                    <ContactForm />
                  </div>
                </v-col>
                <v-col cols='0' md='1' sm='0' xs='0'></v-col>
                <v-col cols="12" md="6" sm="12">
                  <ContactSocialTree width='100%' />
                </v-col>
              </v-row>
            </div>
            <div class="contact-bottom">
              <ContactBottom />
            </div>
          </div>
          <div v-else>
            <div class='cnt-sm'>
              <ContactForm />
              <ContactSocialTree width='100%' height='100%' />
            </div>
            <div class='cnt-sm-bt'>
              <ContactBottom />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ContactForm from "../components/contact/ContactForm";
import ContactSocialTree from "../components/contact/ContactSocialTree";
import ContactBottom from "../components/contact/ContactBottom";

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
  components: {
    ContactBottom,
    ContactForm,
    ContactSocialTree,
  },
  data() {
    return {
      categories: ['Complaint', 'Feedback', 'Query', 'Review', 'Suggestion'],
    }
  },
  mounted() {
    // console.log(this.$vuetify.breakpoint.width);
  }
}
</script>

<style scoped>
.contact-lg {
  border-radius: 200px 200px 0px 0px;
  background-color: #22fbff;
  margin-top: 30px;
  margin-bottom: 0px;
  padding: 30px;
}

.contact-bottom {
  margin-top: -150px;
  margin-bottom: -70px;
}

.contact-social-tree-lg {
  /* position: fixed; */
  /* margin-bottom: -8%; */
}

.contact-social-tree-md {
  /* position: fixed; */
  bottom: -280px;
  margin-bottom: 50px;
}

.cnt-md {
  background-image: url("../static/contact_bg_lg.svg");
  padding: 80px;
  margin-top: 3%;
  margin-bottom: 2%;
  height: 100%;
}

.cnt-sm {
  border-radius: 120px 120px 0px 0px;
  background-color: #22fbff;
  margin: 50px 0px 50px 0px;
  padding: 40px 5px 30px 5px;
}

.cnt-sm-bt {
  margin-top: -92px;
  margin-bottom: -100px;
}
</style>