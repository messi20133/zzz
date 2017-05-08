<template>
    <div ref="dashboard" class="mianban" id='targetelements' data-target='dropEle'>
        <div v-for='comps in componentsList'  v-bind:currentIndex='currentIndex' v-bind:index='comps.index'  v-bind:is='comps.type'></div>
    </div>
</template>
<script>
var uuid = 0;
import Vue from 'vue'
import Img from './comps/Img'
import Text from './comps/Text'
import Blank from './comps/Blank'
import dragula from 'dragula'
import Utils from '../utils/utils'
//创建影子标识
function makeElement(){
    var newNode = document.createElement("div");
    newNode.textContent = "放在这里!";
    newNode.classList.add("elem");
    return newNode;
}
export default {
    name: 'Dashboard',
    components: {
        'c-img': Img,
        'c-text': Text,
        'c-blank': Blank
    },
    data: function () {
        return {
            currentIndex: 0,
            componentsList: []
        }
    },
    mounted: function () {
        var that = this;
        dragula([document.querySelector('.sourcelements'), document.querySelector('#targetelements')], {
            copy: function (el, source) {
                return source === document.querySelector('.sourcelements');
            },
            accepts: function (el, target) {
                return  target !== document.querySelector('.sourcelements');
            },

            }).on('drop', function (el, target, source, sibling) {
                if(!target){
                    return;
                }
                if(sibling == this._shadow) {
                    sibling = sibling.nextSibling;
                }
                if(sibling == el) {
                    sibling = sibling.nextSibling;
                }
                //el.parentNode.replaceChild(this._shadow, el);
                if(source === document.querySelector('.sourcelements')){
                    $(el).remove();
                    var type = $(el).attr("data-type");
                    var temp  = uuid;
                    if(!sibling) {
                        that.$store.commit("createInstance", temp);
                        that.componentsList.push({
                            type: "c-" + type,
                            index: uuid++
                        });
                        that.currentIndex = temp;
                    } else {
                        var index = Utils.indexOf(that.componentsList, 'index', $(sibling).attr('index'));
                        that.$store.commit("createInstance", temp);
                        that.componentsList.splice(index, 0 , {
                            type: "c-" + type,
                            index: uuid++
                        })
                        that.currentIndex = temp;
                    }
                } else {
                    var elIndex = Utils.indexOf(that.componentsList, 'index', $(el).attr('index'));
                    var temp = that.componentsList.splice(elIndex, 1);
                    if(!sibling) {
                        that.componentsList.push(temp[0]);
                    } else {
                        var siblingIndex = Utils.indexOf(that.componentsList, 'index', $(sibling).attr('index'));
                        that.componentsList.splice(siblingIndex, 0, temp[0]);
                    }
                    el.style.display = 'block'; 
                }
            }).on('shadow', function (el, container, source) {
                if (!this._shadow){
                    this._shadow = makeElement();
                    this._shadow.classList.add("gu-transit");
                }
                el.style.display = 'none';
                el.parentNode.insertBefore(this._shadow, el);
            }).on('dragend', function (el) {
                if(this._shadow){
                    this._shadow.remove();
                    this._shadow = null;
                }
            });
    },
    methods: {
    }
}
</script>
<style lang='styl'>
    .mianban
        width 100%
        height 100%
        overflow auto
</style>