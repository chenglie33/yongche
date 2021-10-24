<template>
  <view class="Dingdandetail">
    <view class="detailItems flexBox flex-row flex-middle">
      <view>订单状态：</view>
      <view class="flex-1">
        <view class="fR">
          {{ getTypeText('orderStatus',dataitem.orderStatus) }}
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>下单时间</view>
      <view class="flex-1">
        <view class="fR">
          {{ dayjs(dataitem.createTime).format('YYYY-MM-DD HH:mm:ss') }}
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>出发地址</view>
      <view class="flex-1">
        <view class="fR">
          {{ dataitem.startAreaName }}{{ dataitem.startAddress }}
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>目的地地址</view>
      <view class="flex-1">
        <view class="fR">
          {{ dataitem.endAreaName }}{{ dataitem.endAddress }}
        </view>
      </view>
    </view>
    <view class="detailItems flexBox flex-row flex-middle">
      <view>订单类型</view>
      <view class="flex-1">
        <view class="fR">
          {{ getTypeText('orderType2',dataitem.orderType) }}
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
            v-if="dataitem.orderCostStatus===1"
            type="secondary"
            size="small"
            class="pac-ml8x"
            :on-click="()=>toDetail(dataitem.id)"
          >
            查看详情
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="dataitem.orderCostStatus===1"
            type="secondary"
            size="small"
            class="pac-mr8x"
          >
            付款
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="dataitem.orderStatus===5"
            type="secondary"
            size="small"
            class="pac-mr8x"
            :on-click="()=>tokaipiao(dataitem.id)"
          >
            申请开票
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="(dataitem.orderStatus===5||dataitem.orderStatus===6||dataitem.orderStatus===7)&& dataitem.isPj==1"
            type="secondary"
            size="small"
            class="pac-mr8x"
            :on-click="()=>toPingjia(dataitem.id)"
          >
            评价
          </AtButton>
          <AtButton
            v-if="(dataitem.orderStatus===5||dataitem.orderStatus===6||dataitem.orderStatus===7)&& dataitem.isPj==2"
            type="secondary"
            size="small"
            class="pac-mr8x"
            :on-click="()=>toPingjia2(dataitem.id)"
          >
            查看评价
          </AtButton>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import { AtButton } from 'taro-ui-vue'
import {getTypeText} from '@/utils/lib.js'
import dayjs from 'dayjs'
import Taro from '@tarojs/taro'
export default {
  name:'Dingdandetail',
  components: {
    AtButton
  },
  props: ['dataitem'],
  mounted(){
    
  },
  methods: {
    dayjs,
    getTypeText,
    toDetail(data) {
      Taro.navigateTo({url: '../orderDetail/orderdeail?id='+data})
    },
    toPingjia(data) {
      Taro.navigateTo({url: '../comment/comment?id='+data})
    },
    toPingjia2(data) {
      Taro.navigateTo({url: '../comment/comment?isp=true&id='+data})
    },
    tokaipiao(data) {
       Taro.navigateTo({url: '../kaipiao/kaipiao?id='+data})
    }
  }
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