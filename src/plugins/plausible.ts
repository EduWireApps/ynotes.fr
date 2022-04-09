import Plausible from "plausible-tracker";
import { App } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $plausible: ReturnType<typeof Plausible>;
  }
}

export default {
  install: (app: App, options: any) => {
    const plausible = Plausible(options);
    plausible.enableAutoPageviews();

    app.provide("plausible", plausible);
  },
};
