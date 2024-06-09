// composables/tasks/useUpdateTask.ts
import { useTaskStore } from '@/store/taskStore';
import { useRoute, useRouter, useNuxtApp } from '#app';
import type { UpdateTaskInterface } from '@/interfaces/taskInterface';

export const useUpdateTask = () => {
  const taskStore = useTaskStore();
  const route = useRoute();
  const router = useRouter();
  const { $toast } = useNuxtApp();

  const updateTask = async (taskUpdate: UpdateTaskInterface) => {
    const taskId = route.params.id as number;
    taskStore.loading = true;
    try {
      await taskStore.updateTask({ ...taskUpdate, id: taskId });
      $toast.success('Task was updated successfully.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      router.push('/tasks');
    } catch (error: any) {
      $toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      taskStore.loading = false;
    }
  };

  return { updateTask, loading: taskStore.loading };
};
