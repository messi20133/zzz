<template>
    <nav v-on:dragstart='dragstart' v-on:dragend='dragend'>
        <span class="main-title">组件</span>
        <span class="sub-title">模板</span>
        <ul>
            <li draggable="true" data-type='text'>
                <span class="tplname">文字</span>
            </li>
            <li draggable="true" data-type='img'>
                <span class="tplname">图片</span>
            </li>
            <li draggable="true" data-type='title'>
                <span class="tplname">标题</span>
            </li>
            <li draggable="true" data-type='button'>
                <span class="tplname">按钮</span>
            </li>
            <li draggable="true" data-type='navbar'>
                <span class="tplname">导航</span>
            </li>
            <li draggable="true" data-type='blank'>
                <span class="tplname">留空</span>
            </li>
            <li draggable="true" data-type='tel'>
                <span class="tplname">电话</span>
            </li>
            <li draggable="true" data-type='link'>
                <span class="tplname">链接</span>
            </li>
            <li draggable="true" data-type='seg'>
                <span class="tplname">分隔符</span>
            </li>
        </ul>
        <span class="sub-title">表单元件</span>
        <ul>
            <li draggable="true" data-type='radio'>
                <span class="tplname">单选按钮</span>
            </li>
            <li draggable="true" data-type='inputbox'>
                <span class="tplname">文本框</span>
            </li>
            <li draggable="true" data-type='select'>
                <span class="tplname">下拉列表</span>
            </li>
        </ul>
    </nav>
</template>
<script>
    const tplConfigs =  {
        'text': '',//文本
        'img': '', //图片
        'title': '',//标题
        'navbar': '', //导航
        'button': '',//按钮
        'tel': '',//电话
        'blank': '',//空白
        'link': '',//链接
        'seg': ''//分隔符
    };
    export default {
        name: "Nav",
        methods: {
            dragstart: function (event) {
                var ele = event.target;
                if(!ele) {
                    return false;
                }
                var type = ele.dataset.type;
                //console.log(type.type);
                event.dataTransfer.setData("eleType", type)
                
                console.log("drag start! ");
                return true;
            },
            dragend: function (event) {
                console.log("drag end! ");
            }
        }
    }
</script>
<style lang='styl'>
    nav
        width 23.3333%
        height 100%
        /*
        background #f2f2f2
        */
        box-shadow 1px 0 1px #f2f2f2
    .main-title
        display inline-block
        width 100%
        height 100px
        text-align center
        line-height 100px
        font-size 20px
        color #000000 
    .sub-title
        display block
        width 100%
        padding 10px
        box-sizing border-box
    nav ul
        display flex
        display -webkit-flex
        flex-direction row
        flex-wrap wrap
        justify-content space-around
    nav ul li
            width 30%
            padding-top 30% 
            background #f2f2f2
            position relative
            margin-bottom 5px
            .tplname
                diaplay block
                position absolute
                left 50%
                top 50%
                font-size 14px
                text-align center
                white-space nowrap
                transform translate(-50%, -50%)
                
</style>