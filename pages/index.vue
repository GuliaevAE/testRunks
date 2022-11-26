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
  methods: {
    fetchD(e) {
      let value = e.split(' in ')

      let count = Number(value[0].split(' ')[0])
      let from = value[0].split(' ')[1]
      let to = value[1]


      let from1
      let to1


      Object.values(this.datas).forEach(x => {
        if (from === x.NumCode || from === x.CharCode || from === x.Name) {
          from1 = x
        }
        if (to === x.NumCode || to === x.CharCode || to === x.Name) {
          to1 = x
        }
      })
      if (count && from1 && to1) {
        this.curs = from1.Value / to1.Value * to1.Nominal * count
      }
      this.count = count,
        this.from = from1,
        this.to = to1
    },

  },

  async asyncData({ $axios }) {
    const resData = await $axios.$get(`https://www.cbr-xml-daily.ru/daily_json.js`)
    let subObj = {
      RUB: {
        CharCode: "RUB",
        ID: "R1",
        Name: "Российский рубль",
        Nominal: 1, NumCode: "1",
        Previous: 1, Value: 1
      }
    }
    let datas = Object.assign(resData.Valute,subObj)
    console.log(datas)
    return { datas }
  }
}
</script>
