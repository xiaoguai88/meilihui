import Vue from 'vue'
import moment from 'moment'


// 定义日期的过滤器
Vue.filter('detailFilter', (data, option = '.') => {
  // console.log(data*1000)//毫秒数
  // console.log(new Date(data*1000).getFullYear() + "/" + (new Date(data*1000).getMonth()+1))
  return moment(data * 1000).format('YYYY' + option + 'MM' + option + 'DD' + option)
})
