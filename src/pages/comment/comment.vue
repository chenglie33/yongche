<template>
  <view class="comment">
    <view class="panel flexBox flex-col">
      <view class="flexBox flex-row pac-mb15x">
        <view>出发时间</view>
        <view class="flex-1">
          <view class="fR">
            2020-09-09
          </view>
        </view>
      </view>
      <view class="flexBox flex-row pac-mb15x">
        <view>出发地址</view>
        <view class="flex-1">
          <view class="fR">
            2020-09-09
          </view>
        </view>
      </view>
      <view class="flexBox flex-row pac-mb15x">
        <view>目的地地址</view>
        <view class="flex-1">
          <view class="fR">
            2020-09-09
          </view>
        </view>
      </view>
    </view>
    <view class="panel flexBox flex-col pac-mt15x">
      <view class="flexBox flex-row rate-item pac-mt25x">
        <view class="rate-title">
          车内整洁度
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate :max="5" />
          </view>
        </view>
      </view>
      <view class="flexBox flex-row rate-item">
        <view class="rate-title">
          车内整洁度
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate :max="5" />
          </view>
        </view>
      </view>
      <view class="flexBox flex-row rate-item">
        <view class="rate-title">
          车内整洁度
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate :max="5" />
          </view>
        </view>
      </view>
    </view>
    <view class="panel flexBox flex-col pac-mt15x">
      <view class="flexBox flex-row rate-item pac-mt25x">
        <view class="rate-title">
          综合评分
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate :max="5" />
          </view>
        </view>
      </view>
    </view>
    <view class="panel flexBox flex-col pac-mt15x">
      <textarea placeholder="输入您对此次旅程的评价" />
    </view>
    <AtButton
      type="primary"
      class="pac-mt15x"
    >
      提交评价
    </AtButton>
  </view>
</template>
<script>
import { AtRate,AtButton } from 'taro-ui-vue'
export default {
  name: 'Comment',
  components: {AtRate, AtButton}
}
</script>
<style lang="scss">
.comment{
 padding: 20px;
  background-color: RGBA(242, 245, 251, 1);
  box-sizing: border-box;
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 16px;
     box-sizing: border-box;
    .item-panel{
      width: 100%;
      height: 92px;
      border-bottom: 1px solid rgb(214, 228, 239);
      font-size: 28px;
      .item-title{
        
      }
    }
  }
  .at-rate{
    view{
      margin-right: 10px;
    }
  }
  .rate-title{
    font-size: 32px;
  }
  .rate-item{
    margin-bottom: 60px;
  }
}
</style>