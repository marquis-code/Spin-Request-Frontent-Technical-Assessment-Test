<template>
  <div>
    <h5 class="card-title my-4">{{ task.title || 'Nil' }}</h5>
    <p class="card-text my-4">{{ task.description || 'Nil' }}</p>
    <div>
      <span
        :class="[!task.isCompleted ? 'text-bg-secondary' : 'text-bg-success']"
        class="badge rounded-pill text-bg-primary">
        {{ task.isCompleted ? 'Completed' : 'Not Completed' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  task: Record<string, any>
}>(), {
  task: {}
});

</script>
