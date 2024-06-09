declare module 'vue3-toastify' {
  import { Plugin } from 'vue';
  const Vue3Toastify: Plugin;
  export default Vue3Toastify;
  export function useToast(): { success: (message: string) => void };
}
