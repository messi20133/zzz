<template>
    <div class='elehover'>{{$store.state.text[index].msg}}</div>
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
        console.log("created");
        console.log(this.currentIndex + " " + this.index);
        if(this.currentIndex == this.index) {
            console.log("success");
            this.trigglerSelect(this.index);
        }
    },
    watch: {
        currentIndex: function (val, oldval) {
            console.log("val:"  + val + " ;oldval:" + oldval);
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