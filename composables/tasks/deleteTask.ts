// composables/tasks/useDeleteTask.ts
import { useTaskStore } from '@/store/taskStore';
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import Swal from 'sweetalert2';

export const useDeleteTask = () => {
  const taskStore = useTaskStore();
  const { $toast } = useNuxtApp();
  const loading = ref(false);

  const deleteTask = async (taskId: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        taskStore.loading = true;
        try {
          await taskStore.deleteTask(taskId);
          $toast.success('Task was deleted successfully.', {
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
      }
    });
  };

  return { deleteTask, loading };
};
