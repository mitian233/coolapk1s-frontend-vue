<template>
  <div class="home container">
    <homeInfo msg="删除 Coolapk 跟踪参数并在不干预共享的情况下提供发布预览。"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import homeInfo from "@/components/homeInfo";

export default {
  name: 'HomeView',
  components: {
    homeInfo
  }
}
</script>
<style>

</style>