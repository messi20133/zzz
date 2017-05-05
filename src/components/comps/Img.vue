<template>
<!--
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    -->
    <div class="avatar-uploader" ref="component">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
</template>
<script>
export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
    }
}
</script>
<style>
.avatar-uploader {
    border: 1px dashed #d9d9d9;
    box-sizing: border-box;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 30%;
  }
  .avatar-uploader:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  .avatar-uploader:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    vertical-align: middle;
    text-align: center;
    display:inline-block;
    width: 100%;
  }
  .avatar {
    width: 100%;
    display: block;
  }
</style>