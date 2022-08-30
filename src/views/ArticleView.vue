<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 ps-2 pe-2">
        <div class="container img-fluid">
          
        </div>
        <h3>这是标题</h3>
        <p>
          <span style="font-weight: bold">这是作者</span>&nbsp;
          <span>这是时间</span>
        </p>
        <p>这是正文</p>
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
export default {
  name: "ArticleView"
}
</script>

<style scoped>

</style>