import {
  computed,
  ref,
} from 'vue';

import { defineStore } from 'pinia';

export const useUserStore = defineStore('counter', () => {
  // 变量
  const count = ref(0)
  const name = ref("管理员")
  // 方法 
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
