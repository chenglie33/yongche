<template>
  <view class="comment">
    <view class="panel flexBox flex-col">
      <view class="flexBox flex-row pac-mb15x">
        <view>出发时间</view>
        <view class="flex-1">
          <view class="fR">
            {{ data.driverExecuteTime }}
          </view>
        </view>
      </view>
      <view class="flexBox flex-row pac-mb15x">
        <view>出发地址</view>
        <view class="flex-1">
          <view class="fR">
            {{ data.startAreaName }}{{ data.startAddress }}
          </view>
        </view>
      </view>
      <view class="flexBox flex-row pac-mb15x">
        <view>目的地地址</view>
        <view class="flex-1">
          <view class="fR">
            {{ data.endAreaName }}{{ data.endAddress }}
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
            <AtRate
              :max="5"
              :value="pj1"
              :on-change="changepj1"
            />
          </view>
        </view>
      </view>
      <view class="flexBox flex-row rate-item">
        <view class="rate-title">
          司机态度
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate
              :max="5"
              :value="pj2"
              :on-change="changepj2"
            />
          </view>
        </view>
      </view>
      <view class="flexBox flex-row rate-item">
        <view class="rate-title">
          旅程舒适度
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate
              :max="5"
              :value="pj3"
              :on-change="changepj3"
            />
          </view>
        </view>
      </view>
    </view>
    <!-- <view class="panel flexBox flex-col pac-mt15x">
      <view class="flexBox flex-row rate-item pac-mt25x">
        <view class="rate-title">
          综合评分
        </view>
        <view class="flex-1">
          <view class="fR">
            <AtRate
              :max="5"
              :value="req.pjScore"
              @onChange="changepjScore"
            />
          </view>
        </view>
      </view>
    </view> -->
    <view class="panel flexBox flex-col pac-mt15x">
      <textarea
        v-model="pjDetails"
        placeholder="输入您对此次旅程的评价"
        :onInput="handleChange"
      />
    </view>
    <AtButton
      v-show="!isp"
      type="primary"
      class="pac-mt15x"
      :on-click="submit"
      :disabled="!pj1||!pj2||!pj3||!pjDetails"
    >
      提交评价
    </AtButton>
  </view>
</template>
<script>
import { AtRate,AtButton } from 'taro-ui-vue'
import {getTypeText} from '@/utils/lib.js'
import Taro from '@tarojs/taro'
import {getUserOrderDetailsApi} from '@/api/apilist'
import dayjs from 'dayjs'
import {pjOrderApi} from '@/api/apilist'
export default {
  name: 'Comment',
  components: {AtRate, AtButton},
  data(){
    return {
      isp: false,
      pj1:0,
      pj2:0,
      pj3:0,
      pjDetails: '',
      req:{},
      data:{
        
      }
    }
  },
  mounted() {
    if(Taro.getCurrentInstance().router.params.isp){
      this.isp = true
      Taro.setNavigationBarTitle({
            title: "查看评价"
        })
    }
    
    this.getdetail()
  },
  methods: {
    getTypeText,
    dayjs,
    handleChange(v){
      console.log(v)
      this.pjDetails = v
    },
    changepj1(v) {
     
      this.pj1=v
    },
    changepj2(v) {
      this.pj2=v
    },
    changepj3(v) {
      this.pj3=v
    },
    changepjScore(v){
      this.req.pjScore=v
    },
    getdetail() {
      // order202108252159Z6nhNGne86171
      // Taro.getCurrentInstance().router.params.id
      getUserOrderDetailsApi({orderId:Taro.getCurrentInstance().router.params.id}).then(data=>{
        this.data = data.data.data
        this.pj1 = this.data.pj1
        this.pj2 = this.data.pj2
        this.pj3 = this.data.pj3
        this.pjDetails = this.data.pjDetails
        
      })
    },
    submit() {
      pjOrderApi({id:Taro.getCurrentInstance().router.params.id,pj1:this.pj1,pj2:this.pj2,pj3:this.pj3, pjDetails: this.pjDetails}).then(data=>{
        this.$bus.trigger('successorder')
        Taro.navigateBack({
          delta:1
        })
      })
    }
  }
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