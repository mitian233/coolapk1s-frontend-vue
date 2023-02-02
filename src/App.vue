<template>
  <div class="container mt-3">
    <h2>CoolApk 1s Frontend</h2>
    <p>去你大爷的酷安跟踪链接</p>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
  </div>
  <router-view/>
</template>

<script>

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
