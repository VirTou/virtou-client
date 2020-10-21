import Vue from 'vue';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll, {
  ops: {
    rail: {
      opacity: '0',
      size: '2px',
      background: 'rgb(100, 100, 100)',
    },
    bar: {
      size: '2px',
      keepshow: false,
      background: 'rgb(128, 128, 128)',
    },
    scrollButton: {
      enable: false,
    },
    scrollPanel: {
      easing: 'easeInQuad',
      speed: 800,
    },
    vuescroll: {
      wheelScrollDuration: 0,
      wheelDirectionReverse: false,
    },
  },
});
