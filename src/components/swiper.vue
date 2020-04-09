<template>
  <div class="wrapper">
      <div class="swiper-container" :class="cname">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css"

export default {
  components: {},
  props: ['cname'],
  data() {
    return {
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
.swiper-container {
    width: 2100%;
    height: 7.2rem;
}  
</style>