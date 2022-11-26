<template>
  <v-app dark>
    <v-app-bar elevate-on-scroll scroll-target="#scrolling-techniques-7" color="blue" dense fixed app>
      <v-toolbar-title> Курс валют</v-toolbar-title>
      <v-spacer />
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-tooltip</v-icon>
          </v-btn>
        </template>
        <v-card light>
          <v-card-title class="text-h5 blue white--text">
            Помощь
          </v-card-title>

          <v-card-text>
            На странице <v-icon>mdi-calculator</v-icon> находится поле для ввода функции изменения валюты. Для посчетов
            необходимо ввести количество валюты, изначальную валюту, слово "in" и конечную валюту.
            <p>
              <strong>Правила:</strong>
            <ul>
              <li>Все элементы формы вводятся через пробел.</li>
              <li>Все элементы формы вводятся в определенном порядке (число → валюта → in → валюта).</li>
              <li>Для ввода валюты можно использовать её название или буквенный код (посмотреть возможные валюты можно
                на странице <v-icon>mdi-apps</v-icon>). </li>
                <li>При вводе валюты регистр не имеет значения.</li>
            </ul>
            </p>

          </v-card-text>
          <v-card-text>
            На странице <v-icon>mdi-apps</v-icon> находятся поле с выбором оперделенной валюты и карточки валют с курсом
            выбранной валюты.

          </v-card-text>
        </v-card>
      </v-dialog>


      
      <v-btn icon class="ml-3" v-for="item in items" :key="i" :to="item.to" prefetch router exact>
        <v-icon>{{ item.icon }}</v-icon>
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
      items: [
        {
          icon: 'mdi-calculator',
          title: 'calculator',
          to: '/calculator'
        },
        {
          icon: 'mdi-apps',
          title: 'allExchangeRates',
          to: '/allExchangeRates'
        },

      ],


    }
  },



}
</script>
