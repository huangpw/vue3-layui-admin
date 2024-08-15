<template>
  <div>主页{{ user.name }}</div>
</template>

<script setup>
import { useUserStore } from '@/stores'

const user = useUserStore()
</script>
