<template>
    <ul>
        <!-- {{mySection}} -->
        <li v-for="(activity, key) in mySection.mySection" :key="key">
            <vActivity :activity={...activity} />
        </li>
    </ul>
</template>

<script>
import activity from './Activity'

export default {
    props:['mySection'],
    components:{
        vActivity: activity
    },
    data(){
        return{
            
        }
    },
}
</script>

<style scoped>
li{
    list-style: none;
    padding:0;
}
</style>
