<template>
  <div class="flex items-center justify-center h-screen">
    <div class="max-w-4xl min-w-[320px] mx-auto text-zinc-600">
      <h1 class="flex items-center gap-2 text-4xl font-semibold">
        <Icon icon="material-symbols:no-encryption-outline-sharp" />
        <span class="font-mono">404</span>
      </h1>
      <div class="my-4 space-y-1">
        <p>
          您正在访问的地址为: <span class="ml-2 font-semibold text-black">{{ $route.fullPath }}</span>
        </p>
        <p>该地址不可访问的可能原因如下：</p>
        <ul class="pl-8 text-black list-decimal">
          <li>无权限访问</li>
          <li>项目更新未调整跳转路由</li>
          <li>路由不存在</li>
        </ul>
      </div>
      <p class="flex items-center gap-3">
        <n-button type="primary" @click="$router.back()">
          <template #icon>
            <Icon icon="lets-icons:back" />
          </template>
          返回上一页
        </n-button>
        <router-link to="/">
          <n-button quaternary type="primary">
            <template #icon>
              <Icon icon="flowbite:home-outline" />
            </template>
            首页
          </n-button>
        </router-link>
      </p>
    </div>
  </div>
</template>
