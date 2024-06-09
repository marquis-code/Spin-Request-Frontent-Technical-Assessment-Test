<template>
  <main>
    <div class="col-12">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h4>Task Manager</h4>
          <button type="button" @click="router.push('/tasks/create')"
            class="bg-primary rounded text-white-50 px-3 py-1 btn btn-primary">
            Create Task
          </button>
        </div>
        <div class="card-body">
          <TaskTableList v-if="!loading && tasks.length" :tasks="tasks" :loading="loading" />
          <div v-else-if="loading && !tasks.length">
            <CoreSpinner />
          </div>
          <div v-else class="d-flex justify-content-center flex-column">
            <p>No Task Found</p>
            <p>Create new Task to begin</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/store/taskStore';
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore();
const { tasks, loading } = storeToRefs(taskStore);
const { fetchTasks } = taskStore;

fetchTasks();
const router = useRouter()
</script>
