<template>
  <view class="flexBox flex-row w100pct carselect-item boxSize">
    {{ index }}
    <!-- <image
      :src="data[index].carPicture"
      class="selectImg"
    /> -->
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
</template>
<script>
export default {
  props:['css', 'data', 'index', 'isScrolling']
  
}
</script>
<style lang="scss">
.selectImg{
  width: 80px;
  height: 80px;
}
.carselect-item{
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #dfdfdf;
  .desc{
    font-size: 22px;
    color: #a8a0a0;
  }
}
</style>