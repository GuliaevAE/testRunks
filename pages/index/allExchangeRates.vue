<template>
    <v-col>
        <v-row justify="center" align="center">
            <v-select :items="Object.keys(this.datas)" class="mt-2" label="Выберите валюту" outlined color="blue" light
                v-model="selectedValute"></v-select>
        </v-row>
        <v-row justify="space-between">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, k) in updatedDatas" :key="item.CharCode"
                v-if="item.CharCode !== selectedValute">
                <v-card color="white" light min-width="250px" elevation="7" class="mt-2">
                    <v-card-title>
                        <img v-if="k % 2 != 0" class="red rounded pa-1" src="~/assets/images/hand.svg" alt="">
                        <img v-else class="blue rounded pa-1" src="../../assets/images/hand.svg" alt=""></img>
                        <span class="ml-2">{{ item.CharCode }}</span>
                    </v-card-title>
                    <v-card-subtitle light class="pb-0">
                        <strong  v-if="k % 2 != 0" class="red--text ">{{ item.Name }}</strong> 
                        <strong v-else class="blue--text ">{{ item.Name }}</strong> 
                    </v-card-subtitle>
                    <v-card-text v-if="k % 2 != 0" class="red pb-0">
                       <strong class="white--text">1 {{ item.CharCode }} = {{ item.Value.toFixed(3) }} {{ selectedValute }}</strong> 
                    </v-card-text>
                    <v-card-text v-else class="blue pb-0">
                        <strong class="white--text">1 {{ item.CharCode }} = {{ item.Value.toFixed(3) }} {{ selectedValute }}</strong> 
                     </v-card-text>
                </v-card>
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

<style scoped>
.icond {


    border: 2px solid #ffffff;
    border-radius: 5px;
}
</style>
  