import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  faLocationDot, faMagnifyingGlass, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faClock, faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library  fa-magnifying-glass*/
library.add(faMagnifyingGlass, faEye, faFacebookF, faInstagram, faTwitter, faLocationDot, faUserGroup, faClock ,faCalendar, faLinkedinIn, faHeart)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
