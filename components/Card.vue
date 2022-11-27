<template>
    <v-card color="white" light elevation="7" class="mt-2">
        <v-card-title>
            <img v-if="k % 2 != 0" class="red rounded pa-1" src="~/assets/images/hand.svg" alt="">
            <img v-else class="blue rounded pa-1" src="~/assets/images/hand.svg" alt=""/>
            <strong v-if="k % 2 != 0" class="ml-2 red--text">{{ item.CharCode }}</strong>
            <strong v-else class="ml-2 blue--text">{{ item.CharCode }}</strong>
            
            
        </v-card-title>
        <v-card-subtitle light class="pb-0">
            <strong v-if="k % 2 != 0" class="red--text ">{{ item.Name }}</strong>
            <strong v-else class="blue--text ">{{ item.Name }}</strong>
        </v-card-subtitle>
        <v-card-text v-if="k % 2 != 0" class="red pb-0">
            <strong class="white--text">1 {{ item.CharCode }} = {{ item.Value.toFixed(3) }} {{
                    selectedValute
            }}</strong>
        </v-card-text>
        <v-card-text v-else class="blue pb-0">
            <strong class="white--text">1 {{ item.CharCode }} = {{ item.Value.toFixed(3) }} {{
                    selectedValute
            }}</strong>
        </v-card-text>
    </v-card>
</template>

<script>
export default{
    name:"Card",
    props:["item", "k", "selectedValute"]
}
</script>