<template>
  <div class="part-seven ">
    <h3 class="text-center">求职意向</h3>
    <p class="text-small"><span class="font-bold">期望职位：</span>前端工程师</p>
    <p class="text-small"><span class="font-bold">工作技能：</span>Vue</p>
    <p class="text-small"><span class="font-bold">目标城市：</span>长沙，湘潭，株洲</p>
    <p class="text-small"><span class="font-bold">期望薪资：</span>7K - 10K</p>
    <p class="text-small"><span class="font-bold">入职时间：</span>随时入职</p>
  </div>
</template>

<script>
    export default {
        name: "Works",
      data() {
        return {
          curWidth: 0
        };
      },
      beforeMount() {
        this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
        if(this.curWidth < 1000) {
          this.partSeven = "part-sevev-responsive"
        }
      }
    }
</script>

<style scoped>
  .part-seven {
    width: 100%;
    height: 300px;
    border: 40px solid transparent;
    background: #18202d;
  }
  .part-sevev-responsive {
    width: 100%;
    border: 40px solid transparent;
    background: #18202d;
  }
  .text-center {
    text-align: center;
  }
  .text-small {
    font-size: .9em;
  }
  .font-bold {
    text-align: center;
    color: deepskyblue;
  }
</style>
