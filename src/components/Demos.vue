<template>
  <div class="part-three" id="skills">3</div>
</template>

<script>
  let echarts = require("echarts/lib/echarts");
    export default {
        name: "Demos",
      data(){
        return {}
      },
      mounted(){
        this.drawRadar()
      },
      methods:{
        drawRadar(){
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(document.getElementById('skills'));

          let option = {
            title: {
              text: '技能雷达图',
              color :'white'
            },
            tooltip: {},
            /*legend: {
              data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },*/
            radar: {
              // shape: 'circle',
              name: {
                textStyle: {
                  color: '#fff',
                  backgroundColor: '#ccc',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
              ]
            },
            series: [{
              name: '预算 vs 开销（Budget vs spending）',
              type: 'radar',
              // areaStyle: {normal: {}},
              data : [
                {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
                  name : '预算分配（Allocated Budget）'
                },
                {
                  value : [5000, 14000, 28000, 31000, 42000, 21000],
                  name : '实际开销（Actual Spending）'
                }
              ]
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        }
      }
    }
</script>

<style scoped>
  .part-three{
    width: 100%;
    height:420px;
    border: 15px solid transparent;
    background: #18202d;
  }
</style>
