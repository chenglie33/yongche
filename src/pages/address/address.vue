<template>
  <view class="address">
    <view class="panel flexBox flex-col">
      <view class="header flexBox flex-row flex-middle">
        <view>1</view>
        <view class="flex-1">
          <view class="fR" />
        </view>
      </view>
      <view class="content">
        123213213123
      </view>
      <view class="flexBox flex-row footer flex-middle">
        <view class="readior flexBox flex-middle">
          <image
            :src="morenCheck"
            class="radioImg pac-mr12x"
            @tap="handleClick(11)"
          />
          设为默认地址
        </view>
        <view class="flex-1 ">
          <view class="fR">
            <AtButton

              type="secondary"
              size="small"
            >
              删除
            </AtButton>
          </view>
        </view>
      </view>
    </view>
    <AtButton
      class="pac-mt15x pac-ml14x pac-mr14x"
      type="primary"
    >
      新增地址
    </AtButton>
  </view>
</template>
<script>
import morenCheck from '../../assets/moren@2x.png'
import moren from '../../assets/moren_g@2x.png'
import { AtButton } from 'taro-ui-vue'
export default {
  name: 'Address',
  components: {AtButton},
  data() {
    return {
      morenCheck,
      moren,
      checkedList: [],
      checkboxOption: [{
        value: 'list1',
        label: '默认地址'
      }]
    }
  },
  methods:{
    handleClick(v){
      console.log(v,22)
    }
  }
}
</script>
<style lang="scss">
  .address{
  padding: 20px 0;
  background-color: RGBA(242, 245, 251, 1);
  box-sizing: border-box;
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    .header{
      border-bottom: 1px solid rgb(214, 228, 239);
      color: rgba(153, 153, 153, 1);
      height: 90px;
    }
    .content{
        border-bottom: 1px solid rgb(214, 228, 239);
        padding: 20px 0;
    }
    .at-checkbox{
      &::before{
        display: none;
      }
    }
  }
  .readior{
    font-size: 28px;
  }
  .radioImg{
    width: 40px;
    height: 40px;
  }
  .footer{
    height: 93px;
  }
  }
</style>