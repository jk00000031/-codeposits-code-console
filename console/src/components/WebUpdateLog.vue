<script setup lang="ts">
const showLog = ref<boolean>(false)
</script>

<template>
  <n-button type="primary" @click="showLog = true">
    <template #icon>
      <Icon icon="mingcute:timeline-fill" />
    </template>
    更新日志
  </n-button>

  <n-drawer v-model:show="showLog" class="!w-[740px] max-w-[80vw]">
    <n-drawer-content closable header-style="--n-header-padding: 14px 18px">
      <template #header>
        <h3 class="text-base font-semibold">更新日志</h3>
      </template>
      <n-timeline>
        <n-timeline-item title="v0.0.1" time="2024/10/21">
          <ul class="pl-4 list-decimal">
            <li>测试时间线</li>
          </ul>
        </n-timeline-item>
        <n-timeline-item title="v0.0.1" time="2024/10/21">
          <ul class="pl-4 list-decimal">
            <li>测试时间线</li>
          </ul>
        </n-timeline-item>
      </n-timeline>
    </n-drawer-content>
  </n-drawer>
</template>
