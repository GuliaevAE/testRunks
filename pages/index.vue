<template>
  <NuxtChild :datas='datas' />
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      count: '',
      from: '',
      to: '',
      curs: ''
    }
  },

  async asyncData({ $axios }) {
    const resData = await $axios.$get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    let subObj = {
      RUB: {
        CharCode: 'RUB',
        ID: 'R1',
        Name: 'Российский рубль',
        Nominal: 1, NumCode: '1',
        Previous: 1, Value: 1
      }
    }
    let datas = Object.assign(resData.Valute, subObj)

    return { datas }
  }
}
</script>