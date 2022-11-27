import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // mode:"static",
  ssr: true,
  // target: 'static',
  // router: {
  //   base: '/testRunks/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - pr',
    title: 'exchange-rates',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n'],
  axios: {

  },
  i18n: {
    // locales: ['en', 'fr', 'es'],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: [
      {
        code: 'en',
        name: 'Eng',

      },
      {
        code: 'ru',
        name: 'Рус',

      }
    ],
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          header_title: 'Exchange Rates',
          calculator__text_field_label: "Enter currency change function",
          calculator__text_field_hint: "Count → currency → in → currency",
          allExchangeRates__select_label: "Select currency",
          AUD: "Australian dollar",
          AZN: "Azerbaijani manat",
          GBP: "British pound sterling",
          AMD: "Armenian dram",
          BYN: "Belarusian ruble",
          BGN: "Bulgarian Lev",
          BRL: "Brazilian Real",
          HUF: "Hungarian forints",
          HKD: "Hong Kong dollars",
          DKK: "Danish kroner",
          USD: "U.S. dollar ",
          EUR: "Euro",
          INR: "Indian rupees",
          KZT: "Kazakh tenge",
          CAD: "Canadian dollar",
          KGS: "Kyrgyz som",
          CNY: "Chinese yuan",
          MDL: "Moldavian lei",
          NOK: "Norwegian kroner",
          PLN: "Polish zloty",
          RON: "Romanian leu",
          XDR: "SDR (Special Drawing Rights)",
          SGD: "Singapore dollar",
          TJS: "Tajik somoni",
          TRY: "Turkish lira",
          TMT: "New Turkmen manat",
          UZS: "Uzbek soums",
          UAH: "Ukrainian hryvnia",
          CZK: "Czech crowns",
          SEK: "Swedish kroner",
          CHF: "Swiss frank ",
          ZAR: "South African rand",
          KRW: "Won Republic of Korea",
          JPY: "Japanese yen",
          RUB: "Russian ruble",
          help:"Help",
          help_calculator:`The 'calculator' page contains a field for entering the currency change function. For bills
          you must enter the amount of currency, the original currency, the word "in" and the final currency.
          Rules:
          All form elements are entered with a space.
          All form elements are entered in a certain order (number → currency → in → currency).
          To enter a currency, you can use its name or letter code (you can see the possible currencies
          on the 'allExchangeRates' page).
          When entering a currency, case does not matter.`,
          heip_allExchangeRates:"On the page 'allExchangeRates' there is a field with a choice of a certain currency and currency cards with the rate of the selected currency."
        },
        ru: {
          header_title: 'Курс валют',
          calculator__text_field_label: "Введите функцию изменения валюты",
          calculator__text_field_hint: "Число → валюта → in → валюта",
          allExchangeRates__select_label: "Выберите валюту",
          AUD: "Австралийский долла",
          AZN: "Азербайджанский мана",
          GBP: "Фунт стерлингов Соединенного королевства",
          AMD: "Армянских драмо",
          BYN: "Белорусский рубл",
          BGN: "Болгарский лев",
          BRL: "Бразильский реал ",
          HUF: "Венгерских форинтов ",
          HKD: "Гонконгских долларов ",
          DKK: "Датских крон ",
          USD: "Доллар США ",
          EUR: "Евро ",
          INR: "Индийских рупий ",
          KZT: "Казахстанских тенге ",
          CAD: "Канадский доллар ",
          KGS: "Киргизских сомов ",
          CNY: "Китайских юаней ",
          MDL: "Молдавских леев ",
          NOK: "Норвежских крон ",
          PLN: "Польский злотый ",
          RON: "Румынский лей ",
          XDR: "СДР (специальные права заимствования)",
          SGD: "Сингапурский доллар ",
          TJS: "Таджикских сомони ",
          TRY: "Турецких лир ",
          TMT: "Новый туркменский манат ",
          UZS: "Узбекских сумов ",
          UAH: "Украинских гривен ",
          CZK: "Чешских крон ",
          SEK: "Шведских крон ",
          CHF: "Швейцарский франк ",
          ZAR: "Южноафриканских рэндов ",
          KRW: "Вон Республики Корея ",
          JPY: "Японских иен ",
          RUB:"Российский рубль",
          help:"Помощь",
          help_calculator:`
          На странице calculator находится поле для ввода функции изменения валюты. Для посчетов
          необходимо ввести количество валюты, изначальную валюту, слово "in" и конечную валюту.
          Правила:
          Все элементы формы вводятся через пробел.
          Все элементы формы вводятся в определенном порядке (число → валюта → in → валюта).
          Для ввода валюты можно использовать её название или буквенный код (посмотреть возможные валюты можно
          на странице allExchangeRates).
          При вводе валюты регистр не имеет значения.`,
          heip_allExchangeRates:"На странице allExchangeRates находятся поле с выбором оперделенной валюты и карточки валют с курсом выбранной валюты."
        },

      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
