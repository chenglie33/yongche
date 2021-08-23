<template>
  <view class="flexBox flex-row author flex-middle flex-center">
    <AtModal :is-opened="isopened">
      <AtModalHeader>提示</AtModalHeader>
      <AtModalContent>
        我们希望获取您的手机号，以完善您的信息
      </AtModalContent>
      <AtModalAction>
        <button @tap="isopened=false">
          取消
        </button>
      </AtModalAction>
    </AtModal>
    <view class="wrapc flexBox flex-col flex-middle flex-center">
      <image
        :src="logo"
        class="auImg"
      />

      <AtButton
        class="btnwau"
        type="primary"
        :on-click="getUserinfo"
      >
        授权
      </AtButton>
      <Button
        open-type="getPhoneNumber"
        bindgetphonenumber="getPhoneNumber"
      >
        确定
      </Button>
    </view>
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui-vue'
import { getWxUserInfo } from "@/utils/index.js";
import logo from '@/assets/logo.png'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui-vue'
export default {
  components: {AtButton,AtModal, AtModalHeader, AtModalContent, AtModalAction },
  data() {
    return {
      logo,
      isopened:true
    }
  },
  methods: {
    getPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    },
    getUserinfo(){
      
      getWxUserInfo().then(()=>{
        if(this.$store.state.UserInfo.phone) {
          Taro.navigateBack()
        }
        
      })
    }
  }
  
}
</script>
<style lang="scss">
.author{
  height: 100%;
  .wrapc{
    width: 400px;
    height: 500px;
    margin-top: 100px;
    .auImg{
      width: 148px;
      height: 148px;
    }
    .btnwau{
      width: 348px;
      height: 82px;
      border-radius: 82px;
      margin-top: 82px;
      line-height: 82px;
    }
  }
}
</style>