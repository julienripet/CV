import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$globals = {
  cv:{
    formations:{
      becode:{
        date:"2019-today",
        title:"Formation BeCode",
        description:"7 months-long formation on web development. During which I learned to use Git (Github, GitKracken, etc), Node.JS, Vue.JS, React, PHP, SQL data-bases, and many other technologies.",
      },
      iesn:{
        date:"2017-2018",
        title:"Network technology and security at IESN",
        description:"1 year of studies about networks, and programming, during which I learned to code in C, and kept practicing my HTML, css and JavaScript.",
      },
      heaj:{
        date:"2015-2017",
        title:"Infographic studies at HEAJ",
        description:"2 years of studies about graphics, infographics, programming, during which I learned to use Photoshop, Illustrator, Maya, Cinema4D, and coding in JavaScript, and continued practicing with HTML and css.",
      },
      itn:{
        date:"2013-2015",
        title:"IT Studies at ITN",
        description:"2 years of studies about programming, using windows office suite (Word, Excel, PowerPoint, etc), at the end of which I received my CESS. I learned to code in VB.net, aspx, html and css.",
      }
    },
    experiences:{
      retail:{
        date:"Septembre 2018",
        title:"Worked in retail",
        description:"I have worked multiple times in retail, tagging clothes, making the inventory, etc.",
      },
      kikk:{
        date:"November 2016/2017",
        title:"Volunteering for the KIKK, festival of digital and creative cultures. ",
        description:"I volunteered 2 years at the KIKK festival, helping artists, giving informations to the attendees, organising small teams, overall making sure what I was in charge of was going well.",
      },
      salonVin:{
        date:"July 2017",
        title:"Volunteering at the 'Salon des vins et fromages de Floreffe'. ",
        description:"Volunteered in a three-day restaurant, specialy biult for the Salon. I was in charge of taking commands, serving dishes, cleaning up the tables and bringing the clients to their tables.",
      }
    },
    others:{
      scoutism:{
        date:"2006-2012",
        title:"Scoutism",
        description:"6 years of scoutism taught me to both obey my elders and lead the younger-ones, and to work and live in big groups",
      },
      languages:{
        date:"Languages",
        title:"Languages",
        description:"I am fluent in both french (mother tongue) and english (C1, currently working to complete C2). I have learned dutch for 8years, but lack real-life practice, and I am currently self-learning Swedish, as a personnal interest.",
      },
    }
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app')

