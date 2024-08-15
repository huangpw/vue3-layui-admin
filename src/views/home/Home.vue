<template>
  <div>
    主页{{ user.name }}

    <lay-button @click="openMsg1">默认按钮</lay-button>
    <lay-button type="primary">原始按钮</lay-button>
    <lay-button type="normal">百搭按钮</lay-button>
    <lay-button type="warm">暖色按钮</lay-button>
    <lay-button type="danger">警告按钮</lay-button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores'

const user = useUserStore()
const openMsg1 = () => {
    // layer.msg("成功消息", { icon : 1, time: 1000})
    layer.confirm("layui-vue 1.0.0 已经发布")
}
</script>
