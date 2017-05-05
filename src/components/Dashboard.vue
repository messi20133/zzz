<template>
    <div ref="dashboard" class="mianban"  v-on:drop="drop" v-on:dragenter='dragenter' v-on:dragover='dragover'>
        <div v-for='comps in componentsList' v-bind:is='comps'></div>
    </div>
</template>
<script>

import Vue from 'vue'
import Img from './comps/Img'
export default {
    name: 'Dashboard',
    components: {
        'c-img': Img
    },
    data: function () {
        return {
            componentsList: []
        }
    },
    methods: {
        drop: function (event) {
            console.log("drop! ");
            this.componentsList.push("c-img");
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
        overflow auto
</style>