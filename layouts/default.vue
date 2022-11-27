<template>
  <v-app dark>
    <v-app-bar elevate-on-scroll scroll-target="#scrolling-techniques-7" color="blue" dense fixed app>
      <v-toolbar-title>
        <strong>{{ $t('header_title') }}</strong>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-tooltip</v-icon>
          </v-btn>
        </template>
        <v-card light>
          <v-card-title class="text-h5 blue white--text">
            {{$t("help")}}
          </v-card-title>
          <v-card-text>
            {{$t("help_calculator")}}
          </v-card-text>
          <v-card-text>
            {{$t("heip_allExchangeRates")}}
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-btn icon :to="localePath('/calculator')" prefetch router exact>
        <v-icon>mdi-calculator</v-icon>
      </v-btn>
      <v-btn icon :to="localePath('/allExchangeRates')" prefetch router exact>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

    </v-app-bar>
    <v-main class="white">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
