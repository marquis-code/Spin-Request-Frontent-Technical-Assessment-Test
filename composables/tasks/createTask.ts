import { tasksApiFactory } from "@/apiFactory/task";
import type { TaskInterface } from "@/interfaces/taskInterface";
import { useNuxtApp } from "#app";
import { useFetchTasksList } from "../tasks/fetchTasks";
const { fetchTasks } = useFetchTasksList();

export const useCreateTask = () => {
  const loading = ref(false);
  const payload = ref<TaskInterface>({
    title: "",
    description: "",
    isCompleted: false,
  });
  const createTask = async () => {
    const { $toast } = useNuxtApp();
    loading.value = true;
    try {
      const response = await tasksApiFactory.createTask(payload.value);
      $toast.success('Hurray!!!. Task was created successfully.', {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      fetchTasks();
      return response;
    } catch (error: any) {
      $toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      return error;
    } finally {
      loading.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return (
      payload.value.title &&
      payload.value.description &&
      payload.value.isCompleted
    );
  });

  return { createTask, payload, loading, isFormEmpty };
};
