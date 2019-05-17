<template>
    <v-container 
        fluid 
        grid
        justify-space-around
    >
            <v-btn ripple="false" icon flat v-on:click="changeLanguage()">
                <v-img class="langIcon" v-if="language==='Eng'" src="https://image.flaticon.com/icons/svg/555/555602.svg" alt="Français" />
                <v-img class="langIcon" v-if="language==='Fr'" src="https://image.flaticon.com/icons/svg/555/555417.svg" alt="English" />
            </v-btn>
        <v-layout row wrap>
            <v-flex offset-xs1 xs10 md5>
                <v-card-title  >
                    <span class="test display-2 myTitle font-weight-medium">Julien Ripet</span>
                    <address>
                        <p>
                            18/07/1996</br>
                            4, Impasse Riquet </br>
                            31700, Blagnac</br>
                            +32 495/48 97 39</br>
                            Email: <a href="mailto:ripetjulien@gmail.com?Subject=Contact">ripetjulien@gmail.com</a>
                        </p>
                    </address>
                </v-card-title>
            </v-flex>
            <v-flex offset-xs1 xs10 justify-center md5>
                <v-img src="https://i.imgur.com/Fn7u0wB.jpg" max-height="250" contain/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            language:"Eng"
        }
    },
    methods:{
        changeLanguage(){
            if(this.language==="Eng"){
                this.language="Fr"
            }else if(this.language==="Fr"){
                this.language="Eng"
            }
            this.$emit('changing',this.language);
        }
    },
}

</script>

<style scopped>
    .langIcon{
        height: 25px;
        width: 100%;
    }
    address{
        text-align: left;
        margin: auto;
        margin-top: 15px;
    }
    .myTitle{
        text-align: start;
    }
    .test{
        width:100%;
    }
</style>
