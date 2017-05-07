<template>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>
<script>
    import {Input} from 'element-ui'
    import Vue from 'vue'
    Vue.use(Input)
    export default {
        name: 'Textdetail',
        data() {
            return {
            input: ''
            }
        }
    }
</script>
<style>

</style>