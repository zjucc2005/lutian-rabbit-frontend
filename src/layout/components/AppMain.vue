<script setup>
</script>

<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
        </transition>
    </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
.fade-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>