<template>
  <div class="card w-50">
    <div class="card-header">
      Update Task Details
    </div>
    <div class="card-body">
      <!-- <form v-if="!fetchingTaskDetails && Object.keys(task).length" @submit.prevent="handleTaskUpdate">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input v-model="task.title" type="text" class="form-control" id="title" placeholder="">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea v-model="task.description" class="form-control no-resize" id="description" rows="3"></textarea>
        </div>
        <select v-model="task.completionStatus" class="form-select" aria-label="Default select example">
          <label for="description" class="form-label">Completion Status</label>
          <option selected>select completion status</option>
          <option value="pending">Pending</option>
          <option value="progress">Progress</option>
          <option value="completed">Completed</option>
        </select>
        <div class="w-auto">
          <button :disabled="loading" :class="{ 'disabled-btn': loading }" class="w-100 mt-5 mb-2 btn btn-primary">
            {{ loading ? 'processing...' : 'Submit' }}
          </button>
        </div>
      </form> -->
      <FormsEditTask v-if="!fetchingTaskDetails && Object.keys(task).length" :task="task" />
      <div v-else-if="fetchingTaskDetails && !Object.keys(task).length">
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
import { useUpdateTask } from '../../../composables/tasks/updateTask'
const { fetchTaskById, task, loading: fetchingTaskDetails } = useFetchTaskById()
const { updateTask, loading } = useUpdateTask()
fetchTaskById()

const handleTaskUpdate = () => {
  if (task.value) {
    updateTask(task.value)
  }
}

</script>
