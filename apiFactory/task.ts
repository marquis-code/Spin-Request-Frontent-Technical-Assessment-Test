import { axiosInstance } from "./axios.config";
import type { TaskInterface, UpdateTaskInterface } from "@/interfaces/taskInterface";

export const tasksApiFactory = {
  createTask( task: TaskInterface) {
    return axiosInstance.post('/tasks', task);
  },
  getAllTasks() {
    return axiosInstance.get(
      "/tasks"
    );
  },
  getTaskById(task_id: string | number) {
    return axiosInstance.get(`/tasks/${task_id}`)
  },
  updateTask(task_id: number | string, task: UpdateTaskInterface) {
    return axiosInstance.patch(`/tasks/${task_id}`, task);
  },
  deleteTask(task_id: number | string) {
    return axiosInstance.delete(`/tasks/${task_id}`);
  }
};
