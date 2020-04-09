<template>
  <div id="app">
    
    <router-view/>
    <footnav></footnav>
  </div>
</template>


<script>
import footnav from './components/footer'
export default {
    components:{
      footnav
    }
}
</script>
<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
}
</style>
