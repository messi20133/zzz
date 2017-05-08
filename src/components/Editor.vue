<template>
    <div class="editor">

        <c-textdetail v-if='isText'></c-textdetail>
    </div>
</template>
<script>
    import Textdetail from './detailDashboard/Text_detail'
    export default {
        name: "Editor",
        components: {
            'c-textdetail': Textdetail
        },
        data () {
            return {
                type: this.$store.state.base.type
            }
        },
        computed: {
            isText: function () {
                return this.$store.state.base.type == 'text'
            },
        },

    }
</script>
<style lang='styl'>
    .editor
        flex 2
        box-shadow -1px 0 1px #f2f2f2
</style>