<template>
  <view class="driver pac-pt20x">
    <view class="items pac-mt19x flexBox flex-center flex-middle">
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
      :key="item.id"
      :dataitem="item"
      class="pac-mt20x"
    />
  </view>
</template>

<script>

// import { AtList, AtListItem } from 'taro-ui-vue'

import {getDriverOrderListApi} from '@/api/apilist'
import driverdetail from './component/driveritem.vue'
import dayjs from 'dayjs'
export default {
  name: 'Dingdan',
  components: {
  driverdetail
  },
  data() {
    return {
      dateSel: this.monthFormat(),
      list:[]
    }
  },
  destroyed() {
    this.$bus.off('success')
  },
  mounted(){
    this.getList()
    this.$bus.on('success', this.getList)
  },
  methods:{
    monthFormat() {
      let year = new Date().getFullYear()
      let mon = new Date().getMonth().toString().length===1?'0'+(new Date().getMonth()+1).toString(): (new Date().getMonth()+1).toString()
      return year + '-' + mon
    },
    getList(){
      getDriverOrderListApi({pageNo:1,pageSize:1000,yearMonth: dayjs(this.dateSel).format('YYYY-MM')}).then(data=>{
       this.list = data.data.data.list
      })
    },
  handleDateChange(v){
    console.log(v.detail.value)
    this.dateSel = v.detail.value
    this.getList()

  }
  }
}
</script>

<style lang='scss'>
.driver{
  padding-top: 20px;
  background: RGBA(242, 245, 251, 1);
  .items{
    height: 102px;
    background-color: #fff;
  }
}
</style>>


