<template>
    <div ref="dashboard" class="mianban" v-on:drop="drop" v-on:dragenter='dragenter' v-on:dragover='dragover'>
        <span>{{msg}}</span>
    </div>
</template>
<script>

import Vue from 'vue'

// var MyComponent = Vue.extend({
//   template: '<div>{{msg}}</div>',
//   data: function () {
//         return {
//             msg: 'hello'
//         }
//     }
// })

import Text from './comps/Text'
import Img from './comps/Img'
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
            var MyComponent = Vue.extend(Img);
            var comp = new MyComponent();
            var t = comp.$mount();
            window.comp = comp;
            var ele = this.$refs.dashboard;
            $(ele).append(t.$el);
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