<template>
  <div class="container">
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
                <img src="../assets/logo.png" alt="">
              </div>
              <p>
                <span class="title">酷安</span>
                <br/>
                <span class="sub-title">发现科技新生活</span>
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

function filterTime(time) {
  const date = new Date(time)
  const Y = date.getFullYear()
  const M = date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1
  const D = date.getDate()
  return `${Y}年${M}月${D}日`
}

export default {
  name: "ArticleView",
  data(){
    return{
      title: '正在加载……',
      author: '正在加载……',
      postTime: '正在加载……',
      article: '正在加载……'
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    axios.get('https://coolapk-api-go.vercel.app/api/feed/detail?id='+this.$route.params.id).then(res=>{
      var result = res.data
      this.title = result.data.message_title
      this.author = result.data.username
      this.postTime = filterTime(toString(result.data.lastupdate))
      var message = result.data.message
      message = message.replace(/[\n\r]/g,'<br/>')
      this.article = message
      console.log(result.data.dyh_name)
    })
  }
}
</script>

<style scoped>

</style>