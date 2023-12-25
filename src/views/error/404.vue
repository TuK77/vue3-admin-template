<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const handleBack = () => {
  router.back()
}
</script>
<template>
  <div>
    <div class="page-container">
      <div class="msg">
        <h3>404错误!</h3>
        <p>对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。</p>
        <el-button type="text" @click="handleBack">返回上级</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .msg {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 32px;
      font-family: HYLingXinJ;
      font-weight: 400;
      text-align: center;
    }

    p {
      font-size: 16px;
      font-family: Alibaba PuHuiTi;
      font-weight: 400;
      text-align: center;
      padding: 20px 0;
    }
  }
}
</style>