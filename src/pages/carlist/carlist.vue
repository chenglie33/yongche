<template>
  <view class="dingdan pac-pt20x">
    <view class="items pac-mt19x flexBox flex-center flex-middle">
      <picker
        mode="selector"
        :range="carTypeList"
        range-key="label"
        :value="cartype"
        @change="handleDateChange"
      >
        <view class="demo-list-item">
          {{ carTypeList[cartype[0]].label }}
        </view>
      </picker>
    </view>
    <view class="pac-mt12x">
      <virtual-list
        wclass="List"
        :height="readerHeight"
        :item-data="list"
        :item-count="dataLen"
        :item-size="itemHeight"
        :item="Listitem"
        width="100%"
        @scroll="onScroll"
      />
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
// import { AtList, AtListItem } from 'taro-ui-vue'
import { getTypeText } from '@/utils/lib'
import Listitem from './components/row.vue'
import {getCarInfoListApi} from '@/api/apilist'
export default {
  name: 'Dingdan',
  components: {
    
  },
  data() {
    return {
      Listitem,
      dateSel: '2018-06-18',
      carTypeList: this.getTypeText('carType'),
      cartype:[0],
      list:[],
      dataLen:0,
      itemHeight:50,
      readerHeight: Taro.getSystemInfoSync().windowHeight - 75,
      req:{
        pageNo:1,
        pageSize:30,
        carType: 1
      },
      loading: false
      
    }
  },
  mounted(){
    // this.getList()
  },
  methods:{
    getTypeText,
    handleDateChange(){

    },
    listReachBottom() {
      Taro.showLoading()
      this.loading = true
      this.getList()
      
    },
    onScroll({ scrollDirection, scrollOffset }){
      console.log(!this.loading ,scrollDirection === 'forward' ,scrollOffset > ((this.dataLen - 5) * this.itemHeight),scrollOffset,((this.dataLen - 5) * this.itemHeight-this.readerHeight),this.dataLen)
      if (
        // 避免重复加载数据
        !this.loading &&
        // 只有往前滚动我们才触发
        scrollDirection === 'forward' &&
        // 5 = (列表高度 / 单项列表高度)
        // 100 = 滚动提前加载量，可根据样式情况调整
        scrollOffset > ((this.dataLen - 5) * this.itemHeight-this.readerHeight)
      ) {
        this.listReachBottom()
      }
    },
    getList(){
      Taro.showLoading()
      getCarInfoListApi(this.req).then(data=>{
        // console.log(data.data.data.list)
        this.req.pageNo=this.req.pageNo+1
        this.list = [...this.list,...data.data.data.list]
        this.dataLen = data.data.data.list.length + this.dataLen
        this.loading = false;
          Taro.hideLoading()
      })
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


