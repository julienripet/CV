import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$globals = {
  cvEng:{
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
        date:"September 2018",
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
        description:"Volunteered in a three-day restaurant, specialy built for the Salon. I was in charge of taking commands, serving dishes, cleaning up the tables and bringing the clients to their tables.",
      }
    },
    others:{
      scoutism:{
        date:"2006-2012",
        title:"Scoutism",
        description:"6 years of scoutism taught me to both obey my elders and lead the younger-ones, and to work and live in big groups.",
      },
      languages:{
        date:"Languages",
        title:"Languages",
        description:"I am fluent in both french (mother tongue) and english (C1, currently working to complete C2). I have learned dutch for 8years, but lack real-life practice, and I am currently self-learning Swedish, as a personnal interest.",
      },
    }
  },
  cvFr:{
    formations:{
      becode:{
        date:"2019-aujourd'hui",
        title:"Formation BeCode",
        description:"Formation de 7 mois sur le web development, durant laquelle j'ai appris à utiliser Git (Github, GitKracken, etc), Node.js, Vue.js, React, PHP, les bases de données SQL, et bien d'autres.",
      },
      iesn:{
        date:"2017-2018",
        title:"Technologie des réseaux et sécurité à l'Henallux",
        description:"1 An d'études sur les réseaux et la programmation, durant laquelle j'ai appris à coder en C, et ai perfectionné mon HTML, Css et Javascript.",
      },
      heaj:{
        date:"2015-2017",
        title:"études d'infographie à l'HEAJ",
        description:"2 ans d'études sur le graphisme, l'infographie, et la programmation, durant lesquelles j'ai appris à utiliser Photoshop, Illustrator, Maya, Cinema4D, et le JavaScript.",
      },
      itn:{
        date:"2013-2015",
        title:"études sur les technologies informatiques à l'ITN",
        description:"2 ans d'études sur la programmation, l'utilisation de la suite Microsoft Office (Word, Excel, PowerPoint, etc), à la fin desquelles j'ai obtenu mon diplome CESS. J'y ai appris les bases du VB.NET, aspx, html, css et SQL."
      }
    },
    expériences:{
      magasinier:{
        date:"Septembre 2018",
        title:"Magasinier",
        description:"J'ai travaillé plusieurs fois dans des magasins de vêtements, m'occupant de l'étiquettage, de la gestion d'inventaire, ect.",
      },
      kikk:{
        date:"Novembre 2016/2017",
        title:"Volontariat au KIKK, festival des arts digitaux.",
        description:"J'ai été volontaire au KIKK 2 ans d'affilées. Je devais aider les artistes, gérer et informer les visiteurs, organiser de petites équipes. Globalement, m'assurer que tout ce dont j'avais la responsabilité se passait bien.",
      },
      salonVin:{
        date:"Juillet 2017",
        title:"Volontariat au Salon des vins et fromages de Floreffe.",
        description:"Volontariat dans un restaurant éphémère de 3 jours, spécialement monté pour le salon. J'étais en charge de prendre les commandes, servir les plats, débarasser les tables, servir les clients et les amener à leur table.",
      }
    },
    others:{
      scoutism:{
        date:"2006-2012",
        title:"Scoutisme",
        description:"6 ans de scoutisme, qui m'ont autant appris à gérer les plus jeunes qu'à obéir à mes ainés, et à vivre et travailler en grands groupes.",
      },
      languages:{
        date:"Langues",
        title:"Langues",
        description:"Je parle couramment le français (langue maternelle) et l'anglais (certification européenne C1). J'ai étudié le néerlandais 8 ans, mais je manque d'expérience réelle, et j'étudie le suédois en auto-didacte par intérêt personnel.",
      },
    }
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app')

