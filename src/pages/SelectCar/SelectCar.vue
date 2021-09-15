<template>
  <view class="flex-col flexBox pac-p12x selectCar">
    <view class="flexBox flex-row items pac-p12x flex-middle pac-mb12x">
      <image class="carimg" />
      <view class="flex-1 flexBox flex-col ">
        <view class="flex-1">
          大巴
        </view>
        <view class="carseat flex-1">
          车辆座位人数
        </view>
      </view>
      <view>
        <AtInputNumber
          :min="0"
          :value="daba"
          :on-change="handlerdaba"
        />
      </view>
    </view>

    <view class="flexBox flex-row items pac-p12x flex-middle pac-mb12x">
      <image class="carimg" />
      <view class="flex-1 flexBox flex-col ">
        <view class="flex-1">
          中巴
        </view>
        <view class="carseat flex-1">
          车辆座位人数
        </view>
      </view>
      <view>
        <AtInputNumber
          :min="0"
          :value="zhongba"
          :on-change="handlerzhongba"
        />
      </view>
    </view>

    <view class="flexBox flex-row items pac-p12x flex-middle pac-mb12x">
      <image class="carimg" />
      <view class="flex-1 flexBox flex-col ">
        <view class="flex-1">
          商务
        </view>
        <view class="carseat flex-1">
          车辆座位人数
        </view>
      </view>
      <view>
        <AtInputNumber
          :min="0"
          :value="shangwu"
          :on-change="handlershangwu"
        />
      </view>
    </view>

    <view class="flexBox flex-row items pac-p12x flex-middle pac-mb12x">
      <image class="carimg" />
      <view class="flex-1 flexBox flex-col ">
        <view class="flex-1">
          小巴
        </view>
        <view class="carseat flex-1">
          车辆座位人数
        </view>
      </view>
      <view>
        <AtInputNumber
          :min="0"
          :value="xiaoba"
          :on-change="handlerxiaoba"
        />
      </view>
    </view>
    <AtButton
      :on-click="confirm"
      class="w100pct"
      type="primary"
      style="margin-top:10px;"
    >
      确定下单
    </AtButton>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { AtInputNumber,AtButton } from 'taro-ui-vue'
export default {
  components: {AtInputNumber,AtButton},
  data() {
    return {
     daba:0,
     zhongba:0,
     shangwu:0,
     xiaoba: 0
    }
  },
  mounted() {
   // Taro.getCurrentInstance().router.params 获取各个类型车辆的数量
   // this.$bus.trigger(Taro.getCurrentInstance().router.params.event, this.data[this.index]) ，冒泡
   if (Taro.getCurrentInstance().router.params.daba) {
     this.daba = Taro.getCurrentInstance().router.params.daba
   }
   if (Taro.getCurrentInstance().router.params.zhongba) {
     this.zhongba = Taro.getCurrentInstance().router.params.zhongba
   }
   if (Taro.getCurrentInstance().router.params.shangwu) {
     this.shangwu = Taro.getCurrentInstance().router.params.shangwu
   } 
   if (Taro.getCurrentInstance().router.params.xiaoba) {
     this.xiaoba = Taro.getCurrentInstance().router.params.xiaoba
   }
  },
  methods: {
    handlerdaba(v) {
      this.daba = v
    },
    handlerzhongba(v) {
      this.zhongba = v
    },
    handlershangwu(v) {
      this.shangwu = v
    },
    handlerxiaoba(v) {
      this.xiaoba = v
    },
    confirm() {
      this.$bus.trigger(Taro.getCurrentInstance().router.params.event, [ this.daba, this.zhongba, this.shangwu, this.xiaoba])
      Taro.navigateBack({
        delta: 1
      })
    }
  }

}
</script>

<style lang="scss">

.selectCar{
  // background-color: RGBA(241, 244, 250, 1);
  height: 100%;
  .items{
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px 0px rgba(7, 24, 39, 0.1);
    .carimg{
      width: 100px;
      height: 100px;
    }
    .carseat{
      color: #918b8b;
      font-size: 28px;
    }
  }
}

</style>