<template>
  <main>
    <div v-if="showModal" class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h1 class="modal-title fs-5">{{ title }}</h1>
              <p>{{ description }}</p>
            </div>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div v-if="showFooter" class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal-backdrop fade show"></div>
  </main>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
  showFooter: {
    type: Boolean,
    required: true,
    default: false
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['update:showModal']);

const closeModal = () => {
  emits('update:showModal', false);
};
</script>

<style scoped>
.modal.fade.show {
  display: block;
}
</style>
