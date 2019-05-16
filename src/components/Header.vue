<template>
    <v-container 
        fluid 
        grid
        justify-space-around
    >
        <v-layout row wrap>
            <v-flex offset-xs1 xs10 md5>
                <v-card-title class="display-2 myTitle font-weight-medium" >
                    <span class="test">Julien Ripet</span>
                </v-card-title>
            </v-flex>
            <v-flex offset-xs1 xs10 justify-center md5>
                <v-img src="/images/ProfilePic.webp" max-height="250" contain/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scopped>
    .myTitle{
        text-align: start;
    }
    .test{
        width:100%;
    }
</style>
