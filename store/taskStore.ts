import { defineStore } from "pinia";
import { TaskInterface, UpdateTaskInterface } from "@/interfaces/taskInterface"; // Import Task interface from apiFactory
import { tasksApiFactory } from "@/apiFactory/task";
import { useNuxtApp } from "#app";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [] as TaskInterface[],
    currentTask: null as TaskInterface | null,
    loading: false,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true;
      try {
        const response = await tasksApiFactory.getAllTasks();
        this.tasks = response.data;
      } catch (error) {
        const { $toast } = useNuxtApp();
        $toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } finally {
        this.loading = false;
      }
    },
    async fetchTaskById(taskId: number) {
      this.loading = true;
      try {
        const response = await tasksApiFactory.getTaskById(taskId);
        this.currentTask = response.data;
      } catch (error) {
        const { $toast } = useNuxtApp();
        $toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } finally {
        this.loading = false;
      }
    },
    async createTask(task: TaskInterface) {
      try {
        const response = await tasksApiFactory.createTask(task);
        this.tasks.push(response.data);
      } catch (error) {
        const { $toast } = useNuxtApp();
        $toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } finally {
        this.loading = false;
      }
    },
    async updateTask(task: UpdateTaskInterface) {
      try {
        const response = await tasksApiFactory.updateTask(task.id, task);
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = response.data;
        }
      } catch (error) {
        const { $toast } = useNuxtApp();
        $toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } finally {
        this.loading = false;
      }
    },
    async deleteTask(taskId: number) {
      try {
        await tasksApiFactory.deleteTask(taskId);
        this.tasks = this.tasks.filter((t) => t.id !== taskId);
      } catch (error) {
        const { $toast } = useNuxtApp();
        $toast.error(error.message, {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } finally {
        this.loading = false;
      }
    },
  },
});
