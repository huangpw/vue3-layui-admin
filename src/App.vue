<template>
    <lay-config-provider :theme="theme">
        <RouterView />
    </lay-config-provider>
</template>

<script setup>
// import { RouterView } from 'vue-router'
// const theme = ref('dark')
const theme = ref('light')
</script>


<style scoped>

</style>
