<script setup lang="ts">
const notificateQuantity = ref<number>(0)
</script>

<template>
  <router-link to="/notification">
    <n-button quaternary circle>
      <n-badge dot :value="notificateQuantity" :show="!!notificateQuantity">
        <Icon icon="hugeicons:notification-01" width="18" />
      </n-badge>
    </n-button>
  </router-link>
</template>
