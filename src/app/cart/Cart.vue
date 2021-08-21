<template>
  <div class="cart-wrapper">
    <el-drawer
        :visible="isShowCart"
        @close="close"
        :with-header="false">
      <div class="content">
        <mobile-header v-if="windowWidth < 640"/>
        <perfect-scrollbar :options="{ wheelPropagation: false }" ref="scroll">
          <transition name="fade" mode="out-in">
            <index v-show="mode === 'INDEX'" @changeMode="changeMode" />
          </transition>
          <transition name="fade" mode="out-in">
            <order v-if="mode === 'ORDER'" @changeMode="changeMode" />
          </transition>
        </perfect-scrollbar>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Index from '@/app/cart/components/Index'
import Order from '@/app/cart/components/Order'
import MobileHeader from '@/app/cart/components/common/MolileHeader'

export default {
  name: 'cart',
  components: { Index, Order, MobileHeader },
  computed: {
    isShowCart() { return this.$store.state.isShowCart },
    windowWidth () { return this.$store.state.windowWidth }
  },
  watch: {
    isShowCart () {
      this.$nextTick(() => {
        this.$nextTick(() => this.scrollTop())
      })
      // if (val) document.body.style.overflowY = 'hidden'
      // else document.body.style.overflowY = 'scroll'
    }
  },
  data() {
    return {
      mode: 'INDEX'
    }
  },
  methods: {
    scrollTop: function () {
      this.$refs.scroll.$el.scrollTop = 0
    },
    changeMode: function (mode) {
      this.mode = mode
      this.$nextTick(() => this.scrollTop())
    },
    close: function () {
      if (this.mode !== 'INDEX') this.changeMode('INDEX')
      this.$store.commit('hideCart')
    },
  }
}
</script>

<style scoped lang="scss">
.cart-wrapper .content {
  height: 100vh;
  background: #D0C0B4;
}
</style>

<style lang="scss">
.cart-wrapper .content .ps {
  height: 100vh;
}
.cart-wrapper .el-drawer {
  width: 600px!important;

  @media screen and (max-width: 640px) {
    width: 100% !important;
  }

}
</style>
