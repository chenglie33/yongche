<template>
  <view class="Dingdandetail">
    <view class="detailItems flexBox flex-row flex-middle">
      <view>订单状态：</view>
      <view class="flex-1">
        <view class="fR">
          接单
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>出发时间</view>
      <view class="flex-1">
        <view class="fR">
          接单
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>出发地址</view>
      <view class="flex-1">
        <view class="fR">
          接单
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>目的地地址</view>
      <view class="flex-1">
        <view class="fR">
          接单
        </view>
      </view>
    </view>
    <view
      class="detailItems flexBox flex-row flex-middle"
      style="border:none"
    >
      <view />
      <view class="flex-1">
        <view class="fR">
          <AtButton
            type="secondary"
            size="small"
          >
            查看详情
          </AtButton>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { AtButton } from 'taro-ui-vue'
export default {
  name:'Dingdandetail',
  components: {
    AtButton
  },
}
</script>
<style lang="scss">
.Dingdandetail{
  background-color: #fff;
  padding:30px;
  .detailItems{
    border-bottom: 1px solid rgb(214, 228, 239);
    height: 93px;

  }
}
</style>