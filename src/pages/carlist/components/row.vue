<template>
  <view
    class="flexBox flex-row w100pct carselect-item boxSize"
    :style="css"
  >
    <view
      class="w100pct flexBox flex-row boxSize"
      @tap="select"
    >
      <image
        :src="data[index].carPicture.split(',')"
        class="selectImg"
      />
      <view class="flexBox flex-col flex-1 pac-pl12x boxSize">
        <view>{{ data[index].carNum }}</view>
        <view class="flexBox flex-row flex-1 desc ">
          <view class="flex-1">
            {{ data[index].carTypeDetails }}
          </view><view class="flex-1 ">
            <view class="fR">
              座位数:{{ data[index].siteNum }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import Taro, { Events } from '@tarojs/taro'
export default {
  props:['css', 'data', 'index', 'isScrolling'],
  methods: {
    select() {
      this.$bus.trigger(Taro.getCurrentInstance().router.params.event, this.data[this.index])
      Taro.navigateBack({
        delta: 1
      })
    }
  }
  
}
</script>
<style lang="scss">
.selectImg{
  width: 80px;
  height: 80px;
}
.carselect-item{
  
  padding: 10px;
 
  
  &>view{
    padding: 40px;
    background: #fff;
     border-radius: 4px;
  }
  .desc{
    font-size: 28px;
    color: #a8a0a0;
  }
}
</style>