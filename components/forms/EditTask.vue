<template>
  <main>
    <form @submit.prevent="handleTaskUpdate">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input v-model="task.title" type="text" class="form-control" id="title" placeholder="">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea v-model="task.description" class="form-control no-resize" id="description" rows="3"></textarea>
      </div>
      <select v-model="task.isCompleted" class="form-select" aria-label="Default select example">
        <label for="description" class="form-label">Completion Status</label>
        <option selected>select completion status</option>
        <option value="false">Not Completed</option>
        <option value="true">Completed</option>
      </select>
      <div class="w-auto">
        <button :disabled="loading" :class="{ 'disabled-btn': loading }" class="w-100 mt-5 mb-2 btn btn-primary">
          {{ loading ? 'processing...' : 'Submit' }}
        </button>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/store/taskStore';
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore();
const { loading } = storeToRefs(taskStore);
const { updateTask } = taskStore
const router = useRouter()


const props = withDefaults(defineProps<{
  task: Record<string, any>
}>(), {
  task: {}
});

const handleTaskUpdate = () => {
  if (props.task) {
    updateTask(props.task).then(() => {
      router.push('/')
    })
  }
}
</script>
