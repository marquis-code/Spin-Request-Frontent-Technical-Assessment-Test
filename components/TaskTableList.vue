<template>
  <div class="table-responsive">
    <table class="table table-hover table-lg">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Completion status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TaskTableRow v-for="task in tasks" :key="task.id" :task="task" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type Task = {
  id: string | number;
  title: string;
  description: string;
  isCompleted: boolean
};

const props = withDefaults(defineProps<{
  tasks: Task[]
}>(), {
  tasks: []
});
</script>

