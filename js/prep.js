var myChart = echarts.init(document.getElementById('main'));

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  decodeURIComponent(r[2]);
    else
        return null;
}
$.ajax({
    url: 'mock/echart.json',
    type: 'get',
    dataType: "json",
    data: {
        param1: GetQueryString('keyword')
    },
    success: function(data) {
        console.log(data)
var option = {
     title:{
     	text:''
     },
     tooltip:{
     	trigger:'axis'
     },
     legend:{
      data:['1','2','3','4','5']
     },
    
     grid:{
     	left:'3%',
     	right:'4%',
     	bottom:'3%',
     	containLabel:true
     },
     xAxis:
        {
         type:'category',
         boundaryGap:false,
         data:[11,12,13,14,15]
        }
     ,
     yAxis:
           {
              type:'value'
           } ,
     series: data.likst

};
myChart.setOption(option);
    },
    error:function(data) {
        console.log(data)
    }
});






