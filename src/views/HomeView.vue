<template>
  <div class="home container">
    <homeInfo msg="删除 Coolapk 跟踪参数并在不干预共享的情况下提供发布预览。"/>
    <h2>运行状态</h2>
    <p>{{ info }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import homeInfo from "@/components/homeInfo";
import axios from "axios";

export default {
  name: 'HomeView',
  data(){
    return{
      info: '正在加载……'
    }
  },
  mounted() {
    axios.get('https://www.coolapk1s.com/status').then(res=>{
      var info = res.data
      console.log(info.error)
      if(info.error == null){
        this.info = '正常运行'
      }else {
        this.info = '出现异常'
      }

    })
  },
  components: {
    homeInfo
  }
}
</script>
<style>

</style>