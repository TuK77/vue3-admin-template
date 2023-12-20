<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { useAppConfig } from '@/store/app';
import SubItem from './subItem.vue';

const appConfig = useAppConfig();
const isCollapse = computed(() => !appConfig.aside.opened);
const menuLists = ref<Array<RouteItem>>([
  { name: '菜单1', path: '/menu1' },
  { name: '菜单2', path: '/menu2' },
  { name: '菜单3', path: '/menu3' },
  {
    name: '菜单4', path: '/menu3', children: [
      { name: '菜单4-1', path: '/menu4-1' }
    ]
  },
])

onMounted(() => { })
</script>
<template>
  <el-menu router default-active="/menu1" class="menu-container" :collapse="isCollapse" :collapse-transition="false"
    unique-opened>
    <template v-for="val of menuLists">
      <el-sub-menu v-if="val.children" :key="val.path">
        <template #title>
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>{{ val.name }}</span>
        </template>
        <SubItem :children="val.children"></SubItem>
      </el-sub-menu>
      <template v-else>
        <el-menu-item :key="val.path">
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ val.name }}</template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style scoped lang="scss"></style>
