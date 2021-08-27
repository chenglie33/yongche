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
import Taro, { Events } from '@tarojs/taro'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction,AtButton } from 'taro-ui-vue'
import {registerWxUserApi} from '@/api/apilist'
import {mapGetters} from 'vuex'
export default {
  components: {AtModal, AtModalHeader, AtModalContent, AtModalAction },
  computed: {
    ...mapGetters(["getWxUserInfo"]),
  },
  data() {
    return {
      isopened: false,
    }
  },
  methods: {
    show(){
      this.isopened = true
      console.log(this.getWxUserInfo)

    },
    register() {
      var userInfo = JSON.parse(Taro.getStorageSync('userInfo'))
      registerWxUserApi({openId: this.$store.state.UserInfo.openId,userType:1,name:userInfo.nickName}).then(()=>{
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