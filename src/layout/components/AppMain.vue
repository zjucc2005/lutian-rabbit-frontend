<script>
</script>

<template>
    <router-view v-slot="{ Component, route }">
        <transition name="main" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<style scoped>
/* main transition */
.main-enter-active,
.main-leave-active {
    transition: all 0.5s;
}
.main-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.main-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>