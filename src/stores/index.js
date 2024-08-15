import { createPinia } from 'pinia';

// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

export default pinia

export * from './modules/user'
export * from './modules/counter'

// import { useUserStore } from './modules/user'
// export { useUserStore }
// 简化为
// export * from './modules/user'