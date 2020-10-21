<template>
  <v-container fluid>
    <v-navigation-drawer
      app
      class="pt-14"
      id='nav-drawer'
      v-model="drawer"
      color="transparent"
      width="340px"
      :permanent='drawer'
    >
      <vue-scroll>
        <v-expansion-panels accordion 
          elevation='0'
        >
          <v-expansion-panel 
            v-for='item in getCitySites'
            :key='item.site_id'
            class='pa-0 ma-0'
            id='exp-panel'
            elevation='4'
          >
            <v-card
              id='card'
              class="ma-2 px-3 scroll"
              shaped 
              color='accent'
            >
              <v-expansion-panel-header>
                <v-card-title class="ma-0 py-1">
                  <h2 class="subtitle-1">{{ item.name }}</h2>
                </v-card-title>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.about }}
              </v-expansion-panel-content>
            </v-card>
          </v-expansion-panel>
        </v-expansion-panels>
      </vue-scroll>
    </v-navigation-drawer>
  </v-container>
</template>