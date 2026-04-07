<script>
    import { useSidebarStore } from '@/stores/sidebar'
    export default {
        data() {
            return {
                sidebar: useSidebarStore()
            }
        },
        methods: {
            handleSidebarToggle() {
                this.sidebar.toggle()
            }
        }
    }
</script>

<template>
    <div class="navbar">
        <!-- sidebar collapse button -->
        <el-icon
            size="20"
            :class="{ 'is-collapse': sidebar.collapse }"
            style="width: 60px;"
            @click="handleSidebarToggle"
            >
            <fold />
        </el-icon>
        <!-- breadcrumb path -->
        <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item> -->
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item, index) in ['首页', ...($route.meta.breadcrumb || [])]" :key="index"
                    :to="item == '首页' ? '/dashboard' : ''"
                    >
                    {{ item }}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
        <!-- dropdown menu -->
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
            Dropdown List
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item divided>
                    <router-link to="/login">Logout</router-link>
                </el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped>
    .navbar {
        height: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0,21,41,.08);
    }
    .el-icon.is-collapse {
        transform: rotate(180deg);
    }
    .el-breadcrumb {
        flex: 1;
    }
    /* breadcrumb transition */
    .breadcrumb-move,
    .breadcrumb-enter-active,
    .breadcrumb-leave-active {
        transition: all 0.5s;
    }
    .breadcrumb-enter,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(20px);
    }
    .breadcrumb-leave-active {
        position: absolute;
    }
</style>