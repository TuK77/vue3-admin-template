<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import Aside from '@/layout/component/aside/index.vue';
import Navbar from '@/layout/component/navbar/index.vue';
import { useAppConfig } from '@/store/app';

const appConfig = useAppConfig();
const isCollapse = computed(() => !appConfig.aside.opened);
</script>
<template>
  <el-container class="layout-container">
    <el-aside :class="[isCollapse ? 'layout-aside-64' : 'layout-aside-220', 'layout-aside']">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <Navbar></Navbar>
      </el-header>
      <el-main class="layout-main">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;

  .aside {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>