<template>
  <view class="searchCar pac-pt20x">
    <view class="items pac-mt19x flexBox flex-center flex-middle">
      <picker
        mode="multiSelector"
        :range="cityList"
        :value="cityvalue"
        @cancel="cancel"
        @change="handleDateChange"
        @columnchange="handleColumnChange"
      >
        <view
          v-if="cityvalue.length==0"
          class="demo-list-item"
        >
          请选择区县
        </view>
        <view
          v-else
          class="demo-list-item"
        >
          {{ cityList[0][cityvalue[0]] }}
          {{ cityList[1][cityvalue[1]] }}
          {{ cityList[2][cityvalue[2]] }}
        </view>
      </picker>
    </view>
    <view class="pac-mt12x flexBox flex-col">
      <view
        v-for="item in listStation"
        :key="item.id"
        class="itemair flexBox flex-middle pac-pl12x"
        @tap="selects(item.id,item.airportName)"
      >
        {{ item.airportName }}
      </view>
    </view>
  </view>
</template>

<script>
import  Taro from '@tarojs/taro'
// import { AtList, AtListItem } from 'taro-ui-vue'
import { getTypeText } from '@/utils/lib'
import { AtRadio } from 'taro-ui-vue'

import {getRegionTreeApi,getAddressBookListApi} from '@/api/apilist'
export default {
  name: 'SearchCar',
  components: {
    AtRadio
  },
  data() {
    return {
      cityList: [[], [], []],
      cityvalue: [],
      cityKeyObj: {},
      cityTypeArr: {}, 
      cityListCopy: [[], [], []],
      cityvalueCopy: [],
      yuanshi: [],
      listStation: [],
      type: 1,
    }
  },
  
  mounted(){
     this.type = Taro.getCurrentInstance().router.params.type
      this.getCityList()
  },
  methods:{
    getTypeText,
    cancel() {
      // this.cityvalue = this.cityvalueCopy
      //  let v1 = this.yuanshi.map(item=> {
      //    return item.value
      //  })
       
      //  this.cityList[0] = this.cityTypeArr[v1[this.cityvalueCopy[0]||0]]
      //  if (this.cityvalueCopy.length>0) {
      //   this.cityList[1] = this.cityTypeArr[this.cityList[0]][this.cityvalueCopy[1]]
      //   this.cityList[2] = this.cityTypeArr[this.cityList[1][this.cityvalueCopy[1]]][this.cityvalueCopy[2]]
      //  } else {
      //    this.cityList[1] = this.cityTypeArr[this.cityList[0][0]][0]
      //   this.cityList[2] = this.cityTypeArr[this.cityList[1][0]][0]
      //  }
       
    },
    selects(x,y) {
      this.$bus.trigger(Taro.getCurrentInstance().router.params.event,x,y)
      Taro.navigateBack({
        delta: 1
      })
    },
    handleDateChange(c){
      this.cityvalue = c.detail.value
      this.cityvalueCopy = c.detail.value
      let code = ''
      if (this.cityList[2][this.cityvalue[2]]) {
        code=this.cityKeyObj[this.cityList[2][this.cityvalue[2]]]
      } else {
        code=this.cityKeyObj[this.cityList[1][this.cityvalue[1]]]
      }
      getAddressBookListApi(
        {areaCode:code, stationType:this.type}
      ).then(data=> {
        console.log(data)
        this.listStation = data.data.data
      })
    },
    handleColumnChange(c) {
      if (c.detail.column === 0 ) {
        this.cityList[1] = this.cityTypeArr[this.cityList[0][c.detail.value]]
      } else if (c.detail.column === 1) {
        // console.log(this.cityTypeArr[this.cityList[1][c.detail.value]], this.cityList[1][c.detail.value])
        this.cityList[2] = this.cityTypeArr[this.cityList[1][c.detail.value]] || []
       
      }
      this.cityList = JSON.parse(JSON.stringify(this.cityList))
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
    },
     getCityList(){
       let cityList = [[],[],[]]
      getRegionTreeApi().then(data=> {
        this.yuanshi = data.data.data
        this.cityListFun(data.data.data)
        let lv1 = this.yuanshi.map(item=>{
          return item.value
        })
        cityList[0]=lv1
        cityList[1]=this.cityTypeArr[this.yuanshi[0].value]
        if (this.cityTypeArr[this.cityTypeArr[this.yuanshi[0].value]]){
          cityList[2]=this.cityTypeArr[this.cityTypeArr[this.yuanshi[0].value]]
        }
         this.cityList = cityList
      })
     
     
    
      
    }, 
    cityListFun(data, keys) {
      data.forEach(item => {
        this.cityKeyObj[item.value] = item.key
        let keycopy;
        if (keys) {
          keys.push(item.value)
          keycopy = keys
          if (item.children&& item.children.length>0) {
           
            this.cityTypeArr[item.value] = []
            this.cityListFun(item.children, this.cityTypeArr[item.value])
          }
        } else {
          this.cityTypeArr[item.value] = []
          keycopy = this.cityTypeArr[item.value]
          if (item.children&& item.children.length>0) {
          
            this.cityListFun(item.children, keycopy)
          }
        }
        
        
      })
     
    }
  }
}
</script>

<style lang='scss'>
.searchCar{
  padding-top: 20px;
  background: RGBA(242, 245, 251, 1);
  .items{
    height: 102px;
    background-color: #fff;
  }
}
.itemair{
  height: 80px;
  border-bottom: 1px solid #dfdfdf;
  background: #fff;
}
</style>>


