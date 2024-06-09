<template>
  <form @submit.prevent="handleCreateTask">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input v-model="payload.title" type="text" class="form-control" id="title" placeholder="">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea v-model="payload.description" class="form-control no-resize" id="description" rows="3"></textarea>
    </div>
    <div class="w-auto">
      <button :disabled="loading || !isFormEmpty" :class="{ 'disabled-btn': loading || !isFormEmpty }"
        class="w-100 mt-5 mb-2 btn btn-primary">
        {{ loading ? 'processing...' : 'Submit' }}
      </button>
    </div>
  </form>
</template>



<script setup lang="ts">
import { useCreateTask } from '../../composables/tasks/createTask'
const { createTask, payload, loading, isFormEmpty } = useCreateTask()

const emit = defineEmits<{
  (event: 'success'): void
}>()

const handleCreateTask = () => {
  createTask().then(() => {
    emit('success')
  })
}
</script>

<style>
.no-resize {
  resize: none;
}

.disabled-btn {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
