<template>
  <view class="dingdan pac-pt20x">
    <view class="items pac-mt19x flexBox flex-center flex-middle">
      <picker
        mode="date"
        fields="month"
        :value="dateSel"
        @change="handleDateChange"
      >
        <view class="demo-list-item">
          时间选择器
        </view>
      </picker>
    </view>
    <dingdandetail class="pac-mt20x" />
    <dingdandetail class="pac-mt20x" />
  </view>
</template>

<script>

// import { AtList, AtListItem } from 'taro-ui-vue'
import dingdandetail from './component/dingdanitem.vue'
export default {
  name: 'Dingdan',
  components: {
  dingdandetail
  },
  data() {
    return {
      dateSel: '2018-06-18'
    }
  },
  methods:{
  handleDateChange(){

  }
  }
}
</script>

<style lang='scss'>
.dingdan{
  padding-top: 20px;
  background: RGBA(242, 245, 251, 1);
  .items{
    height: 102px;
    background-color: #fff;
  }
}
</style>>


