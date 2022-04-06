import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import plausible from "./plugins/plausible";

createApp(App)
  .use(plausible, {
    domain: "ynotes.fr",
  })
  .mount("#app");
