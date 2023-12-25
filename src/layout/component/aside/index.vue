<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useAppConfig } from '@/store/app';
import { useMenu } from '@/store/menu';
import SubItem from './subItem.vue';

const appConfig = useAppConfig();
const menu = useMenu();
const isCollapse = computed(() => !appConfig.aside.opened);
const menuLists = computed(() => menu.menuList);
const defaultActive = ref('/index');

onMounted(() => { })
</script>
<template>
  <el-menu router :default-active="defaultActive" class="menu-container" :collapse="isCollapse"
    :collapse-transition="false" unique-opened>
    <template v-for="val of menuLists">
      <el-sub-menu v-if="val.children" :key="val.path" :index="val.path">
        <template #title>
          <el-icon>
            <component :is="val.icon"></component>
          </el-icon>
          <span>{{ val.name }}</span>
        </template>
        <SubItem :children="val.children"></SubItem>
      </el-sub-menu>
      <template v-else>
        <el-menu-item :key="val.path" :index="val.path">
          <el-icon>
            <component :is="val.icon"></component>
          </el-icon>
          <template #title>{{ val.name }}</template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style scoped lang="scss"></style>
