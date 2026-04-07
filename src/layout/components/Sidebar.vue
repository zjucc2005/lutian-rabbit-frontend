<script>
    import { useSidebarStore } from '@/stores/sidebar'
    export default {
        data() {
            return {
                sidebar: useSidebarStore()
            }
        }
    }
</script>

<template>
    <el-scrollbar max-height="100vh">
        <el-menu default-active="dashboard" :router="true" :collapse="sidebar.collapse">
            <el-menu-item index="dashboard">
                <el-icon><home-filled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="finance">
                <template #title>
                    <el-icon><coin /></el-icon>
                    <span>核价管理</span>
                </template>
                <el-menu-item index="commodity_price">
                    <el-icon><van /></el-icon>
                    <span>大宗价格表</span>
                </el-menu-item>
                <el-menu-item index="unit_price">
                    <el-icon><timer /></el-icon>
                    <span>实时单价表</span>
                </el-menu-item>
                <el-menu-item index="ss_unit_price">
                    <el-icon><document-copy /></el-icon>
                    <span>归档单价表</span>
                </el-menu-item>
                <el-menu-item index="bom_cost">
                    <el-icon><connection /></el-icon>
                    <span>核价列表</span>
                </el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="settings">
                <template #title>
                    <el-icon><tools /></el-icon>
                    <span>系统设置</span>
                </template>
                <el-menu-item index="user">
                    <el-icon><user /></el-icon>
                    <span>用户</span>
                </el-menu-item>
                <el-menu-item index="permission">
                    <el-icon><key /></el-icon>
                    <span>权限</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </el-scrollbar>
</template>

<style scoped>
    .el-menu {
        min-height: 100vh;
        /* height: 100%; */
        --el-menu-bg-color: #304156;
        --el-menu-hover-bg-color: #1d2b3b;
        --el-menu-text-color: #ffffff;
        --el-menu-active-color: #409eff;
    }
</style>