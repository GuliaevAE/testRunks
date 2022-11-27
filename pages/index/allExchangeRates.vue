<template>
    <v-col>
        <v-row justify="center" align="center">
            <v-select :items="Object.keys(this.datas)" class="mt-2" label="Выберите валюту" outlined color="blue" light
                v-model="selectedValute"></v-select>
        </v-row>
        <v-row justify="space-between">
            <v-col v-if="item.CharCode !== selectedValute" cols="12" sm="6" md="4" lg="3"
                v-for="(item, k) in updatedDatas" :key="item.CharCode">   
                <Card :item='item' :k="k" />
            </v-col>
        </v-row>
    </v-col>

</template>
  
<script>
export default {
    name: 'IndexPage',
    props: ['datas'],
    data() {
        return {
            valutes: [],
            selectedValute: 'RUB'
        }
    },
    computed: {
        updatedDatas() {
            let selectValute = Object.values(this.datas).filter(x => x.CharCode === this.selectedValute)[0]
            let clone = []
            Object.values(this.datas).forEach(x => {
                clone.push({
                    CharCode: x.CharCode,
                    ID: x.ID,
                    Name: x.Name,
                    Nominal: x.Nominal,
                    NumCode: x.NumCode,
                    Previous: x.Previous,
                    Value: x.Value
                })
            })

            return clone.map(x => {
                x.Value = x.Value / x.Nominal / selectValute.Value * selectValute.Nominal
                return x
            })
        }
    }
}
</script>

  