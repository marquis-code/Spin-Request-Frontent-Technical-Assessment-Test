<script lang="ts" setup>
import LayoutHeader from '~/components/Layouts/LayoutHeader.vue';
import LayoutSidebar from '~/components/Layouts/Sidebar/LayoutSidebar.vue';
</script>
<template>
  <div id="app">
    <LayoutSidebar></LayoutSidebar>
      <div id="main">
          <LayoutHeader></LayoutHeader>
          <slot/>
      </div>
  </div>
</template>
