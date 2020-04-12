<template>
    <div class="swiper-container" :class="cName">
        <div class="swiper-wrapper" >
            <slot></slot>
        </div>
        <div class="swiper-pagination" ></div>
    </div>
</template>

<script>
// 引入swiper的css样式
import 'swiper/css/swiper.min.css'
export default {
  props: ['cName']
}
</script>

<style lang="scss" scoped>
.swiper-pagination {
    bottom: 0px;
    left: 0;
    width: 100%;
    --swiper-theme-color: #060707;
}
</style>
