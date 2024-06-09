import { tasksApiFactory } from "@/apiFactory/task";
import { useNuxtApp } from '#app';

export const useFetchTaskById = () => {
  const task = ref([]);
  const task_id = useRoute().params.id as number | string;
  const loading = ref(false);
  const fetchTaskById = async () => {
    loading.value = true;
    try {
      const response = await tasksApiFactory.getTaskById(task_id);
     task.value = response.data;
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

  return { fetchTaskById, task, loading };
};
