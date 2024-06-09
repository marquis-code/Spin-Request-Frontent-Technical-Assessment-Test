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
          <TaskTableList v-if="!loading && tasksList.length" :tasks="tasksList" :loading="loading" />
          <div v-else-if="loading && !tasksList.length">
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
import { useFetchTasksList } from '@/composables/tasks/fetchTasks'
const { fetchTasks, tasksList, loading } = useFetchTasksList()
const router = useRouter()
fetchTasks()
</script>
