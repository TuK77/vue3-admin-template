<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { useMenu } from '@/store/menu';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const menu = useMenu();
const { menuList } = storeToRefs(menu);
const state: BreadcrumbState = reactive({
  breadcrumbList: [],
  routeSplit: [],
  splitIndex: 0,
  routeSplitFirst: ''
})

onMounted(() => {
  initRouteSplit(route.path);
})
onBeforeRouteUpdate(to => {
  initRouteSplit(to.path);
})
const getBreadcrumbList = (data: Array<RouteItem>) => {
  data.forEach((item: RouteItem) => {
    state.routeSplit.forEach((v: string, k: number, arrs: string[]) => {
      if (state.routeSplitFirst === item.path) {
        state.routeSplitFirst += `/${arrs[state.splitIndex]}`;
        state.splitIndex++;
        state.breadcrumbList.push(item);
        if (item.children) getBreadcrumbList(item.children);
      }
    })
  });
}
const initRouteSplit = (path: string) => {
  state.breadcrumbList = [menuList.value[0]];
  state.routeSplit = path.split('/');
  state.routeSplit.shift();
  state.routeSplitFirst = `/${state.routeSplit[0]}`;
  state.splitIndex = 1;
  getBreadcrumbList(menuList.value);
  if (route.name === 'index') state.breadcrumbList.shift();
}

</script>
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item of state.breadcrumbList" :key="item.path" :to="{ path: item.path }">{{ item.name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>