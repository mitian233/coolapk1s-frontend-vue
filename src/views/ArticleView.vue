<template>
  <transition name="fade">
    <loading-view v-if="loadingDisplay"/>
  </transition>
  <div class="container" v-if="!loadingDisplay">
    <div class="row">
      <div class="col-md-8 ps-2 pe-2">
        <div class="container img-fluid">
        </div>
        <h3>{{ title }}</h3>
        <p>
          <span style="font-weight: bold">{{ author }}</span>&nbsp;
          <span>{{ postTime }}</span>
        </p>
        <p v-html="article"></p>
        <p>文章ID:{{ $route.params.id }}</p>
      </div>
      <div class="col-md-4 pe-2 ps-2">
        <div id="sidebar">
          <div class="download-group">
            <div class="sidebar-logo-group">
              <div class="sidebar-logo-item">
                <img :src="userAvatar" alt="">
              </div>
              <p>
                <span class="title">{{ author }}</span>
                <br/>
                <span class="sub-title">{{ postTime }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import loadingView from "@/components/loading.vue"
function formatDate(time) {
  const date = new Date(time)
  const YY = date.getFullYear()
  const MM = date.getMonth() + 1 < 10 ?'0'+(date.getMonth()+1) : date.getMonth()+1
  const DD = date.getDate() < 10 ? '0' + (date.getDate()): date.getDate()
  const hh = date.getHours() < 10 ? '0' + (date.getHours()): date.getHours()
  const mm = date.getMinutes() < 10 ? '0' + (date.getMinutes()): date.getMinutes()
  const ss = date.getSeconds() < 10 ? '0' + (date.getSeconds()): date.getSeconds()
  return `${YY}年${MM}月${DD}日 ${hh}:${mm}:${ss}`
}

export default {
  name: "ArticleView",
  data(){
    return{
      loadingDisplay: true,
      title: '正在加载……',
      author: '正在加载……',
      postTime: '正在加载……',
      article: '正在加载……',
      userAvatar: '../assets/logo.png'
    }
  },
  components: {
    loadingView
  },
  methods: {
    replaceN: function (picArr,message){
      let picNumber = 1
      for(var i = 0; i<picArr.length; i++){
        let picAddress = picArr[i].replace('http','https')
        message = message.replace('<img/>','<br/><img style="width: 100%" class="lazyload" src="'+'https://coolapkapi.mikan.ac.cn/?coolapkpic='+picAddress+'"/><br/>')
        picNumber++
      }
      return message
    },
  },
  created() {
    console.log(this.$route.params.id)
    axios.get('https://coolapkapi.mikan.ac.cn/feed/id/'+this.$route.params.id,).then(res=>{
      let result = res.data
      this.title = result.data.message_title
      this.author = result.data.username
      this.postTime = formatDate(result.data.lastupdate)
      let message = result.data.message
      let picArr = result.data.picArr
      this.userAvatar = 'https://coolapkapi.mikan.ac.cn/?coolapkpic='+result.data.userAvatar
      //message = message.replace(/[\n\r]/g,'<br/>')
      message = message.replace(/\r\n/g,'<br/>')
      message = message.replace(/\n/g,'<img/>')
      message = this.replaceN(picArr,message)
      this.loadingDisplay = false
      this.article = message
    })
  }
}
</script>

<style scoped>

</style>