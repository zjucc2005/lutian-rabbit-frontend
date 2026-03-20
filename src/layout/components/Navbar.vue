<script setup>
    import { useSidebarStore } from '@/stores/sidebar'
    const sidebar = useSidebarStore()

    const handleSidebarToggle = () => {
        sidebar.toggle()
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
            <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
            <a href="/">path1</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>path2</el-breadcrumb-item>
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
                <el-dropdown-item divided>Logout</el-dropdown-item>
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
</style>