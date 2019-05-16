<template>
    <v-container 
        fluid 
        grid
        justify-space-around
    >
        <v-layout row wrap>
            <v-flex offset-xs1 xs10 md5>
                <v-card-title  >
                    <span class="test display-2 myTitle font-weight-medium">Julien Ripet</span>
                    <address>
                        <p>
                            18th of july 1996</br>
                            51, Louis Hicguet Street </br>
                            5002, Saint-Servais</br>
                            +32 495/48 97 39</br>
                            Email: <a href="mailto:ripetjulien@gmail.com?Subject=Contact">ripetjulien@gmail.com</a>
                        </p>
                    </address>
                </v-card-title>
            </v-flex>
            <v-flex offset-xs1 xs10 justify-center md5>
                <v-img :src="require('@/assets/ProfilePic.webp')" max-height="250" contain/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scopped>
    address{
        text-align: center;
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
