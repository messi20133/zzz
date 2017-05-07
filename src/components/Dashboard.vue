<template>
    <div ref="dashboard" class="mianban"  v-on:drop="drop" v-on:dragenter='dragenter' v-on:dragover='dragover' v-on:click='click'>
        <div v-for='comps in componentsList'  v-bind:currentIndex='currentIndex' v-bind:index='comps.index'  v-bind:is='comps.type'></div>
    </div>
</template>
<script>
var uuid = 0;
import Vue from 'vue'
import Img from './comps/Img'
import Text from './comps/Text'
export default {
    name: 'Dashboard',
    components: {
        'c-img': Img,
        'c-text': Text
    },
    data: function () {
        return {
            currentIndex: 0,
            componentsList: []
        }
    },
    methods: {
        drop: function (event) {
            console.log("drop! ");
            var transfer = event.dataTransfer;
            if(transfer) {
                var type = transfer.getData("eleType");
                console.log("~~~~~~~~~~" + type);
                var temp  = uuid;
                this.$store.commit("createInstance", temp);
                this.componentsList.push({
                    type: "c-" + type,
                    index: uuid++
                });
                this.currentIndex = temp;
            }
        },  

        dragenter: function (event) {
            //alert(1);
            console.log("drag enter! ");
        },

        dragover: function (event) {
            event.preventDefault();
            console.log('drag over!');
        },

        click: function () {
            this.componentsList.forEach(function(item){
                item.tiggler = false;
            });
            console.log(this.componentsList[0].tiggler);
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