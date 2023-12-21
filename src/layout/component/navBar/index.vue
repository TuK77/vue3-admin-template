<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { Expand, Fold, ArrowDown } from '@element-plus/icons-vue';
import { useAppConfig } from '@/store/app';
import { useRouter } from 'vue-router';
import { removeToken } from '@/utils/auth';

const router = useRouter();
const appConfig = useAppConfig();
const isOpen = computed(() => appConfig.aside.opened);

const onToggleAside = () => {
  appConfig.onToggleAside();
}
const onDropDownClick = (val: string) => {
  console.log(val)
  switch (val) {
    case 'home':
      router.push({ path: '/index' });
      break;
    case 'personCenter':
      router.push({ path: '/index' });
      break;
    case 'logout':
      removeToken();
      router.push({ path: '/login' });
      break;
  }
}

</script>
<template>
  <div class="navbars-container">
    <div class="navbars-breadcrumb-user">
      <div class="navbars-breadcrumb">
        <div class="breadcrumb-icons" @click="onToggleAside">
          <el-icon class="breadcrumb-icon" :size="16" v-if="isOpen">
            <Fold />
          </el-icon>
          <el-icon :size="16" v-else>
            <Expand />
          </el-icon>
        </div>
        <span>首页</span>
      </div>
      <div class="navbars-user">
        <el-dropdown trigger="click" @command="onDropDownClick">
          <span class="el-dropdown-link">
            用户名
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="home">首页</el-dropdown-item>
              <el-dropdown-item command="personCenter">个人中心</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbars-container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .navbars-breadcrumb-user {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbars-breadcrumb {
      height: inherit;
      display: flex;
      align-items: center;

      .breadcrumb-icons {
        width: 40px;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      span {
        font-size: 16px;
        line-height: 50px;
      }
    }

    .navbars-user {
      height: inherit;
      display: flex;
      align-items: center;
      padding-right: 15px;

      .el-dropdown-link {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>