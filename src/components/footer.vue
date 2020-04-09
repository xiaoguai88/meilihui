<template>
  <div class="wrapper">
   <div class="foot">
       <ul>
           <router-link 
            v-for="(item, index) in footlist" :key="index"
            tag="li"
            :to="item.path"
            active-class='active'
           >
           <i class="iconfont" :class="item.icon"></i>
           <p>{{item.title}}</p>
           </router-link>
       </ul>
   </div>
  </div>
</template>

<script>



export default {
  components: {},
  props: {},
  data() {
    return {
        active: 0,
        footlist:[
            {title:'首页',path:'/shouye',icon:'icon-jiantoushang'},
            // {title:'分类',path:'/fenlei',icon:'icon-leimupinleifenleileibie'},
            {title:'购物袋',path:'/shop',icon:'icon-gouwuche'},
            {title:'个人中心',path:'/mine',icon:'icon-wode'}

        ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.foot{
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.53rem;
    background: #fff;
    border-top:1px solid #8c8c88 ;
    ul{
        display: flex;
        li{
            position: relative;

            flex: 1;
            height: 1.53rem;
            text-align: center;
            line-height: 1.53rem;
            i{
                display: inline-block;
                position: absolute;
                top: -0.18rem;
                left: 50%;
                margin-left: -.51rem;
                width: 1.02rem;
                height: .72rem;
                text-align: center;
            }
            p{
                position: absolute;
                bottom: 0.4rem;
                left: 27%;
                width: 2rem;
                height: 0.72rem;
                text-align: center;
            }
        }
    }
}
.active{
    color: #11b57c;
}
</style>