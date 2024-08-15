<template>
  <div>
    主页{{ user.name }}

    <lay-button>默认按钮</lay-button>
    <lay-button type="primary">原始按钮</lay-button>
    <lay-button type="normal">百搭按钮</lay-button>
    <lay-button type="warm">暖色按钮</lay-button>
    <lay-button type="danger">警告按钮</lay-button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores'

const user = useUserStore()
</script>
