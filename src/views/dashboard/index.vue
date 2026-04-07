<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            // this.$axios.get('http://www.baidu.com').then(res => {
            //     console.log('>>> res', res)
            // })
        },
        methods: {

        }
    }
</script>

<template>
    <section>
        <el-text>
        Dashboard
        </el-text>
        <p>{{ $route }}</p>
        <p>{{ $router }}</p>
    </section>
</template>

<style scoped>
</style>