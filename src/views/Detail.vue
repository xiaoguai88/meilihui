<template>
    <div class="con">
         
        <div class="header">
            <div @click="handleBack">&lt;</div>
            <div v-if="infoList.itemPriceDto">
                <div><span>{{infoList.brandName}}</span></div>
                <div class="price"><span>￥{{infoList.price}}</span></div>
            </div>
            <div>...</div>
        </div>
        <div class="nav" v-title='700'>
            <ul>
                <li>参数</li>
                <li>详情</li>
                <li>品牌</li>
                <li>评论</li>
            </ul>
        </div>
       

         <div class="content">
             <Swiper>
                 <div
                    class="swiper-slide"
                    v-for="(photo,index) in photoList"
                    :key="index" 
                 >
                    <img :src="photo.smallImgUrl" alt="">
                 </div>
             </Swiper>

            <div class="product-base">
                <div class="product-title">
                    <h1>{{infoList.name}}</h1>
                </div>
                <div class="product-price"  v-if="infoList.itemPriceDto">
                    <del>{{infoList.marketPrice}}</del>
                    <strong>￥{{infoList.price}}</strong><span>{{infoList.discount}}</span>
                </div>
            </div>
            <div class="delivery"><strong v-show="infoList.warehouse_name">{{infoList.warehouse_name}}</strong>{{infoList.deliver_date}}</div>
            <div class="other-info-block">
                <section>
                    <div class="other-info-item" style="border-bottom:none">
                        <div class="sec-kill" v-if="infoList.itemPriceDto">
                            <span class="s-title">闪购</span>
                            <span class="s-text">距结束{{countDownList}}</span>
                        </div>
                    </div>
                    <div class="other-info-item"   v-if="infoList.couponScheme.eventCoupon.length" v-show="infoList.couponScheme">
                        <div class="service-labels" style="display:flex">
                            <span class="s-title">促销</span>
                            <span class="summary" > 
                                <span v-if="infoList.couponScheme">{{infoList.couponScheme.eventCoupon[0].couponContent}}</span>
                            </span>
                        </div>
                    </div>
                    <div class="other-info-item" style="border-top:none">
                        <div class="service-labels">
                            <span class="s-title">服务</span>
                            <span class="labels"> 
                                <span 
                                    v-for="(data,index) in infoList.service_labels"
                                    :key="index"
                                >{{data.label_title}}</span>
                            </span>
                        </div>
                    </div>
                    <div class="other-info-item" v-show="infoList.colorGroup.length" v-if="infoList.colorGroup">
                        <div class="size-list">
                            <span class="s-title">颜色</span>
                            <span class="size">
                                <span
                                    v-for="(data,index) in infoList.colorGroup"
                                    :key="index"
                                    :class="activeClass == index?'active':''"
                                    @click="isActive(index)"
                                >{{data.color}}</span>
                            </span>
                        </div>
                    </div>
                     <div class="other-info-item" v-show="infoList.size.length">
                        <div class="size-list">
                            <span class="s-title">尺码</span>
                            <span class="size">
                                <span class="normal" 
                                    v-for="(data,index) in infoList.size"
                                    :key="data.sizeId"
                                     :class="activeClass == index?'active':''"
                                    @click="isActive(index)"
                                >{{data.sizeLabel}}</span>
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            <div class="block-desc" v-show="2">
                <h3 class="block-heading">商品参数</h3>
                <div class="block-info">
                    <ul class="params-list" v-if="infoList.description">
                        <li
                            v-for="(data,index) in infoList.description.attributesList"
                            :key="index"
                        >
                            <label>{{data.name}}</label>
                            <p>{{data.value}}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="block-desc size-table" v-show="infoList.sizeMeasure">
                <h3 class="block-heading">
                    尺码信息
                    <span class="unit">单位：</span>
                    <span class="show-size-pop">尺寸指南</span>    
                </h3>
                <div class="slide_content clear">
                    <div class="name">
                        <ul  v-if="infoList.sizeMeasure">
                            <li 
                                v-for="dataLi in sizeTable[0]"
                                :key="dataLi.product_size"
                            >{{dataLi}}</li>
                        </ul>
                    </div>
                    <div class="size-table">
                        <div class="container" v-if="infoList.sizeMeasure">
                            <ul class="size-item"
                                v-for="(data,index) in infoList.sizeMeasure.sizeTable"
                                :key="index"
                            >
                                <li 
                                    v-for="dataLi in infoList.sizeMeasure.sizeTable[index]"
                                    :key="dataLi.product_size"
                                >{{dataLi}}</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="block-desc clear">
                <h3 class="block-heading">商品详情</h3>
                <div class="block-info"  style=" border-bottom: solid 1px #e5e5e5;">
                    <div class="images" v-if="infoList.description">
                        <div class="pic" 
                            v-for="(data,index) in infoList.description.product_img1"
                            :key="index"
                        >
                            <img :src="data.bigImgUrl" alt="">
                        </div>
                        <p class="tip">{{infoList.description.message}}</p>
                    </div>
                </div>
            </div>

            <div class="block-desc" v-show="infoList.description.maintenanceList.length" v-if="infoList.description">
                <h3 class="block-heading">洗护与保养</h3>
                <div class="block-info">
                    <ul class="maintenance" v-if="infoList.description">
                        <li
                            v-for="(data,index) in infoList.description.maintenanceList"
                            :key="index"
                        >
                            {{data}}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="block-desc">
                <h3 class="block-heading">包装清单</h3>
                <div class="block-info">
                    <div class="package">
                        <img :src="infoList.packageURL" alt="">
                        <p class="tip">{{infoList.packageText}}</p>
                    </div>
                </div>
            </div>

             <div class="block-desc">
                <h3 class="block-heading">
                    <strong>{{infoList.brandName}}</strong> 
                    <a href=""><span class="pinpai">品牌主页&gt;</span></a>
                </h3>
                <div class="block-info showmore">
                    <div class="show-more">
                            <img :src="infoList.brandImg" alt="">
                        <div v-if="isShow">
                            <p>{{infoList.brand_story}}</p>
                        </div>
                    </div>
                   <div class="more" @click="isShow=!isShow">
                       more
                   </div>
                </div>
            </div>

            <div class="block-desc">
                <div class="block-info">
                    <div class="disable" v-if="infoList.postSellUrls">
                        <img :src="infoList.postSellUrls[0]" alt="">
                    </div>
                </div>
            </div>

            <div class="block-desc" v-if="infoList.productReviews">
                <h3 class="block-heading" >用户评论
                    <span class="review-total" >({{infoList.productReviews.totalCount}})</span>
                    <span class="viewall">查看全部&gt;</span>
                </h3>
                <div class="block-info comment" >
                    <div class="review" 
                        v-for="(data,index) in commentList"
                        :key="index"
                    >
                        <div class="review-user">
                            <span class="user-name">{{data.userName}}</span><span v-if="data.isVip" class="vip">vip</span><span class="score">{{data.score}}星</span>
                        </div>
                        <div class="review-content">
                            {{data.review}}
                        </div>
                        <div class="data-product">
                            <span>{{data.reviewDate | detailFilter}}</span>
                            <span>{{data.color}}</span>
                            <span>{{data.size}}</span>
                        </div>
                    </div>
                </div>
            </div>  

            <div class="block-desc">
                <div class="block-info">
                    <h3 class="block-heading">大家都在看</h3>
                    <div class="product-container">
                        <div class="product-item" 
                            v-for="(data,index) in viewList"
                            :key="index"
                        >
                            <div class="product-img">
                                <img :src="data.imgUrl" alt="">
                            </div>
                            <div class="product-info">
                                <p class="product-brand">{{data.brand_name}}</p>
                                <div class="product-name">{{data.product_name}}</div>
                            </div>
                            <div class="product-price-box">
                                <div class="price-all">
                                    <span class="product-price"> {{data.price}} </span>
                                    <del>{{data.market_price}}</del> 
                                </div> 
                                <div class="discount">{{data.discount}}折</div> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="car-bottom-car">
            <div class="left-area">购物袋</div>
            <div class="submit-btn">
                <div class="car" @click="handleCart">加入购物车</div>
                <div class="buy"  @click="handleBuy">立即购买</div>
            </div>
        </div>
    </div>
</template> 

<script>
// 引入Swiper组件
import Swiper from '@/components/swiperDetail'
import axios from 'axios'
import Swipe from 'swiper'
import moment from 'moment'

export default {
    data(){
        return {
            photoList:[],
            infoList:[],
            comments:[],
            viewList:[],
            isShow:false,
            categoryId:'2121005100000003880',
            productId:'2041204199000410193',
            activeClass:1,//1为默认选择第二个
            countDownList: '00天00时00分00秒',
            actEndTime: '2020-05-16 00:00:00'
        }
    },
    components:{
        Swiper
    },
    computed: {
        sizeTable(){
            const newSizeTable = this.infoList.sizeMeasure.sizeTable.splice(0,1)
            // console.log(newSizeTable)
            return newSizeTable
        },
        commentList(){
            if(this.infoList.productReviews.totalCount>=1){
                this.comments = this.infoList.productReviews.reviewsList
            }
            return this.comments
        }
    },
    methods: {
        handleBuy(){
            window.removeEventListener('scroll', this.handleScroll)
            this.$router.push('/cart')
        },
        handleBack(){
            this.$router.back()
        },
      isActive(index){
          this.activeClass = index;
      },
      　timeFormat(param) {
　　　　　　return param < 10 ? '0' + param : param;
　　　　},
        countDown(it){
            var interval = setInterval(()=>{
                //获取当前时间，同时得到活动结束时间
                let newTime = new Date().getTime();
                //对结束时间进行处理渲染到页面
                let endTime = new Date(this.actEndTime).getTime();
                let obj = null;
                //如果活动未结束，对时间进行处理
                if(endTime - newTime > 0){
                    let time = (endTime - newTime) / 1000;
                    //获取天，时，分，秒
                    let day = parseInt(time / (60 * 60 * 24));
                    let hou = parseInt(time % (60 * 60 * 24) / 3600);
                    let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
                    let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
                    obj = {
                        day: this.timeFormat(day),
                        hou: this.timeFormat(hou),
                        min: this.timeFormat(min),
                        sec: this.timeFormat(sec),
                    };
                }else{//活动已结束，全部设置为'00'
                    obj = {
                        day: '00',
                        hou: '00',
                        min: '00',
                        sec: '00',
                    };
                    clearInterval(interval);
                }
                this.countDownList = obj.day + '天' + obj.hou + '时' + obj.min + '分' + obj.sec + '秒';
            },1000);
        },
        handleCart(){
            this.$router.push('/cart')
        },
    },
   
    created() {
        this.countDown();

    // console.log(this.$route.params.id)
    // console.log(this.$route.query.cateid)
        //请求轮播图数据
        axios.get(`http://www.mei.com/appapi/product/detail/v3?categoryId=${this.$route.query.cateid}&productId=${this.$route.params.id}&platform_code=H5&timestamp=1586579774968&summary=a0a45d673609e277501982f0cb822311`)
        .then(res=>{
            // console.log(res.data.infos) 
            this.infoList = res.data.infos
            this.photoList = res.data.infos.images
            this.$nextTick(()=>{
                new Swipe('.swiper-container',{
                    pagination: {
                       el: '.swiper-pagination'
                    },
                    loop:true,
                    autoplay:{
                        delay:2000
                    }
                })
            })
        })

        //请求大家都在看数据
        axios.get(`http://www.mei.com/appapi/product/hot/v3?categoryId=${this.$route.query.cateid}&productId=${this.$route.params.id}&platform_code=H5`)
        .then(res=>{
            // console.log(res)
            this.viewList = res.data.categoryList
        })
       
    },
   
}
</script>

<style lang="scss" scoped>
h1,h2,h3,h4,h5{font-weight: 900;}
.nav{
    position: fixed;
    top: 44px;
    width: 100%;
    background: #fff;
    z-index: 120;
    height: 34px;
    color: #999;
    ul{
        margin: 0 20px;
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
       font-size: 13px;
    }
}
  .header{
        position: fixed; 
        top: 0;
        width: 100%;
        height:44px;z-index:120;background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            font-weight: 900;
            padding: 0 10px;
             background: #fff;
            .price{
                color: #dd2828;
                text-align: center;
            }
            span{
                padding: 3px;
                font-size: 14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-transform: uppercase;
                text-align: center;
            }
        }

    .summary{
        span{
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #dd2828;
            font-weight: 700;
            margin-left: 16px;
        }
        
    }
    .content{
        padding: 0 20px 25px;
       .swiper-slide{
           height: 446px;
           img{
               display: block;
                width: 100%;
                height: 100%;
           }
           
        } 
    }
    .product-base{
        width: 100%;
        padding-bottom: 12px;
        .product-title{
            padding-bottom: 5px;
            h1{
                height: 30px;
                font-size: 20px;
                padding:5px 0;
                font-weight: normal;
                margin: 0;
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .product-price{
            del{
                 margin-bottom: 3px;
                line-height: 12px;
                color: #ccc;
                font-size: 12px;
                margin: 0;
                display: block;
            }
            strong{
                display: inline-block;
                margin-right: 5px;
                color: #dd2828;
                font-size: 18px;
                
            }
           span{
               border:solid 1px #000;
               height: 18px;
               width: 35px;font-size: 12px;
                display: inline-block;
               padding: 2px;
           }
        }
    }
    .delivery{
        height: 16px;
        padding-bottom: 30px;
        font-size: 12px;
    }
    .other-info-block{
        padding-bottom: 5px;
        section{
        
            .other-info-item{
                    border-bottom: solid 1px #eee;
                    border-top: solid 1px #eee;
                .size-list{
                    display: flex;
                }
                .sec-kill{
                    padding: 20px 0;
                    font-size: 16px;
                    .s-text{
                        font-weight: 900;
                        color:#000;
                        margin-left: 20px;
                    }
                }

                .s-title{
                   color:#666;
                   font-size: 16px; 
                }
                .service-labels{
                    padding: 16px 0 13px;
                    .labels{
                        span{
                            font-size: 12px;
                            height: 12px;
                            display: inline-block;
                            line-height: 12px;
                            border-right:solid 1px #000;
                            padding: 0 10px;
                            color: #666;
                        }
                    }
                }
                .size-list{
                    padding: 30px 0 15px;
                    .size{
                        display: inline-block;
                        padding-left: 16px;
                        span{
                            display: inline-block;
                            padding: 0 7px;
                            height: 28px;
                            background-color: #f5f5f5;
                            font-size: 12px;
                            line-height: 28px;
                            color: #000;
                            text-align: center;
                            margin: 0 15px 15px 0;
                            min-width: 20px;
                        }
                        .normal{
                            color: #000;
                        }
                        .soldout{
                            color:#ccc
                        }
                        .active{
                            color: #fff;
                            background: #000;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
    .block-desc{
        position: relative;
        .block-heading{
            padding: 25px 0 35px;
            height: 24px;
            font-size: 18px;
            margin: 0;
            .unit{
                color: #999;
                font-size: 12px;
                font-weight: normal;
                margin-left: 5px;
            }
            .show-size-pop{
                float: right;
                margin-top: 2.5px;
                padding-right: 10px;
                color: #666;
                font-size: 14px;
                font-weight: 400;
            }
            
        }
        ul,li{
            list-style: none;
        }
        .block-info{
             padding-bottom: 20px;
            .params-list{
                padding-bottom: 15px; 
                margin: 0;
                padding-left: 0; 
                li{
                    display: flex;
                    align-items: center;
                    padding-bottom: 15px;   
                    font-size: 14px;
                    label{
                        display: inline-block;
                        width: 110px;
                        color: #999;   
                    }
                    p{
                        margin: 0;
                        color: #000;
                        width: 230px;
                    }
                } 
            }

        }
    }
    .block-desc::after{
        content: "";
        width: 100%;
        height: 1px;
        overflow: hidden;
        background-color: #e5e5e5;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .slide_content{
        position: relative;
        margin-top: 15px;
        .name{
            width: 100px;
            float: left;
            z-index: 100;
            position: relative;
            overflow: hidden;
            ul{
                box-shadow: 1.5px 0 5px 1.5px hsla(0,0%,93%,.8);
                width: 90px;
                padding: 0;
                li:nth-child(odd){
                    background: #f9f9f9;
                }
                li{
                    height: 30px;
                    width: 90px;
                    line-height:30px;
                    font-size: 12px;
                    padding-left: 15px;
                    background: #fff;
                    box-sizing: border-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                 }
            }
        }
        .size-table{
            z-index: 1;
            position: absolute;
            left: 90px;
            width: 263px;
            overflow: auto;
            .size-item{
                padding: 0;
            }
            .container{
                height: auto;
                position: relative;
                display: flex;
                 li:nth-child(odd){
                    background: #f9f9f9;
                }
                li{
                    min-width: 85px;
                    padding:0 5px;
                    font-size: 12px;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    white-space: nowrap;
                    display: block;  
                }
            }
        }
    }
    .tip{
        font-size: 12px;
        color: #000;
    }

    .clear:after{content:""; display:block; clear:both; height:0; visibility:hidden;}
    .maintenance{
        color: #666;
        font-size: 12px;
        padding: 0;
        margin: 0;
        li{

            list-style-position: inside;
            list-style-type: disc;
        }
    }
    a{text-decoration:none; font-size:12px; color:#333;}
    .car-bottom-car{
        position: fixed;
        background: #fff;
        z-index: 100;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        border-top: solid 1px #e5e5e5;
        .left-area{
            width: 100px;
            height: 48px;
            line-height: 48px;
            text-align: center;
        }
        .submit-btn{
            font-weight: 900;
            width: 260px;
            height: 48px;
            font-size: 16px;
            display: flex;
            div{
               flex: 1;
               line-height: 48px;
                text-align: center;
                
            }
            .car{
                border-left: #e5e5e5 solid 1px;
                border-right: #e5e5e5 solid 1px;
            }
            .buy{
                color: #dd2828;
            }
        }
    }
    .images{
        width: 100%;
        .pic{
            width: 100%;
            img{
                width: 100%;
                height: 447px;
                margin-bottom: 10px;
            }
        }
    }
    .package{
        img{
            width: 100%;
            height: 215px;
            margin-bottom: 20px;
        }
       
    }
    .disable{
        img{
            width: 100%;
            height: 204px;
            margin-left: -20px;
        }
    }
    .show-more{
        img{
            width: 100%;
            height: 190px;
            margin-bottom: 10px;
        }
        p{
            margin: 0;
            line-height: 20px;
            font-size: 14px;
            color: #000;
        }
       
    }
    .showmore{
        position: relative;
         .more{
            position: absolute;
            z-index: 30;
            top: 158px;
            color: #ed1313;
            font-size: 25px;
            text-align: center;
            width: 100%;
        }
    }
    .product-container{
        padding-bottom: 25px;
        display: flex;
        flex-wrap: wrap;
        .product-item{
            width: 45%;
            margin-bottom: 15px;
            .product-img{
                width: 100%;
                height: 220px;
                margin-bottom: 5px;
                img{
                    width: 100%;
                }
            }
            .product-info{
                padding-bottom: 2px;
                p,div{
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-bottom: 2px;
                }
                .product-brand{
                    height: 14px;
                    line-height: 14px;
                    text-transform: uppercase;
                    font-weight: 900;
                    font-size: 14px;
                }
                .product-name{
                    padding: 1px 0;
                    line-height: 12px;
                    height: 12px;
                    font-size: 12px;
                }
            }
            .product-price-box{
                display: flex;
                justify-content: space-between;
                .price-all{
                    display: flex;
                }
                del{
                    color: #ccc;
                    font-size: 10px;
                    line-height: 12px;
                    vertical-align: top;
                }
                .product-price{
                    color: #dd2828;
                    font-size: 12px;
                    font-weight: 700;
                     line-height: 12px;
                    vertical-align: top;
                    margin-right: 4px;
                }
                .discount{
                    color: #666;
                    font-size: 10px;
                }
            }
        }
        .product-item:nth-child(odd){
            margin-right: 15px;
        }
    }
    .pinpai{
        float: right;
        color: #999;
        font-size: 13px;
    }
    .review{
        box-shadow: 0 1px 0 0 #e5e5e5;
        padding-bottom: 20px;
        border-bottom:1px solid #e5e5e5;
        margin-bottom: 20px;
    }
    .review-user{
        height: 13px;
        font-size: 12px;
        .vip{
            display: inline-block;
            margin-left: 5px;
            width: 22px;
            height: 12px;
            text-align: center;
            background: rgb(77, 75, 75);
            color: rgb(230, 126, 28);
        }
        .score{
            float:right;
        }
    }
    .review-content{
        height: 20px;
        margin-top: 15px;
        font-size: 14px;
        line-height: 20px;
    }
    .data-product{
        margin-top: 15px;
        height: 11px;
        color: #999;
        font-size: 10px;
    }
    .viewall{
        float: right;
        padding-right: 10px;
        color: #999;
        font-size: 13px;
        font-weight: 600;
    }

</style>