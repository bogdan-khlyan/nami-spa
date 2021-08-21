<template>
  <div class="temp">
    <div class="temp__item">
      <label>Номер телефона</label>
      <div class="temp__item-content">
        <a href="tel:+380717009791">+38 071 700 97 91</a>
        <a href="tel:+380717009791">+38 071 700 97 91</a>
      </div>
    </div>
    <div class="temp__item">
      <label>Адрес</label>
      <div class="temp__item-content">
        г. Донецк, <br>
        ул. Университетская, 33
      </div>
    </div>
    <div class="temp__item">
      <label>График работы</label>
      <div class="temp__item-content">
        Ежедневно <br>
        с 10:00 до 21:00
      </div>
    </div>
    <div class="temp__item">
      <label>Социальные сети</label>
      <div class="temp__item-content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'temp', // TODO
  components: { },
  data() {
    return {
    }
  },
  mounted() { scroll(0, 0) }
}
</script>

<style scoped lang="scss">
.temp {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 5px;
  padding-bottom: 5px;

  width: 100%;
  min-height: 100px;

  border-radius: 8px;

  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    padding: 20px 40px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 480px) {
    padding: 14px 24px;
  }


  &__item {
    width: max-content;
    text-align: left;
    min-height: 80px;

    @media screen and (max-width: 800px) {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 50%;
      box-sizing: border-box;
    }
    @media screen and (max-width: 480px) {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
      //box-sizing: border-box;
      min-height: auto;

      br { display: none }

    }

    > label {
      position: relative;

      display: block;
      margin-bottom: 12px;

      font-family: Neucha, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 20px;

      letter-spacing: 0.05em;

      color: #0C334A;

      &:before {
        content: '';

        position: absolute;
        left: 0;
        bottom: -5px;

        width: 67px;
        height: 2px;

        border-radius: 2px;
        background-color: #0C334A;
      }

    }

    &-content {
      font-family: PT Sans Narrow, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.03em;

      color: #515151;

      @media screen and (max-width: 480px) { font-size: 15px; }

      > a {
        display: block;

        font-family: PT Sans Narrow, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        text-decoration: none;

        letter-spacing: 0.03em;
        text-transform: uppercase;

        color: #515151;

        @media screen and (max-width: 480px) { font-size: 15px; }
      }

    }

  }

}
</style>
