<template>

    <div class="app" id="app">
     <!-- <div class="banner">
        <img class="hidden-md-only hidden-lg-only hidden-xl-only" :src=bannerXSSM alt="banner 图">
        <img class="hidden-xs-only hidden-sm-only hidden-lg-only hidden-xl-only" :src="bannerMD" alt="banner 图">
        <img class="hidden-xs-only hidden-sm-only hidden-md-only" :src="bannerLGXL" alt="banner 图">
      </div>-->


      <!-- 第一行 -->
      <el-row>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
          <router-view name="About"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
          <router-view name="Code"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
          <router-view name="Demos"/>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
          <router-view name="Imfor"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
          <router-view name="JobWanted"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
          <router-view name="Skills"/>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4" class="part">
          <router-view name="Works"/>
        </el-col>
      </el-row>
    </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      bannerXSSM: require("./assets/img/13.jpg"),
      bannerMD: require("./assets/img/15.jpg"),
      bannerLGXL: require("./assets/img/16.jpg")
    }
  }
}
</script>

<style>
  body {
    background: #011128;
    color: #fff;
  }
  .app {
    width: 100%;
  }
  .part {
    padding: 20px;
    border: 1px solid red;
  }
  .banner img {
    width: 100%;
    height: 80px;
  }
  p {
    text-align: center;
  }
</style>
