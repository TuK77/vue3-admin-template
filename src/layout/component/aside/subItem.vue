<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

const props = defineProps<{
  children: RouteItem[]
}>()
</script>
<template>
  <template v-for="val of props.children">
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
</template>

<style scoped lang="scss"></style>