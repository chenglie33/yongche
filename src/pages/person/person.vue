<template>
  <view class="person">
    <view class="header flexBox flex-col flex-middle flex-center">
      <view class="wrapheader flexBox flex-col flex-middle flex-center">
        <view class="touxiang" />
        <view class="username">
          aaa
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
export default {
  name: 'Person',
  components: {
   AtList, AtListItem
  },
  data() {
    return {
     wodedingdan,
     changyongdizhi,
     liuyanjianyi
    }
  },
  methods:{
      linkto(path){
        console.log(22)
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


