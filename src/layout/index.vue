<script>
    import Sidebar from './components/Sidebar.vue'
    import Navbar from './components/Navbar.vue'
    import AppMain from './components/AppMain.vue'
    import { useSidebarStore } from '@/stores/sidebar'
    export default {
        components: {
            Sidebar, Navbar, AppMain
        },
        data() {
            return {
                sidebar: useSidebarStore()
            }
        }
    }
</script>

<template>
    <el-container>
        <el-aside :class="{ 'is-collapse': sidebar.collapse }">
            <Sidebar />
        </el-aside>
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <AppMain />
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
    .el-container {
        height: 100vh;
    }
    .el-aside {
        width: 210px;
    }
    .el-aside.is-collapse {
        transition: width 0.28s;
        width: 64px;
    }
    .el-header {
        padding: 0;
        height: 50px;
    }
    .el-main {
        padding: 10px 15px;
    }
</style>