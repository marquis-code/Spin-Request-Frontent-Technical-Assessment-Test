import { tasksApiFactory } from "@/apiFactory/task";
import { useNuxtApp } from '#app';
import Swal from "sweetalert2";
import { useFetchTasksList } from '@/composables/tasks/fetchTasks'
const { fetchTasks } = useFetchTasksList()

export const useDeleteTask = () => {
  const loading = ref(false);
  const deleteTask = async (task_id: number | string) => {
    console.log(task_id, 'task is here')
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes delete, Task.",
      cancelButtonText: "Nah, Just kidding",
    }).then(async (result) => {
      if (result.value) {
        loading.value = true;
        try {
          const response = await tasksApiFactory.deleteTask(task_id);
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
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };

  return { deleteTask, loading };
};
