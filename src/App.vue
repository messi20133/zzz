<template>
  <div class='wrapper'>
    <c-header></c-header>
    <div class='container'>
      <c-nav></c-nav>
      <c-centershow></c-centershow>
      <c-editor></c-editor>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import CenterShow from '@/components/CenterShow'
import Editor from '@/components/Editor'
export default {
  name: 'app',
  components: {
    'c-header': Header,
    'c-nav': Nav,
    'c-centershow': CenterShow,
    'c-editor': Editor
  }
}
</script>

<style lang='styl'>
  .wrapper
    position relative
    height 100%
  .container 
    display flex
    height 100%
    padding-top 80px
    box-sizing border-box 

</style>
