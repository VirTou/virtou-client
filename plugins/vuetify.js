import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
// import { VueMasonryPlugin } from "vue-masonry"

Vue.use(Vuetify)
// Vue.use(VueMasonryPlugin)

export default val => {
  const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#003C3C',
          secondary: '#FEFF3C',
          accent: '#0779CC',
          accent1: '#0455BF',
          modalText: '#707070',
          registerSection: '#F27F1B',
          loginSection: '#22FBFF',
          themeC1: '#0779CC',
          themeC2: '#F27F18',
          themeC3: '#22FBFF',
        }
      }

    }
  });
  val.app.vuetify = vuetify;
  val.$vuetify = vuetify.framework;
}
