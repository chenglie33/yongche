<template>
  <view class="driver pac-pt20x">
    <swiper
      class="test-h"
      indicator-color="#999"
      indicator-active-color="#333"
      current="current"
      :duration="500"
      :interval="5000"
      :circular="false"
      :autoplay="true"
      :indicator-dots="false"
    >
      <swiper-item
        v-for="(item, idx) in imgUrls"
        :key="idx"
      >
        <image
          :src="item"
          class="slide-image"
        />
      </swiper-item>
    </swiper>
    <AtTabs
      :swipeable="false"
      :current="current1"
      :tab-list="tabList1"
      :on-click="handleClick"
    />
    <!-- <view class="header flexBox flex-col flex-middle flex-center">
      <view class="wrapheader flexBox flex-col flex-middle flex-center">
        <view
          class="touxiang"
          @tap="linkto('../persondetail/persondetail')"
        >
          <image :src="getWxUserInfo.avatarUrl" />
        </view>
        <view
          class="username"
        >
          {{ getWxUserInfo.nickName }}
        </view>
      </view>
    </view> -->
    <view
      v-show="current1==0"
      class="items pac-mt19x flexBox flex-center flex-middle"
    >
      <picker
        mode="date"
        fields="month"
        :value="dateSel"
        @change="handleDateChange"
      >
        <view class="demo-list-item">
          {{ dateSel }}
        </view>
      </picker>
    </view>
    <driverdetail
      v-for="item in list"
      v-show="current1==0"
      :key="item.id"
      :dataitem="item"
      class="pac-mt20x"
    />
    <view
      v-show="current1==1"
      class="flexBox flex-col deper"
    >
      <view
        class="flexBox flex-row itemb flex-middle "
        style="height:50px"
      >
        <view class="persondetail">
          用户名
        </view>
        <view class="flex-1 flex-end">
          <view class="fR">
            {{ getUserInfo.userName }}
          </view>
        </view>
      </view>
      <view
        class="flexBox flex-row itemb flex-middle"
        style="height:50px"
      >
        <view class="persondetail">
          电话
        </view>
        <view class="flex-1 flex-end">
          <view class="fR">
            {{ getUserInfo.phone }}
          </view>
        </view>
      </view>
      <view
        class="flexBox flex-row itemb flex-middle"
        style="height:50px"
      >
        <view class="persondetail">
          公司
        </view>
        <view class="flex-1 flex-end">
          <view class="fR">
            {{ getUserInfo.companyName }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

// import { AtList, AtListItem } from 'taro-ui-vue'
import {getUserProfile} from '@/utils/index.js'
import {mapGetters} from 'vuex'
import {getDriverOrderListApi,getXcxPicApi} from '@/api/apilist'
import driverdetail from './component/driveritem.vue'
import dayjs from 'dayjs'

import { AtTabs } from 'taro-ui-vue'
export default {
  name: 'Dingdan',
  components: {
  driverdetail,AtTabs
  },
   computed: {
    ...mapGetters(["getUserInfo"]),
  },
  data() {
    return {
      dateSel: this.monthFormat(),
      list:[],
      imgUrls: [
       
      ],
      current1: 0,
      tabList1: [
        { title: '订单列表' },
        { title: '个人信息' }
      ],
    }
  },
  destroyed() {
    this.$bus.off('success')
  },
  mounted(){
    getUserProfile()
    this.getList()
    this.getXcxPic()
    this.$bus.on('success', this.getList)
  },
  methods:{
    getXcxPic(){
      getXcxPicApi().then(data=>{
        this.imgUrls = []
        data.data.content.forEach(item=>{
          this.imgUrls.push(item.url)
        })
      })
    },
    monthFormat() {
      let year = new Date().getFullYear()
      let mon = new Date().getMonth().toString().length===1?'0'+(new Date().getMonth()+1).toString(): (new Date().getMonth()+1).toString()
      return year + '-' + mon
    },
    getList(){
      getDriverOrderListApi({pageNo:1,pageSize:1000,yearMonth: dayjs(this.dateSel).format('YYYYMM')}).then(data=>{
       this.list = data.data.data.list
      })
    },
  handleDateChange(v){
    console.log(v.detail.value)
    this.dateSel = v.detail.value
    this.getList()

  },
  handleClick(value) {
      this.current1 = value
    }
  }
}
</script>

<style lang='scss'>
.header{
    height: 350px;
    background: #fff;
    .wrapheader{
      width:auto;
      height: 190px;
      .touxiang{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: rgb(214, 228, 239);
        image{
          width: 120px;
          height: 120px;
        }
      }
      .username{
        font-size: 28px;
        margin-top: 18px;
      }
    }
  }
.driver{
  padding-top: 20px;
  background: RGBA(242, 245, 251, 1);
  .items{
    height: 102px;
    background-color: #fff;
  }
}
.driver{
    image{
      width: 100%;
      height: 288px;
    }
  }
  .deper{
    background: #fff;
  }
  .itemb{
    border-bottom: 1px solid #dfdfdf;
  }
</style>>


