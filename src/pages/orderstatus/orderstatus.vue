<template>
  <view class="flexBox flex-col flex-middle">
    <view class="wraporderstatus flexBox flex-col flex-middle flex-center">
      <image
        :src="success"
        class="imgo pac-mb20x"
      />
      下单成功
      <AtButton
        type="primary"
        :on-click="hoback"
        class="pac-mt20x"
      >
        返回首页
      </AtButton>
    </view>
  </view>
</template>
<script>
import { AtInput, AtButton,AtToast } from "taro-ui-vue";
import Taro, { Events } from "@tarojs/taro";
import success from '@/assets/success.png'
export default {
  components: {AtButton},
  data() {
    return {
      success
    }
  },
  methods:{
    hoback() {
Taro.navigateBack({
   delta: 1
})
    }
  }
}
</script>
<style lang="scss">
.wraporderstatus{
  height: 464px;
  width: 100%;
  background: #fff;
  .imgo{
    width: 80px;
    height: 80px;
  }
}
</style>