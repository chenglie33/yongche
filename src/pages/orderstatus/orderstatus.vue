<template>
  <view class="flexBox flex-col flex-middle">
    <view class="wraporderstatus flexBox flex-col flex-middle flex-center">
      <image
        :src="icons"
        class="imgo pac-mb20x"
      />
      {{ isfial?"下单失败":'下单成功' }}
     
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
import fail from '@/assets/fail.png'
export default {
  components: {AtButton},
  data() {
    return {
      success,
      fail,
      icons: success,
      isfial: false
    }
  },
  mounted() {
    if(Taro.getCurrentInstance().router.params.shibai) {
      this.isfial = true
      this.icons = this.fail
    } else{
      this.isfial = false
      this.icons = this.success
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