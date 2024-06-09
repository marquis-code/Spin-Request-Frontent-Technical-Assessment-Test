// composables/tasks/useCreateTask.ts
import { useTaskStore } from '@/store/taskStore';
import { ref, computed } from 'vue';
import { useNuxtApp } from '#app';

export const useCreateTask = () => {
  const taskStore = useTaskStore();
  const { $toast } = useNuxtApp();
  const payload = ref({
    title: '',
    description: '',
    isCompleted: false,
  });

  const createTask = async () => {
    taskStore.loading = true;
    try {
      await taskStore.createTask(payload.value);
      $toast.success('Task was created successfully.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } catch (error: any) {
      $toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      taskStore.loading = false;
    }
  };

  const isFormEmpty = computed(() => !payload.value.title || !payload.value.description);

  return { createTask, payload, isFormEmpty };
};
