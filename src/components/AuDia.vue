<template>
  <AtModal :is-opened="isopened">
    <AtModalHeader>提示</AtModalHeader>
    <AtModalContent>
      是否注册成为我们的用户？
    </AtModalContent>
    <AtModalAction>
      <button @tap="isopened=false">
        取消
      </button>
      <button @tap="register">
        注册
      </button>
    </AtModalAction>
  </AtModal>
</template>
<script>
import { AtModal, AtModalHeader, AtModalContent, AtModalAction,AtButton } from 'taro-ui-vue'
import {registerWxUserApi} from '@/api/apilist'
export default {
  components: {AtModal, AtModalHeader, AtModalContent, AtModalAction },
  data() {
    return {
      isopened: false,
    }
  },
  methods: {
    show(){
      this.isopened = true
      console.log(this.$store.state.UserInfo)

    },
    register() {
      registerWxUserApi({openId: this.$store.state.UserInfo.openId,userType:1,name:this.$store.state.wxUserInfo.nickName}).then(()=>{
        this.isopened = false
      })
    }
  }
}
</script>
<style lang="scss">
.controls{
  
}
</style>