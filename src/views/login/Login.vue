<template>
  <lay-container>
    <div class="login-panel">
        <div class="content-panel">
            <div class="login-logo">
                <img src="@/assets/logo2.jpg" />
            </div>
            <div class="login-content">
                <div class="tab-items">
                    <div class="tab-item" :class="{ 'tab-item-selected': currentSelectTab == 0 }" @click="() => currentSelectTab = 0">账号密码登录</div>
                    <div class="tab-item" :class="{ 'tab-item-selected': currentSelectTab == 1 }" @click="() => currentSelectTab = 1">短信验证登录</div>
                </div>
                <div>
                    <UsernameLogin v-if="currentSelectTab == 0" />
                    <PhoneCodeLogin v-else />
                </div>
            </div>
        </div>
    </div>
  </lay-container>
</template>

<script setup>
import UsernameLogin from './components/UsernameLogin.vue';
import PhoneCodeLogin from './components/PhoneCodeLogin.vue';

const currentSelectTab = ref(0);
</script>
<style scoped>
.layui-container {
    padding: 0;
}
.login-panel {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(159deg, #1f6fc7, #2196f3, #1177c9);
    display: flex;
    align-items: center;
}
.content-panel {
    background: #fff;
    border-radius: 10px;
    margin: 0 auto;
    width: 60vw;
    height: 60vh;
    box-shadow: 0 0 13px 2px #7c7c7c9e;
    display: flex;
    justify-content: center;
    align-items: center;

}
.login-logo {
    /* width: 40%; */
    flex: 1;
    height: 100%;
    text-align: center;
}
.login-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; 
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.login-content {
    flex: 1;
    padding: 20px;
}
.tab-items {
    width: 100%;
    height: 42px;
    line-height: 42px;
    display: flex;
    text-align: center;
    font-size: 1.4rem;
}
.tab-items .tab-item {
    flex: 1;
    cursor: pointer;
}
.tab-items .tab-item-selected {
    color: blue;
    border: 1px solid;
    box-sizing: border-box;
}
</style>