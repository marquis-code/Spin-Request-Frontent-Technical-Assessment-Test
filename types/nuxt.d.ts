// types/nuxt.d.ts
import { ToastContainerMethods } from 'vue3-toastify';

declare module '#app' {
  interface NuxtApp {
    $toast: ToastContainerMethods;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: ToastContainerMethods;
  }
}
