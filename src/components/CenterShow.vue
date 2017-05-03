<template>
    <section class='center'>
        <div class="topbanner">
            <ul>
                <li>
                    <a>保存</a>
                </li>
                <li>
                    <a>预览</a>
                </li>
                <li>
                    <a>发布</a>
                </li>
            </ul>
        </div>
        <div class='show'>
            <div class='bg-wrapper'>
                <div class='phone'>
                </div>
                <span class='el-icon-setting setting'></span>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: "CenterShow"
    }
</script>
<style lang='styl'>
    .center 
        flex 3
        flex-shrink 0
        min-width 300px
        backgrpund #ffffff
        padding-top top=60px
        position relative
    .topbanner
        position absolute
        left 0
        top 0
        width 100%
        height top
        box-shadow 0 1px 1px #f2f2f2
        ul
            width 100%
            height 100%
            li 
                float right
                display inline-block
                padding 20px
    .show
        width 100%
        height 100%
        background #f2f2f2
        padding-top 80px
        box-sizing border-box
        position relative
    .bg-wrapper
        width 40%
        padding-bottom 75%
        background white
        border-radius 6%
        margin 0 auto
        position relative
    .phone 
        width 94%
        height 85%
        background #f2f2f2
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
    .setting
        position relative
        left 115%
        top 30px
        display block
        width 30px
        height 30px
        font-size 30px
</style>