import { tasksApiFactory } from "@/apiFactory/task";
import type { UpdateTaskInterface } from "@/interfaces/taskInterface";
import { useFetchTasksList } from '@/composables/tasks/fetchTasks'
const { fetchTasks } = useFetchTasksList()
import { useNuxtApp } from '#app';
const route = useRoute()
const router = useRouter()


export const useUpdateTask = () => {
  const task_id = route.params.id as  number | string
  const loading = ref(false);
  const updateTask = async (taskUpdate: UpdateTaskInterface) => {
    loading.value = true;
    try {
      const payload = {
        title: taskUpdate.title ?? '',
        description:  taskUpdate.description ?? '',
        completionStatus:  taskUpdate.completionStatus ?? ''
      }
      const response = await tasksApiFactory.updateTask(task_id, payload);
      router.push('/tasks')
      fetchTasks()
      return response;
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

  return { updateTask, loading };
};
