<template>
  <div class="card w-50">
    <div class="card-header">
      Task Details
    </div>
    <div class="card-body">
      <FormsTaskDetails v-if="!loading && Object.keys(task).length" :task="task" />
      <div v-else-if="loading && !Object.keys(task).length">
        <CoreSpinner />
      </div>
      <div v-else class="d-flex justify-content-center flex-column">
        <p>No Task Details Found</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetchTaskById } from '../../../composables/tasks/fetchTaskById'
const { fetchTaskById, task, loading } = useFetchTaskById()

fetchTaskById()
</script>
