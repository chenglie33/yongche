<template>
  <view class="person">
    <view class="header flexBox flex-col flex-middle flex-center">
      <view class="wrapheader flexBox flex-col flex-middle flex-center">
        <view
          class="touxiang"
          @tap="linktos('../persondetail/persondetail')"
        >
          <image :src="getWxUserInfo.avatarUrl" />
        </view>
        <view
          class="username"
        >
          {{ getUserInfo.userName ? (getUserInfo.userType == 3 ? (getUserInfo.userName + '(前往注册)'): getUserInfo.userName) : (getWxUserInfo.nickName+ '(前往注册)') }}
        </view>
      </view>
    </view>
    <view class="pac-mt24x contentWthite">
      <AtList>
        <AtListItem
          title="我的订单"
          arrow="right"
          :thumb="wodedingdan"
          @tap.native="linkto('../dingdan/dingdan')"
        />
        <AtListItem
          title="常用地址"
          arrow="right"
          :thumb="changyongdizhi"
          @tap.native="linkto('../address/address')"
        />
        <AtListItem
          title="留言及建议"
          arrow="right"
          :thumb="liuyanjianyi"
          @tap.native="linkto('../suggestion/suggestion')"
        />
      </AtList>
    </view>
  </view>
</template>

<script>
import wodedingdan from '../../assets/wodedingdan@2x.png'
import changyongdizhi from '../../assets/changyongdizhi@2x.png'
import liuyanjianyi from '../../assets/liuyanjianyi@2x.png'
import { AtList, AtListItem } from 'taro-ui-vue'
import Taro from '@tarojs/taro'
import {mapGetters} from 'vuex'
import {getUserProfile} from '@/utils/index.js'
export default {
  name: 'Person',
  components: {
   AtList, AtListItem
  },
  data() {
    return {
     wodedingdan,
     changyongdizhi,
     liuyanjianyi,
     avatarUrl: '',
     nickName:  '',
    }
  },
   computed: {
    ...mapGetters(["getWxUserInfo",'getUserInfo']),
  },

  mounted() {
    if (!this.getUserInfo.userName && !this.getWxUserInfo.nickName) {
        getUserProfile()
      }
  },
  methods:{
    todetail() {
      console.log(11)
    },
    linktos(path){
      if (!this.getUserInfo.userName && !this.getWxUserInfo.nickName) {
        getUserProfile()
      } else {
        Taro.navigateTo({
          url: path
        })
      }
      
        
      },
      linkto(path){
        Taro.navigateTo({
          url: path
        })
      }
  }
}
</script>

<style lang='scss'>
.person{
  background: RGBA(242, 245, 251, 1);
  .header{
    height: 350px;
    background: #fff;
    .wrapheader{
      width:auto;
      height: 190px;
      .touxiang{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: rgb(214, 228, 239);
        image{
          width: 120px;
          height: 120px;
        }
      }
      .username{
        font-size: 28px;
        margin-top: 18px;
      }
    }
  }
  .contentWthite{
    background-color: #fff;
  }
}
</style>>


