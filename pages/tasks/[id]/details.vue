<template>
  <main class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          Task Details
        </div>
        <div class="card-body">
          <FormsTaskDetails v-if="task" :task="task" />
          <div v-else-if="loading">
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
import { useTaskStore } from '@/store/taskStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const taskStore = useTaskStore();
const { currentTask: task, loading } = storeToRefs(taskStore);
const { fetchTaskById } = taskStore;
const route = useRoute();

fetchTaskById(route.params.id)
</script>
