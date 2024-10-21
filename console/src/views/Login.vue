<script setup lang="ts">
import type { FormRules } from 'naive-ui'

// 表单字段
interface LoginForm {
  username: string
  password: string
  captcha: string
}

// 定义 表单组件 ref
// 定义 表单
// 定义 表单验证规则
const formRef = shallowRef<HTMLFormElement | null>(null)
const formFields = reactive<LoginForm>({
  username: '',
  password: '',
  captcha: '',
})
const formRules: FormRules = {
  // 用户名规则验证
  // 这里做了异步验证
  // 如果用户账号不存在，没必要再到登录接口再做验证
  username: {
    required: true,
    validator(rule, value) {
      if (!value) {
        return new Error('请输入账号')
      }
      return new Promise<void>((resolve, _reject) => {
        setTimeout(() => resolve(), 1500)
      })
    },
    trigger: 'blur',
  },
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度在 6~18 位', trigger: 'blur' },
  ],
  captcha: { required: true, message: '请根据右侧图像输入验证码', trigger: 'blur' },
}

// 一键验证
// 验证通过发起登录请求
// 处理登录成功：
// - 登录态持久化
// - 账户信息获取
// - 角色权限获取
function handleSubmit() {
  formRef.value?.validate(async (error: any) => {
    if (!error) {
      // 验证通过
    }
  })
}
</script>

<template>
  <main class="flex flex-col min-h-screen p-16 pb-6 block-line-background">
    <div class="mb-20">
      <div class="flex items-start gap-3 px-1 font-semibold">
        <span class="text-3xl">Oi, Web</span>
        <span class="text-sm">管理端</span>
      </div>
    </div>
    <section class="flex-grow">
      <div class="max-w-[360px] mx-auto bg-white/10 backdrop-blur p-6 rounded shadow-2xl" style="--tw-shadow: 0 0 20px 4px rgba(0 0 0 / 0.1)">
        <div class="mb-8 space-y-2 text-center">
          <h3 class="space-x-1">
            <span class="inline text-xl align-middle">欢迎回来</span>
            <Icon icon="mdi:applause" class="inline text-orange-500" width="20" />
          </h3>
          <p class="text-sm text-zinc-500">今天你的心情怎么样呢？要保持开心哦</p>
        </div>
        <n-divider />
        <n-form ref="formRef" :model="formFields" :rules="formRules">
          <n-form-item label="账号" path="username">
            <n-input v-model:value="formFields.username" />
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input v-model:value="formFields.password" type="password" />
          </n-form-item>
          <n-form-item label="图片验证" path="captcha">
            <n-input-group>
              <n-input v-model:value="formFields.captcha" placeholder="右侧图像结果">
                <template #suffix>
                  <div class="w-16 -mr-2 h-7 bg-zinc-100" />
                </template>
              </n-input>
              <n-input-group-label>
                <Icon icon="eva:refresh-fill" class="inline -mt-1" />
              </n-input-group-label>
            </n-input-group>
          </n-form-item>
          <div class="flex items-center mb-6">
            <n-checkbox>记住我</n-checkbox>
          </div>
          <n-button block type="primary" @click="handleSubmit">登录</n-button>
        </n-form>
      </div>
    </section>
    <footer class="space-y-1 text-sm text-center text-zinc-600">
      <div>Copyright &copy;2024 {Oi, Web} All Rights Reserved.</div>
      <div>粤备xxxxxxxx-1 <n-divider vertical /> 粤网安 xxxxxxx</div>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.block-line-background {
  background-size: 27px 27px;
  background-image: linear-gradient(to right, #d4d4d8 1px, transparent 1px), linear-gradient(to bottom, #d4d4d8 1px, transparent 1px);
}
</style>
