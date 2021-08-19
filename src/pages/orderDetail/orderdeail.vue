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
            待接单
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          订单类型：
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            接送机
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          下单时间
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            2021-09-09 12:00:00
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          出发地址
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            江苏省xxxx
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          接送时间
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            xx
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          车次/航班号
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            xxx
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          车型
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            xxx
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
            800.00元
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          定金
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            100.00元
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          尾款代付
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            700.00元
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
            张三
          </view>
        </view>
      </view>


      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          司机联系方式
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            1234567890
          </view>
        </view>
      </view>

      <view class="item-panel flexBox flex-row flex-middle">
        <view class="item-title">
          车辆拍照
        </view>
        <view class="flex-1 item-content">
          <view class="fR">
            苏233333
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
            差距开始毒唯忘记你的空间阿萨德哈萨克电话ajshdkajshdk阿斯顿接口我喝酒去我那是你的空间和我i卡谁都能看见撒都拿手机看你
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'Orderdetail'
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