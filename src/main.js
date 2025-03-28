import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./style.css";
/* toast*/
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
/* toast*/

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faClock,
  faEye,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faLocationDot,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faQuoteLeft,
  faQuoteRight,
  faTrash,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faEye,
  faFacebookF,
  faInstagram,
  faTwitter,
  faLocationDot,
  faUserGroup,
  faClock,
  faCalendar,
  faLinkedinIn,
  faHeart,
  faQuoteLeft,
  faQuoteRight,
  faArrowLeft,
  faTrash,
  faMinus,
  faPlus
);

createApp(App)
  .use(router)
  .use(ToastPlugin)
  .use(VueQueryPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
