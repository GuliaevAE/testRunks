<template>
    <v-col>
        <v-row justify="center" align="center">      
            <v-text-field :hint='$t("calculator__text_field_hint")' light outlined :label= '$t("calculator__text_field_label")'
                placeholder="100 AMD in RUB" color="blue" hide-details="auto" class="blue--text" @input="inputAction">
            </v-text-field>
        </v-row>
        <v-row justify="space-between">
            <v-card width="100%" color="white" elevation="0" class="mt-3">
                <v-row justify="space-between">
                    <v-col xs="12" cols="12" sm="5">
                        <v-card v-if="from" height="100%" color="white" elevation="7" light>
                            <v-card-title>
                                <img class="blue rounded pa-1" src="~/assets/images/hand.svg" alt="">
                                <strong class="ml-2 blue--text">{{ from.CharCode }}</strong>
                            </v-card-title>
                            <v-card-subtitle class="blue--text pb-0"><strong>{{ $t(from.CharCode) }}</strong></v-card-subtitle>
                            <v-card-text class="blue pb-0">
                                <strong class="white--text">{{ count }} {{ from.CharCode }}</strong>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col v-if="to" xs="12" cols="12" sm="2" class="mt-auto mb-auto" align="center" justify="center"
                        height="100%">
                        <v-icon light>mdi-arrow-left-right-bold-outline</v-icon>
                    </v-col>
                    <v-col xs="12" cols="12" sm="5">
                        <v-card v-if="to" height="100%" color="white" elevation="7" light>
                            <v-card-title>
                                <img class="red rounded pa-1" src="~/assets/images/hand.svg" alt="">
                                <strong class="ml-2 red--text">{{ to.CharCode }}</strong>
                            </v-card-title>
                            <v-card-subtitle class="red--text pb-0"><strong>{{ $t(to.CharCode) }}</strong></v-card-subtitle>
                            <v-card-text class="red pb-0">
                                <strong v-if="curs" class="white--text">{{ curs.toFixed(3) }} {{ to.CharCode }}</strong>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
    </v-col>
</template>
  
<script>
export default {
    name: 'IndexPage',
    props: ['datas'],
    data() {
        return {
            count: '',
            from: '',
            to: '',
            curs: '',
        }
    },
    
    methods: {
        inputAction(e) {
            let value = e.split(' in ')
            let count = Number(value[0].split(' ')[0])
            let from = value[0].split(' ')[1]
            let to = value[1]
            let objFrom
            let objTo
            Object.values(this.datas).forEach(x => {
                if (typeof from === 'string' && (from === x.NumCode || from.toLowerCase() === x.CharCode.toLowerCase() || from.toLowerCase() === x.Name.toLowerCase())) {
                    objFrom = x
                }
                if (typeof to === 'string' && (to === x.NumCode || to.toLowerCase() === x.CharCode.toLowerCase() || to.toLowerCase() === x.Name.toLowerCase())) {
                    objTo = x
                }
            })
            if (count && objFrom && objTo) {
                this.curs = objFrom.Value / objFrom.Nominal / objTo.Value * objTo.Nominal * count
            }
            this.count = count,
                this.from = objFrom,
                this.to = objTo

        },

    },

}
</script>

  