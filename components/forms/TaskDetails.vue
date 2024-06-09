<template>
  <div>
    <h5 class="card-title">{{ task.title || 'Nil' }}</h5>
    <p class="card-text">{{ task.description || 'Nil' }}</p>
    <div>
      <span
        :class="[task.completionStatus === 'pending' ? 'text-bg-secondary' : task.completionStatus === 'completed' ? 'text-bg-success' : task.completionStatus === 'progress' ? 'text-bg-primary' : '']"
        class="badge rounded-pill text-bg-primary">
        {{ task.completionStatus === 'completed' ? 'Completed' : task.completionStatus === 'pending' ? 'Pending' :
    task.completionStatus === 'progress' ? 'Progress' : 'Nil' }}
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
