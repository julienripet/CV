<template>
  <v-app class="fullPage">
    <v-content>
      <Header/>
      <ul>
        <li v-for="(mySection,key, index) in cv" :key="index">
          <h2>{{key}}</h2>
          <vSection :mySection={mySection} />
        </li>
      </ul>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import section from './components/Section'

export default {
  name: 'App',
  components: {
    Header,
    vSection: section,
  },
  data () {
    return {
      cv:this.$globals.cv
    }
  }
}
</script>

<style scoped>
  li{list-style: none;}
  h2{
    text-transform: capitalize;
  }
  .fullPage{
    max-width: 950px;
    margin: auto;
    background: rgb(236, 236, 236);
  }
</style>
