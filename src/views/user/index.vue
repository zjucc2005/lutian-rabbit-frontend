<script setup>
    import { onMounted, reactive } from 'vue';
    import { ElNotification } from 'element-plus';

    const users = reactive([
        {   
            id: 1,
            staff_no: '19352',
            name: '蔡畅',
            gender: '男',
            department: '总经办',
            phone: '123-12341234',
            mobile: '12312341234',
            email: 'chang.cai@lt.com',
            status: 'active',
            last_signed_in_at: '2026-01-01',
            last_signed_in_ip: '192.168.11.11'
        }
    ])

    onMounted(() => {
        for (let i = 0; i < 20; i++) {
            users.push({
                id: 1,
                staff_no: '19352',
                name: '蔡畅',
                gender: '男',
                department: '总经办',
                phone: '123-12341234',
                mobile: '12312341234',
                email: 'chang.cai@lt.com',
                status: i % 2 == 1 ? 'active' : 'unactive',
                last_signed_in_at: '2026-01-01',
                last_signed_in_ip: '192.168.11.11'
            })
        }
    })
    
    const handleEditUser = () => {
        ElNotification({
            title: 'Operation',
            message: 'handle edit user'
        })
    }
</script>

<template>
    <el-table :data="users" style="width: 100%" :loading="true">
        <el-table-column prop="id" label="ID" fixed width="60" />
        <el-table-column prop="name" label="姓名" fixed width="80"/>
        <el-table-column prop="gender" label="性别" width="60" />
        <el-table-column prop="staff_no" label="员工编号" />
        <el-table-column prop="department" label="部门" />
        <el-table-column prop="phone" label="电话" />
        <el-table-column prop="email" label="邮箱" width="160" />
        <el-table-column prop="status" label="状态">
            <template #default="scope">
                <el-tag :type="scope.row.status == 'active' ? 'success' : 'danger'" size="small">{{ scope.row.status }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="last_signed_in_at" label="最后登录时间" />
        <el-table-column prop="last_signed_in_ip" label="最后登录IP" />
        <el-table-column fixed="right" label="Operations" min-width="120">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="handleEditUser" >Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped>
</style>