import { tasksApiFactory } from "@/apiFactory/task";
// import { useTaskStore } from '@/stores/taskStore';
import { useNuxtApp } from '#app';

export const useFetchTasksList = () => {
  // const taskStore = useTaskStore();
  const tasksList = ref([]);
  const loading = ref(false);
  const fetchTasks = async () => {
    loading.value = true;
    try {
      const response = await tasksApiFactory.getAllTasks();
      tasksList.value = response.data;
      // taskStore.tasks = response.data
    } catch (error: any) {
      const { $toast } = useNuxtApp();
      $toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  return { fetchTasks, tasksList, loading };
};
