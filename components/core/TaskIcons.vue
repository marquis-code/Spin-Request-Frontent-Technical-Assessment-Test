<template>
  <div>
    <img v-if="!task.isCompleted" src="~assets/icons/pending.svg" alt="...">
    <img v-if="task.isCompleted" src="~assets/icons/completed.svg" alt="...">
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  task: Record<string, any>
}>(), {
  task: {}
})
</script>
