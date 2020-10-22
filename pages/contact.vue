<template>
  <v-container class='mb-n10 mt-0'>
    <div class="bg contact-bg"></div>
    <div class="fg mt-10">
      <v-row>
        <v-col cols="12">
          <div v-if="$vuetify.breakpoint.mdAndUp">
            <div class="contact-lg">
              <v-row>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="contact-form pl-10 pr-6">
                    <ContactForm />
                  </div>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <div :class="($vuetify.breakpoint.width < 1905 && $vuetify.breakpoint.width>1260) ? 'diff-pad' : ''">
                    <ContactSocialTree width='100%' />
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="contact-bottom pb-n16 mb-n16">
              <ContactBottom height='170px' />
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
}
</script>

<style scoped>
.contact-lg {
  border-radius: 200px 200px 0px 0px;
  background-color: #22fbff;
  margin-bottom: 0px;
  padding: 30px;
}

.contact-bottom {
  margin-top: -168px;
  padding-bottom: -300px !important;
}

.diff-pad {
  margin-bottom: -94px;
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
  margin: 0px 0px 50px 0px;
  padding: 40px 5px 30px 5px;
}

.cnt-sm-bt {
  margin-top: -115px;
  margin-bottom: -100px;
}
</style>