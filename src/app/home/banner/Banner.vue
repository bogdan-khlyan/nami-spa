<template>
  <div id="banner" class="banner" ref="banner">
    <div class="banner__content">
      <div v-if="windowWidth > 1250" class="banner__btns">
        <drop-btn-group/>
      </div>
      <div class="banner__logo">
        <div>
          <h1>японский <br> ресторан</h1>
          <img v-if="windowWidth > 600" src="@/assets/images/main/banner/namisushi.png" alt="">
          <img v-else src="@/assets/images/logo/logo-banner-mobile.svg" alt="">
        </div>
      </div>
      <div class="banner__image">
        <div style="margin-top: 100px">
          <h2>японская еда</h2>
          <img src="@/assets/images/main/banner/banner-image.png" alt="">
        </div>
      </div>
    </div>
    <div class="banner__bottom">
      <btn-to-menu v-scroll-to="{ el: '#menu', offset: -70 }" />
      <a v-if="windowWidth > 768"
         class="banner__bottom--social"
         href="https://vk.com/namisushidn"
         target="_blank"
         style="margin-left: auto;margin-right: 20px">
        <img src="@/assets/images/icons/vk.svg" alt="">
      </a>
      <a v-if="windowWidth > 768"
         class="banner__bottom--social"
         href="https://instagram.com/namisushidn"
         target="_blank">
        <img src="@/assets/images/icons/ig.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import BtnToMenu from '@/components/utils/BtnToMenu'
import DropBtnGroup from "@/app/home/banner/dropBtn/DropBtnGroup";

export default {
  name: 'banner',
  components: { BtnToMenu, DropBtnGroup },
  computed: {
    isMenu () { return this.$store.state.isMenu },
    windowScroll () { return this.$store.state.windowScroll },
    windowWidth() { return this.$store.state.windowWidth }
  },
  data() {
    return {
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    this.scroll()
  },
  beforeDestroy() { window.removeEventListener('scroll', this.scroll) },
  methods: {
    scroll: function () {
      this.$store.commit('setWindowScroll', pageYOffset) // TODO move to app.vue ?
      if (pageYOffset > this.$refs.banner.offsetHeight - 188) {
        if (!this.isMenu) this.$store.commit('setIsMenu', true)
      } else if (this.isMenu) this.$store.commit('setIsMenu', false)
    }
  }
}
</script>

<style scoped lang="scss">
$pt: 120px;
$dfh: calc(100vh - 240px);

.banner {
  background: url(../../../assets/images/main/banner/banner-bg.png);
  background-size: 100% 100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;

  &__btns {
    width: 100px;
    height: $dfh;
    min-height: calc(768px - 240px);
    max-height: calc(1100px - 240px);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1260px) {
      max-height: calc(940px - 240px);
      height: calc(100vh - 240px);
      min-height: calc(768px - 240px);
    }
    @media screen and (max-width: 1100px) {
      max-height: calc(860px - 240px);
    }
    @media screen and (max-width: 920px) {
      max-height: calc(700px - 240px);
      min-height: calc(700px - 240px);
    }
    @media screen and (max-width: 768px) {
      max-height: inherit;
      min-height: inherit;
      height: auto;
    }

  }

  &__content {
    padding-top: $pt;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

  }

  &__logo {
    display: flex;
    align-items: center;

    width: calc(100% - 100px);
    height: $dfh;
    min-height: calc(768px - 240px);
    max-height: calc(1100px - 240px);

    @media screen and (max-width: 1260px) {
      max-height: calc(940px - 240px);
      height: calc(100vh - 240px);
      min-height: calc(768px - 240px);
    }
    @media screen and (max-width: 1100px) {
      max-height: calc(860px - 240px);
    }
    @media screen and (max-width: 920px) {
      margin-top: -50px;
      max-height: calc(700px - 240px);
      min-height: calc(700px - 240px);
    }
    @media screen and (max-width: 768px) {
      margin-top: 0;
      justify-content: center;
      max-height: inherit;
      min-height: inherit;
      height: auto;
      width: 100%;
    }

    h1 {
      width: max-content;
      margin-top: 0;
      margin-left: 140px;
      margin-bottom: 80px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 53px;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: #F8AC55;

      @media screen and (min-width: 1250px) and (max-height: 820px) {
        margin-top: 80px;
      }
      @media screen and (max-width: 1060px) {
        margin-left: 90px;
        font-size: 42px;
        margin-bottom: 50px;
      }
      @media screen and (max-width: 920px) {
        margin-top: 90px;
        margin-left: 70px;
        font-size: 38px;
      }
      @media screen and (max-width: 820px) {
        margin-left: 60px;
      }
      @media screen and (max-width: 768px) {
        margin: 0 auto;
        font-size: 30px;

        > br { display: none }

      }
      @media screen and (max-width: 420px) {
        font-size: 26px;
      }

    }

    img {
      display: block;
      margin-left: 140px;

      @media screen and (max-width: 1060px) {
        margin-left: 90px;
        width: 280px;
        object-fit: contain;
      }
      @media screen and (max-width: 920px) {
        margin-left: 70px;
        width: 250px;
        object-fit: contain;
      }
      @media screen and (max-width: 920px) {
        margin-left: 60px;
      }
      @media screen and (max-width: 768px) {
        margin-top: 30px;
      }
      @media screen and (max-width: 768px) {
        width: 50vw;
        margin-top: 15px;
        margin-bottom: 35px;
        margin-left: auto;
        margin-right: auto;
        //margin: 0 auto;
      }
    }

  }

  &__image {
    position: relative;

    display: flex;
    align-items: center;

    width: max-content;
    height: $dfh;
    min-height: calc(768px - 240px);
    max-height: calc(1100px - 240px);

    @media screen and (max-width: 1260px) {
      max-height: calc(940px - 240px);
      height: calc(100vh - 240px);
      min-height: calc(768px - 240px);
    }
    @media screen and (max-width: 1100px) {
      max-height: calc(860px - 240px);
    }
    @media screen and (max-width: 920px) {
      max-height: calc(700px - 240px);
      min-height: calc(700px - 240px);
    }
    @media screen and (max-width: 768px) {
      justify-content: center;
      margin-top: 80px;
      max-height: 60vw;
      min-height: inherit;
      height: auto;
      width: 100%;
    }
    @media screen and (max-width: 601px) {
      margin-top: 0;
    }

    h2 {
      margin-bottom: 0;
      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 44px;

      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: #FFFFFF;

      @media screen and (max-width: 1060px) {
        font-size: 36px;
      }
      @media screen and (max-width: 768px) {
        display: none;
      }

    }

    h3 {
      position: absolute;
      top: 50px;
      left: 130px;

      font-family: Kalam, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 95px;
      line-height: 151px;
      text-align: center;
      text-transform: uppercase;

      color: #F4F4F4;

      text-shadow: 15px 12px 37px #000000;

      @media screen and (min-height: 836px) {
        top: 75px;
      }
      @media screen and (min-height: 900px) {
        top: 100px;
      }
      @media screen and (min-height: 936px) {
        top: 120px;
      }
      @media screen and (min-height: 975px) {
        top: 160px;
      }
      @media screen and (min-height: 1050px) {
        top: 180px;
      }

      @media screen and (min-width: 1250px) and (max-height: 820px) {
        font-size: 75px;
      }
      @media screen and (max-width: 1250px) {
        font-size: 90px;
      }
      @media screen and (max-width: 1100px) {
        top: 70px;
        left: 110px;
        font-size: 74px;
      }
      @media screen and (max-width: 920px) {
        top: 70px;
        left: 100px;
        font-size: 65px;
      }
      @media screen and (max-width: 768px) {
        top: -20px;
        left: 340px;
        font-size: 10vw;
      }
      @media screen and (max-width: 650px) {
        left: 320px;
      }
      @media screen and (max-width: 620px) {
        top: -40px;
        left: 310px;
      }
      @media screen and (max-width: 600px) {
        left: 0;
        right: 0;
      }

    }

    img {
      @media screen and (min-width: 1250px) and (max-height: 820px) {
        width: 550px;
        object-fit: contain;
      }
      @media screen and (max-width: 1250px) {
        width: 600px;
        object-fit: contain;
      }
      @media screen and (max-width: 1100px) {
        width: 550px;
        object-fit: contain;
      }
      @media screen and (max-width: 1100px) {
        margin-top: 30px;
        width: 500px;
        object-fit: contain;
      }
      @media screen and (max-width: 920px) {
        width: 450px;
        object-fit: contain;
      }
      @media screen and (max-width: 820px) {
        width: 420px;
        object-fit: contain;
      }
      @media screen and (max-width: 768px) {
        margin-top: -40px;
        margin-left: 180px;
        width: 90vw;
        object-fit: contain;
      }
      @media screen and (max-width: 650px) {
        margin-left: 150px;
      }
      @media screen and (max-width: 600px) {
        margin-left: 0;
        width: 80vw;
      }
      @media screen and (max-width: 420px) {
        margin-top: -30px;
        margin-left: 0;
        width: 85vw;
      }
    }

  }

  &__bottom {
    height: 120px;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;

    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
      justify-content: center;
    }
    @media screen and (max-width: 600px) {
      padding-top: 25px;
    }
    @media screen and (max-width: 500px) {
      padding-top: 16px;
    }

    &--social {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 45px;
      height: 45px;

      border-radius: 50%;

      background: #FFFFFF;
      box-shadow: 9px 5px 37px #000000;

      z-index: 1;
    }

  }

}
</style>
