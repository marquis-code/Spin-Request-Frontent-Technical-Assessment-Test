// composables/tasks/useFetchTaskById.ts
import { useTaskStore } from '@/store/taskStore';
import { useRoute, useNuxtApp } from '#app';

export const useFetchTaskById = () => {
  const taskStore = useTaskStore();
  const route = useRoute();
  const { $toast } = useNuxtApp();

  const fetchTaskById = async () => {
    const taskId = route.params.id as number;
    taskStore.loading = true;
    try {
      await taskStore.fetchTaskById(taskId);
    } catch (error: any) {
      $toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      taskStore.loading = false;
    }
  };

  return { fetchTaskById, task: taskStore.currentTask, loading: taskStore.loading };
};
