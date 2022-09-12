import router from "./router";
import store from "./store";

const registerModule = (name: string, module: any) => {
  if (module.store) {
    store.registerModule(name, module.store);
  }

  if (module.router) {
    router.addRoute(module.router);
  }
};

export const registerModules = (modules: any) => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey];
    registerModule(moduleKey, module);
  });
};
