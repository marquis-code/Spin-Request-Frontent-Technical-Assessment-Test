<template>
  <div class="card">
    <div class="card-header">
      <h3> Create New Task</h3>
      <p>Enter a title and description to create a new task.</p>
    </div>
    <div class="card-body">
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
          <button :disabled="loading || isFormEmpty" :class="{ 'disabled-btn': loading || isFormEmpty }"
            class="w-100 mt-5 mb-2 btn btn-primary">
            {{ loading ? 'processing...' : 'Submit' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script setup lang="ts">
import { useTaskStore } from '@/store/taskStore';
import { storeToRefs } from 'pinia';
const router = useRouter()

const taskStore = useTaskStore();
const { loading } = storeToRefs(taskStore);
const { createTask, } = taskStore;

const payload = ref({
  title: '',
  description: '',
  isCompleted: false,
});

// Create computed property for form validation
const isFormEmpty = computed(() => !payload.value.title || !payload.value.description);

const handleCreateTask = () => {
  createTask(payload.value).then(() => {
    router.push('/')
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
