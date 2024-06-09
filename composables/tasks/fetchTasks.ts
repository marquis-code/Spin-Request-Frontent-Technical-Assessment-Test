// composables/tasks/useFetchTasksList.ts
import { useTaskStore } from '@/store/taskStore';

export const useFetchTasksList = () => {
  const taskStore = useTaskStore();

  const fetchTasks = async () => {
    await taskStore.fetchTasks();
  };

  return { fetchTasks, tasksList: taskStore.tasks, loading: taskStore.loading };
};
