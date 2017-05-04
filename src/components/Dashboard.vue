<template>
    <div ref="dashboard" class="mianban" v-on:drop="drop" v-on:dragenter='dragenter' v-on:dragover='dragover'>
        <span>{{msg}}</span>
    </div>
</template>
<script>
import Vue from 'vue'
var MyComponent = Vue.extend({
  template: '<div>Hello!</div>'
})
export default {
    name: 'Dashboard',
    data: function () {
        return {
            msg: "hello yidian"
        }
    },
    methods: {
        drop: function (event) {
            console.log("drop! ");
            var Text =new MyComponent().$mount();
            var ele = this.$refs.dashboard;
            $(ele).append(Text.$el);
        },

        dragenter: function (event) {
            //alert(1);
            console.log("drag enter! ");
        },

        dragover: function (event) {
            event.preventDefault();
            console.log('drag over!');
        }
    }
}
</script>
<style lang='styl'>
    .mianban
        width 100%
        height 100%
</style>