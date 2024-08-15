import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = null;
  const token = null;
  // 登录
  const login = (user, token) => {
    this.user = user;
    this.token = token;
  }
  // 登出
  const logout = () => {
    this.user = null;
  }
  

  return { user, token, login, logout }
})
