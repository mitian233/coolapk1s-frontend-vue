<template>
  <transition name="fade">
    <loading-view v-if="loadingDisplay"/>
  </transition>
  <div class="home container">
    <homeInfo msg="删除 Coolapk 跟踪参数并在不干预共享的情况下提供发布预览。"/>
    <h3>运行状态</h3>
    <p>{{ info }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import homeInfo from "@/components/homeInfo"
import loadingView from "@/components/loading"
import axios from "axios"

export default {
  name: 'HomeView',
  data(){
    return{
      info: '正在加载……',
      loadingDisplay: true
    }
  },
  mounted() {
    axios.get('https://coolapkapi.mikan.ac.cn/status').then(res=>{
      var info = res.data
      if(info.error == null){
        this.info = '正常运行'
      }else {
        this.info = '出现异常'
      }
      this.loadingDisplay = false
    })
  },
  components: {
    loadingView,
    homeInfo
  }
}
</script>
<style>

</style>