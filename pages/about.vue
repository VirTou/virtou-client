<template>
  <v-container class="mb-0 pb-0">
    <div class="bg"></div>
    <div class="fg">
      <v-row>
        <v-col cols="12">
          <div id="about-virtou">
            <AboutVirtou :text="text" />
          </div>
          <div id="how-it-works">
            <HowItWorks :text="text" />
          </div>
          <div id="about-team">
            <AboutTeam :team="team" />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'VirTou Home',
        },
      ],
    }
  },
  data() {
    return {
      team: [
        {
          name: 'Nikunj Fotedar',
          designation: 'CO-FOUNDER & CTO',
          caption: 'The misc. one who bosses around',
          info:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.',
        },
        {
          name: 'Pruthvi Shetty',
          designation: 'CO-FOUNDER & CTO',
          caption: 'The one with the experience',
          info:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.',
        },
        {
          name: 'Shubham Dangwal',
          designation: 'CO-FOUNDER & CTO',
          caption: 'The one who is lost in details',
          info:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.',
        },
      ],
      text: {
        p1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        p2:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        p3:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    }
  },
}
</script>