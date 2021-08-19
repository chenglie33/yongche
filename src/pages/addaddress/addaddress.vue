<template>
  <view class="addaddress">
    <view class="panel flexBox flex-col">
      <view class="flexBox flex-row formitem flex-middle">
        <view class="iconLeft">
          省市区
        </view>
        <AtInput
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="" 
        />
        <view class="iconright colorArr at-icon at-icon-chevron-right flex-middle flexBox" />
      </view>
      <view class="flexBox flex-row formitem flex-middle bd-none">
        <view class="iconLeft">
          详细地址
        </view>
        <AtInput
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="详细地址" 
        />
        <view class="iconright colorArr  flex-middle flexBox" />
      </view>
    </view>
    <view class="panel flexBox flex-col pac-mt20x">
      <view class="flexBox flex-row formitem flex-middle">
        <view class="iconLeft">
          姓名
        </view>
        <AtInput
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="输入姓名" 
          :value="name"
        />
      </view>
      <view class="flexBox flex-row formitem flex-middle bd-none">
        <view class="iconLeft">
          电话
        </view>
        <AtInput
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="请输入电话" 
          :value="name"
        />
      </view>
    </view>
    <AtButton
      class="pac-mt15x pac-ml14x pac-mr14x"
      type="primary"
    >
      提交
    </AtButton>
  </view>
</template>
<script>
import { AtList, AtListItem, AtButton } from 'taro-ui-vue'
import { AtInput } from 'taro-ui-vue'
export default {
  name:'Addaddress',
  components: {AtButton,AtInput},
  data() {
    return{
      name:''
    }
  }
}
</script>
<style lang="scss">
.addaddress{
  padding: 20px 0;
  background-color: RGBA(242, 245, 251, 1);
  box-sizing: border-box;
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    .at-list{
      &:after{
        border-top: none;
        display: none;
      }
      
    }
    .item-bottom{
      &:after{
        display: none;
      }
    }
    .iconLeft{
      width: 180px;
    }
    .colorArr{
      color: rgba(205, 205, 205,1);
      font-size: 50px;
    }
    .iconright{

    }
    .bd-none{
      border-bottom: none;
    }
  }
}
</style>