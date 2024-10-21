<script setup lang="ts">
import WebUpdateLog from './WebUpdateLog.vue'

import { useAppConfig } from '@/stores/useAppConfig'

interface CloudActivity {
  title: string
  badge: string
  href: string
}

interface QQGroupItem {
  code: number
  isFull: boolean
}

const appConfig = useAppConfig()

const cloudServiceActivity: CloudActivity[] = [
  { title: '通义灵码_智能编码助手', badge: '阿里', href: 'https://tongyi.aliyun.com/lingma/pricing?userCode=rvhutp2k' },
  { title: '阿里云 "99计划" 新老同享', badge: '阿里', href: 'https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=rvhutp2k' },
  { title: '云工开物_阿里云高校计划', badge: '阿里', href: 'https://university.aliyun.com/mobile?userCode=rvhutp2k' },
  { title: '【腾讯云】云服务器、云数据库、COS、CDN、短信等云产品特惠热卖中', badge: '腾讯', href: 'https://curl.qcloud.com/YsfVFisM' },
  { title: '【腾讯云】腾讯云数智人专享折扣！新用户3折，新老同享7折！助力内容创作、企业降本增效！', badge: '腾讯', href: 'https://curl.qcloud.com/gu3h0HSr' },
  { title: '【腾讯云】Lighthouse助力跨境电商业务扬帆出海', badge: '腾讯', href: 'https://curl.qcloud.com/g2RSCOaU' },
  { title: '【腾讯云】即时通信IM接入AI服务，高效构建智能聊天能力', badge: '腾讯', href: 'https://curl.qcloud.com/AqH4VRww' },
  {
    title: '【腾讯云】腾讯云图，像PPT一样简单的数据可视化工具。5元搞定数据可视化，模板丰富，拖拖拽拽就能做出好看的可视化大屏。',
    badge: '腾讯',
    href: 'https://curl.qcloud.com/RJ5Elol0',
  },
]

const qqGroup: QQGroupItem[] = [
  {
    code: 701470295,
    isFull: false,
  },
]
</script>

<template>
  <main>
    <section class="py-8 mb-4 lg:mb-8 lg:pb-12 lg:pt-16 bg-grid-line">
      <div class="max-w-6xl px-4 mx-auto lg:px-8">
        <h1 class="flex items-center gap-3 text-2xl lg:text-4xl">
          <Icon icon="mdi:applause" class="text-orange-500" />
          <span>欢迎回来！</span>
          <span class="font-semibold">Guest</span>
        </h1>
        <div class="space-y-1 lg:px-12 mt-7">
          <p>请容我简单为你介绍一下 <span class="font-semibold">OiWeb Console</span>。</p>
          <p>该管理后台是我结合多家中小公司后台管理系统开发经历所作，采用 monorepo 模式，可一键运行，部署也极为方便，简单易上手。</p>
          <p>在项目开发上，只有日志会插手业务，因为需要为你记录并在某个时候回顾。但请注意，日志事件在现阶段需要开发者手动添加。</p>
          <p>
            如果需要做出更强大的系统，<span class="font-semibold">OiWeb</span> 支持深度定制。如果在使用或定制过程中有什么问题，可以通过 Discord / QQ群 咨询。
          </p>
          <br />
          <p class="flex items-center gap-1 mb-2">
            <span>开源仓库 <em>(MIT 协议)</em>：</span>
            <a href="">
              <n-button quaternary circle>
                <Icon icon="simple-icons:gitee" width="20" class="text-red-600" />
              </n-button>
            </a>
            <a href="">
              <n-button quaternary circle>
                <Icon icon="simple-icons:github" width="20" />
              </n-button>
            </a>
          </p>
          <br />
          <p class="flex items-center gap-3">
            <WebUpdateLog />
            <n-button quaternary>
              <template #icon>
                <Icon icon="logos:discord-icon" />
              </template>
              <span class="font-semibold">去 Discord 交流</span>
            </n-button>
          </p>
          <br />
          <p>QQ 交流群：</p>
          <p class="flex items-center gap-3">
            <a
              v-for="item in qqGroup"
              :key="item.code"
              :href="`http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=DL-3yIy_Y-7IWPMkGO9vQsilUd0KcLwR&authKey=iVVyAjYK3Hya7i3BAYyXNt2hYpeoRe8TTvSNqlInSNr13RG7GGCp3hrZQktNHA51&noverify=0&group_code=${item.code}`"
              target="_blank"
              :class="['text-blue-500', item.isFull && 'line-through']"
            >
              {{ item.code }}
            </a>
          </p>
        </div>
      </div>
    </section>
    <section class="max-w-6xl px-4 py-2 mx-auto space-y-4 lg:p-8">
      <h3 class="text-xl font-semibold">云服务优惠推荐</h3>
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <li v-for="item in cloudServiceActivity" :key="item.href" class="flex flex-col p-3 transition border rounded hover:shadow-lg">
          <div class="flex-grow mb-4">
            <p>{{ item.title }}</p>
          </div>
          <p class="flex items-center justify-between">
            <n-tag type="info" size="small">{{ item.badge }}</n-tag>
            <a :href="item.href" target="_blank">
              <n-button type="primary" size="small">访问链接</n-button>
            </a>
          </p>
        </li>
      </ul>
    </section>
    <footer class="py-6 text-sm text-center text-zinc-500">
      <p>Copyright &copy;2024 {{ appConfig.siteName }}</p>
    </footer>
  </main>
</template>

<style scoped lang="scss">
.bg-grid-line {
  --oi-bg-size: 20px;
  background-size: var(--oi-bg-size) var(--oi-bg-size);
  background-image: radial-gradient(#ceced2 1px, transparent 1px);
}
</style>
