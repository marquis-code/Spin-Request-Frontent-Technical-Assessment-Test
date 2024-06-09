<template>
  <tr>
    <td class="col-3">
      <div class="d-flex align-items-center">
        <div class="avatar avatar-md">
          <img src="~assets/images/faces/5.jpg" alt="...">
        </div>
        <p class="font-bold ms-3 mb-0">{{task.title}}</p>
      </div>
    </td>
    <td class="col-auto">
      <p class=" mb-0">{{task.description}}</p>
    </td>
    <td class="col-auto">
      <p class=" mb-0">{{task.completionStatus}}</p>
    </td>
    <td class="col-auto">
      <div class="btn-group mb-1">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle me-1" type="button" id="dropdownMenuButton"
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Options
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button @click="viewTaskDetails(task._id)" class="dropdown-item" href="#">View</button>
            <button @click="updateTask(task._id)" class="dropdown-item" href="#">Update</button>
            <button @click="deleteTask(task._id)" class="dropdown-item">Delete</button>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useDeleteTask } from '../composables/tasks/deleteTask'
const { deleteTask, loading } = useDeleteTask()
const router = useRouter()

const viewTaskDetails = (id: Record<string, any>) => {
  router.push(`/tasks/${id}/details`)
}

const updateTask = (id: Record<string, any>) => {
  router.push(`/tasks/${id}/edit`)
}

const props = withDefaults(defineProps<{
  task: Record<string, any>
}>(), {
  task: {}
});

</script>
