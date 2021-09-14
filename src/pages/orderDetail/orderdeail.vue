<template>
  <view class="orderdetail">
    <view class="panel">
      <view class="header-title">
        订单详情
      </view>
      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          订单类型：
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ getTypeText('orderType',datas.orderType) }}
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          订单状态：
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ getTypeText('orderStatus',datas.orderStatus) }}
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          下单时间
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ dayjs(datas.createTime).format('YYYY-MM-DD HH:mm:ss') }}
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          出发地址：
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.startAreaName }}{{ datas.startAddress }}
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          目的地地址：
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.endAreaName }}{{ datas.endAddress }}
          </view>
        </view>
      </view>
      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          接送时间
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ dayjs(datas.startTime).format('YYYY-MM-DD HH:mm:ss') }}
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          车次/航班号
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.flightNum }}
          </view>
        </view>
      </view>
      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          车型
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ getTypeText('carType',datas.carType) }}
          </view>
        </view>
      </view>
    </view>

    <view class="panel pac-mt15x">
      <view class="header-title">
        支付金额详情
      </view>
      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          订单总价
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.totalCost }}元
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          定金
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.deposit }}元
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          尾款代付
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.otherCost }}元
          </view>
        </view>
      </view>
    </view>

    <view class="panel pac-mt15x">
      <view class="header-title">
        车辆详情
      </view>
      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          司机姓名
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.driverName }}
          </view>
        </view>
      </view>


      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          司机联系方式
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.driverName }}
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          车辆拍照
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            {{ datas.carNum }}
          </view>
        </view>
      </view>
    </view>
    <view class="panel pac-mt15x">
      <view
        class="item-panel flexBox flex-row "
        style="height:auto"
      >
        <view class="item-title">
          拒绝原因
        </view>
        <view class="flex-1 item-content">
          <view class="fR pac-pl12x">
            {{ datas.driverRefuseDetails }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import {getTypeText} from '@/utils/lib.js'
import Taro from '@tarojs/taro'
import {getUserOrderDetailsApi} from '@/api/apilist'
import dayjs from 'dayjs'
export default {
  name: 'Orderdetail',
  data() {
    return {
      datas: {}
    }
  },
  mounted() {
    this.getdetail()
  },
  methods:{
    dayjs,
    getTypeText,
    getdetail() {
      // order202108252159Z6nhNGne86171
      // Taro.getCurrentInstance().router.params.id
      getUserOrderDetailsApi({orderId:Taro.getCurrentInstance().router.params.id}).then(data=>{
        console.log(data)
        this.datas = data.data.data
      })
    }
  }
}
</script>
<style lang="scss">
.orderdetail{
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
  .header-title{
    color: rgba(153, 153, 153, 1);
    font-size: 32px;
  }

}
</style>