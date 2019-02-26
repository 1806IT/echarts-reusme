<template>
    <div class="part-one">
      <img class="part-one-image" :src="headImage" alt="头像">
      <div class="content">
        <p><span  class="txhead">姓&emsp;&emsp;名：</span><span class="text">朱智聪</span></p>
        <p><span class="txhead">学&emsp;&emsp;历：</span><span class="text">本科</span></p>
        <p><span class="txhead">工作年限：</span><span class="text">1 年</span></p>
        <p><span class="txhead">年&emsp;&emsp;龄：</span><span class="text">33</span></p>
        <p><span class="txhead">联系电话：</span><span class="text">13607328704</span></p>
        <p><span class="txhead">电子邮箱：</span><span class="text">370531378@qq.com</span></p>
        <p><span class="txhead">博&emsp;&emsp;客：</span><span class="text"><a href="http://jsliang.top">知乎</a></span></p>
        <p><span class="txhead">GitHub：</span><span class="text"><a href="https://github.com/LiangJunrong">朱智聪</a></span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "About",
      data(){
          return {
            headImage:require('../assets/img/20.jpg')
          }
      }
    }
</script>

<style scoped>
  a {
    color: deepskyblue;
  }
  a:hover {
    color: rgb(118, 190, 248);
  }
  .content{
    margin-top: 20px;
  }
  p {
    line-height: 20px;
    display: grid;
    grid-template-columns: 100px 1fr;
    text-align: left;
  }
  .txhead{
    grid-column: 1;
  }
  .text{
    grid-column: 2;
  }
  .part-one {
    width: 100%;
    height: 420px;
    border: 40px solid transparent;
    background: #18202d;
    font-size: 12px;

  }
  .part-one-image {
    width: 150px;
    height: 150px;
    margin-left: 20px;
  }
</style>
