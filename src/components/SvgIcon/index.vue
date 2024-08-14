<!-- 因为项目很多模块需要使用图标,因此把它封装为全局组件！！ -->
<template>
    <div>
        <svg :style="{ width: width, height: height }">
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps({
    //xlink:href属性值的前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    //svg矢量图的名字
    name: String,
    //接收父组件传过来svg图标的颜色
    color: {
        type: String,
        default: ""
    },
    //svg宽度
    width: {
        type: String,
        default: '16px'
    },
    //svg高度
    height: {
        type: String,
        default: '16px'
    }

})
</script>
<style scoped></style>
