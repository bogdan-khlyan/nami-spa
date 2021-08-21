<template>
  <div class="container">
    <div class="drop-btn">
      <div class="icon">
        <img :src="icon" alt="">
      </div>
      <button class="learn-more" :style="`width: ${width}px`">
        <span class="circle" aria-hidden="true"></span>
        <span class="button-text" ref="slotSd">
          <slot/>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drop-btn',
  props: {
    icon: {
      type: String
    },
    width: {
      type: String
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Mukta:700');

$bg: #f3f8fa;
$white: #fff;
$black: #282936;

@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65,0,.076,1)) {
  transition: $property $duration $ease;
}

.drop-btn {
  position: relative;
  width: 55px;
  height: 55px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: #191E35;
  border: 1px solid #FFFFFF;

  > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    pointer-events: none;
    width: 45px;
    height: 45px;

    background-color: #FFFFFF;
    border-radius: 50%;
  }

  button {
    display: none;
    position: absolute;
    left: -1px;
    top: -1px;
  }

  &:hover {
    button {
      display: block;
    }
  }


}

* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}

body {
  font-family: 'Mukta', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background: $bg;
}

button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  &.learn-more {
    height: auto;
    .circle {
      border: 1px solid #FFFFFF;
      @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
      position: relative;
      display: block;
      margin: 0;
      width: 55px;
      height: 55px;
      background: $black;
      border-radius: 1.625rem;
      .icon {
        @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: $white;
        &.arrow {
          @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
          left: 0.625rem;
          width: 1.125rem;
          height: 0.125rem;
          background: none;
          &::before {
            position: absolute;
            content: '';
            top: -0.25rem;
            right: 0.0625rem;
            width: 0.625rem;
            height: 0.625rem;
            border-top: 0.125rem solid #fff;
            border-right: 0.125rem solid #fff;
            transform: rotate(45deg);
          }
        }
      }
    }
    .button-text {
      @include transition(all, 0.45s, cubic-bezier(0.65,0,.076,1));
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.55rem 0 055rem 30px;
      margin: 0 0 0 1.85rem;
      text-align: left;
      font-size: 14px;
      line-height: 15px;
      opacity: 1;
      color: transparent;

      > div {
        opacity: 0;
        transition: 100ms;
        margin-top: 2px;
        margin-bottom: 2px;

        > a {
          font-family: Neucha, sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          text-decoration: none;
          letter-spacing: 1px;

          color: #FFFFFF;

          transition: 300ms;
          opacity: 0;
        }

      }
    }
  }
  &:hover {
    .circle {
      width: 100%;
      .icon {
        &.arrow {
          background: $white;
          transform: translate(1rem, 0);
        }
      }
    }
    .button-text {
      color: $white;
      > div {
        opacity: 1;
        > a {
          opacity: 1;
        }
      }
    }
  }
}

@supports (display: grid) {
  body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.625rem;
    grid-template-areas: ". main main ." ". main main .";
  }

  .container {
    grid-area: main;
    align-self: center;
    justify-self: center;
  }
}
















  .phone-drop-btn {
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    background: #1C2344;
    border: 1px solid #FFFFFF;

    width: 55px;
    height: 55px;

    cursor: pointer;

    &.show {
      .phone-drop-btn__drop {
        padding-top: 10px;
        padding-left: 55px;
        padding-right: 20px;
        width: max-content;

        > .phone-drop-btn__drop--content {
          font-size: 14px;
          line-height: 15px;
          opacity: 1;
          color: #FFFFFF;
        }

      }
    }

    &__drop {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 55px;
      height: 55px;
      min-width: 55px;
      min-height: 55px;
      background-color: #1C2344;

      transition: 450ms;

      border-radius: 50px;

      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 15px;

      color: #FFFFFF;

      &--content {
        //transition: all 450ms ease-in-out;
        font-size: 0;
        line-height: 0;
        color: transparent;
        opacity: 0;
        text-align: left;

        > div:first-child {
          margin-bottom: 3px;
        }
      }

    }

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 45px;
      height: 45px;

      border-radius: 50%;

      background: #FFFFFF;
    }

  }
</style>
