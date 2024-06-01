import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
/* toast*/
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
/* toast*/

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faLocationDot,
  faMagnifyingGlass,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faClock,
  faEye,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

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
  faQuoteRight
);

createApp(App)
  .use(router)
  .use(ToastPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
