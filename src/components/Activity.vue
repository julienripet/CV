<template>
    <v-container class="singleActivity" grid>
        <v-layout row wrap>
            <v-flex xs12 md2>
                <h3>{{activity.date}}</h3>
            </v-flex>
            <v-flex xs12 md10>
                <h2>
                    {{activity.title}}
                </h2>
                <p>
                    {{activity.description}}
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props:['activity'],
    data(){
        return{

        }
    }
}
</script>

<style scoped>
h3{
    text-decoration: underline;
    color: rgb(23, 108, 179);
}
    .singleActivity{
        padding-top:0 !important;
        padding-bottom:0 !important;
    }
    h2{
        text-transform: capitalize;
    }
</style>
