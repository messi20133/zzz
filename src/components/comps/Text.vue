<template>
    <div class='elehover' :index="index" ref="component">{{$store.state.text[index].msg}}</div>
</template>
<script>
export default {
    props: ['currentIndex', 'index'],
    data: function () {
        return {
            msg: this.$store.state.text[this.index].msg
        }
    },
    mounted: function () {
        if(this.currentIndex == this.index) {
            this.trigglerSelect(this.index);
        }
    },
    watch: {
        currentIndex: function (val, oldval) {
            if(val == oldval) {
                this.trigglerSelect(val);
            }
        }
    },

    methods: {
        trigglerSelect: function (index) {
            this.$store.commit('setCurrentComp', 'text', index );
        }
    }

}
</script>
<style lang="stylus">
</style>