<template>
  <div class="home">
    <banner/>
    <app-menu id="menu"/>
  </div>
</template>

<script>
import Banner from '@/app/home/banner/Banner'
import AppMenu from '@/app/home/menu/AppMenu'

export default {
  name: 'app-main',
  components: { Banner, AppMenu },
  metaInfo: {
    title: 'NamiSushi | Доставка японской еды в Донецке и Макеевке',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: 'NamiSushi - доставка японской еды в Донецке и Макеевке. Доставка еды - суши, роллов и другой вкусной еды.',
    }, {
      vmid: 'keywords',
      name: 'keywords',
      content: 'доставка еды, доставка еды донецк, доставка суши, суши донецк, доставка роллов, роллы донецк, японская еда',
    }]
  }
}
</script>

<style scoped lang="scss">
.home { width: 100vw; }
</style>

