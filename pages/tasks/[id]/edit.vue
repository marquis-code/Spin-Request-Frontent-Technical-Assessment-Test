<template>
  <main class="row">
    <div class="col-md-6" >
      <div class="card w-50">
        <div class="card-header">
          Update Task Details
        </div>
        <div class="card-body">
          <FormsEditTask v-if="!fetchingTaskDetails && Object.keys(task).length" :task="task" />
          <div v-else-if="fetchingTaskDetails && !Object.keys(task).length">
            <CoreSpinner />
          </div>
          <div v-else class="d-flex justify-content-center flex-column">
            <p>No Task Details Found</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFetchTaskById } from '@/composables/tasks/fetchTaskById'
import { useUpdateTask } from '@/composables/tasks/updateTask'
const { fetchTaskById, task, loading: fetchingTaskDetails } = useFetchTaskById()
const { updateTask, loading } = useUpdateTask()
fetchTaskById()

const handleTaskUpdate = () => {
  if (task.value) {
    updateTask(task.value)
  }
}

</script>
