import { defineStore } from "pinia";
import { TaskInterface, UpdateTaskInterface } from "@/interfaces/taskInterface";
import { tasksApiFactory } from "@/apiFactory/task";
import Swal from "sweetalert2";
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
        this.handleError(error);
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
        this.handleError(error);
      } finally {
        this.loading = false;
      }
    },
    async createTask(task: TaskInterface) {
      this.loading = true;
      try {
        const response = await tasksApiFactory.createTask(task);
        this.tasks.push(response.data);
        const { $toast } = useNuxtApp();
        $toast.success('Hurray!!!. New Task was created successfully.', {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } catch (error) {
        this.handleError(error);
      } finally {
        this.loading = false;
      }
    },
    async updateTask(task: UpdateTaskInterface) {
      console.log(task, "task here");
      this.loading = true;
      try {
        const response = await tasksApiFactory.updateTask(task._id, task);
        const index = this.tasks.findIndex((t) => t._id === task._id);
        if (index !== -1) {
          this.tasks[index] = response.data;
        }
        const { $toast } = useNuxtApp();
        $toast.success('Task was updated successfully.', {
          autoClose: 5000,
          dangerouslyHTMLString: true,
        });
      } catch (error) {
        this.handleError(error);
      } finally {
        this.loading = false;
      }
    },
    async deleteTask(taskId: number) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Nah! Just kidding",
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.loading = true;
          try {
            await tasksApiFactory.deleteTask(taskId);
            this.tasks = this.tasks.filter((t) => t._id !== taskId);
            const { $toast } = useNuxtApp();
            $toast.success('Task was deleted successfully.', {
              autoClose: 5000,
              dangerouslyHTMLString: true,
            });
          } catch (error) {
            this.handleError(error);
          } finally {
            this.loading = false;
          }
        }
      });
    },
    handleError(error: any) {
      const { $toast } = useNuxtApp();
      $toast.error(error.message, {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    },
  },
});
