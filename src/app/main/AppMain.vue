<template>
  <div class="main">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from '@/app/main/Banner'
import AppMenu from '@/app/main/AppMenu/AppMenu'

export default {
  name: 'app-main',
  components: { Banner, AppMenu }
}
</script>

<style scoped lang="scss">
.main { width: 100vw; }
</style>

