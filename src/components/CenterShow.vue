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
        box-sizing border-box
        background #f2f2f2

</style>