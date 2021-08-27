<template>
  <view class="dirverdetail">
    <Reject ref="Reject" />
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
          {{ getTypeText('orderType',dataitem.orderType) }}
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
            class="pac-ml8x"
            :on-click="()=>toDetail(dataitem.id)"
          >
            查看详情
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="dataitem.orderStatus===1"
            type="secondary"
            size="small"
            class="pac-mr8x"
            :on-click="()=>jiedan(dataitem.id)"
          >
            接单
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="dataitem.orderStatus===1"
            type="secondary"
            size="small"
            class="pac-mr8x"
            :on-click="()=>reject(dataitem.id)"
          >
            拒绝
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="dataitem.orderStatus===2"
            type="secondary"
            size="small"
            class="pac-mr8x"
            :on-click="()=>zhixin(dataitem.id)"
          >
            开始执行
          </AtButton>
        </view>
        <view class="fR">
          <AtButton
            v-if="dataitem.orderStatus===3"
            type="secondary"
            size="small"
            class="pac-mr8x"
          >
            完成
          </AtButton>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import Reject from '@/components/Reject.vue'
import { AtButton } from 'taro-ui-vue'
import {getTypeText} from '@/utils/lib.js'
import dayjs from 'dayjs'
import Taro from '@tarojs/taro'
import {getUserOrderDetailsApi,driverOrderReceivingApi,driverExecuteOrderApi} from '@/api/apilist'
export default {
  name:'Dirverdetail',
  components: {
    AtButton,Reject
  },
  props: ['dataitem'],
  mounted(){
    
  },
  methods: {
    dayjs,
    getTypeText,
    jiedan(id) {
      driverOrderReceivingApi({orderId:id}).then(()=>{
        this.$bus.trigger('success')
      })
    },
     zhixin(id){
      driverExecuteOrderApi({orderId:id}).then(()=>{
     
        this.$bus.trigger('success')
      })
    },
    reject(id) {
      this.$refs.Reject.show(id)
    },
    toDetail(data) {
      Taro.navigateTo({url: '../driverDetail/driverDetail?id='+data})
    },
    toPingjia(data) {
      Taro.navigateTo({url: '../comment/comment?id='+data})
    }
  }
}
</script>
<style lang="scss">
.dirverdetail{
  background-color: #fff;
  padding:30px;
  .detailItems{
    border-bottom: 1px solid rgb(214, 228, 239);
    height: 93px;

  }
}
</style>