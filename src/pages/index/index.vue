<template>
  <view class="index">
    <view class="posR w100pct backPage">
      <swiper
        class="test-h"
        indicator-color="#999"
        indicator-active-color="#333"
        current="current"
        :duration="500"
        :interval="5000"
        :circular="false"
        :autoplay="true"
        :indicator-dots="true"
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
      <!-- <image    
        :src="banner"
      /> -->
    </view>
    <view class="pac-pl10x pac-pr10x posR contentWrap panel__content">
      <AtTabs
        :animated="false"
        :current="current"
        :tab-list="[
          { title: '接送机' },
          { title: '接送火车' },
          { title: '旅游包车' }
        ]"
        :on-click="handleClick"
      >
        <AtTabsPane
          :current="current"
          :index="0"
        />
        <AtTabsPane
          :current="current"
          :index="1"
        />
        <AtTabsPane
          :current="current"
          :index="2"
        />
      </AtTabs>
      <Plant v-show="current===0" />
      <train v-show="current===1" />
      <car v-show="current===2" />
    </view>
    </image>
  </view>
  </view>
</template>

<script>
// import banner from '../../assets/banner.png'
import { AtButton } from 'taro-ui-vue'
import { AtTabs, AtTabsPane } from 'taro-ui-vue'
import Plant from './component/plant.vue'
import train from './component/train.vue'
import car from './component/car.vue'
import {getXcxPicApi} from '@/api/apilist'
// import "taro-ui-vue/dist/style/components/tabs.scss";
export default {
  name: 'Index',
  components: {
    AtTabs,AtTabsPane,Plant,train,car,AtButton
  },
  data() {
    return {
      // banner,
      current:0,
      imgUrls: [
       
      ],
    }
  },
  mounted() {
    this.getXcxPic()
  },
  methods:{
    handleClick(val){
      this.current = val

    },
    getXcxPic(){
      getXcxPicApi().then(data=>{
        this.imgUrls = []
        data.data.content.forEach(item=>{
          this.imgUrls.push(item.url)
        })
      })
    }
  }
}
</script>

<style lang='scss'>
  .index{
    background-color: RGBA(241, 244, 250, 1);
  }
  .backPage{
    image{
      width: 100%;
      height: 277px;
    }
  }
  .contentWrap{
    width: 710px;
    margin: 0 auto;
    background-color: #fff;
    top: -50px;
    box-sizing: border-box;
    padding-bottom: 60px;
    box-shadow: 0px 4px 10px 0px rgba(7, 24, 39, 0.1);
    border-radius: 4px;
  }
</style>>


