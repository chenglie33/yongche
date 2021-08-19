<template>
  <view class="index">
    <view class="posR w100pct backPage">
      <image    
        :src="banner"
      />
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
      <AtButton
        type="primary"
        style="margin-top:10px;"
      >
        确定下单
      </AtButton>
    </view>
    </image>
  </view>
  </view>
</template>

<script>
import banner from '../../assets/banner@2x.png'
import { AtButton } from 'taro-ui-vue'
import { AtTabs, AtTabsPane } from 'taro-ui-vue'
import Plant from './component/plant.vue'
import train from './component/train.vue'
import car from './component/car.vue'
// import "taro-ui-vue/dist/style/components/tabs.scss";
export default {
  name: 'Index',
  components: {
    AtTabs,AtTabsPane,Plant,train,car,AtButton
  },
  data() {
    return {
      banner,
      current:0
    }
  },
  methods:{
    handleClick(val){
      this.current = val

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


