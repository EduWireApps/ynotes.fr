import { Plugin, App } from "vue";
import Plausible from "plausible-tracker";
import { PlausibleInitOptions } from "plausible-tracker/build/module/lib/tracker";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $plausible: ReturnType<typeof Plausible>;
  }
}

type PlausibleModuleOptions = PlausibleInitOptions & {
  /**
   * If true, pageviews of SPAs that use JS-based routing will be automatically tracked.
   */
  readonly enableAutoPageviews?: boolean;
  /**
   * If true, outbound link clicks will be automatically tracked.
   */
  readonly enableAutoOutboundTracking?: boolean;
};

const plugin: Plugin = {
  install: (app: App, options: PlausibleModuleOptions) => {
    const plausible = Plausible(options);
    if (options?.enableAutoPageviews === true) {
      plausible.enableAutoPageviews();
    }
    if (options?.enableAutoOutboundTracking === true) {
      plausible.enableAutoOutboundTracking();
    }
    app.config.globalProperties.$plausible = plausible;
  },
};

export default plugin;
