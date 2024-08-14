<template>
  <div>
    <h1>hello,测试全局scss变量</h1>
    <el-button type="priamry" >svg测试</el-button>
    <svg-icon name="home" color="pink"></svg-icon>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
h1{
  color: $base-color;
}
</style>
