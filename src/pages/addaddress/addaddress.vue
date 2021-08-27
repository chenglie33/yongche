<template>
  <view class="addaddress">
    <view class="panel flexBox flex-col ">
      <view class="flexBox flex-row formitem flex-middle">
        <view class="iconLeft">
          省市区
        </view>
        <picker
          class="flex-1"
          mode="multiSelector"
          :range="cityList"
          :value="cityvalue"
          @cancel="cancel"
          @change="handleDateChange"
          @columnchange="handleColumnChange"
        >
          <view
            v-if="cityvalue.length==0"
            class="demo-list-item fR"
          >
            {{ placeholder }}
          </view>
          <view
            v-else
            class="demo-list-item fR"
          >
            {{ cityList[0][cityvalue[0]] }}
            {{ cityList[1][cityvalue[1]] }}
            {{ cityList[2][cityvalue[2]] }}
          </view>
        </picker>
        <view class="iconright colorArr at-icon at-icon-chevron-right flex-middle flexBox" />
      </view>
      <view class="flexBox flex-row formitem flex-middle bd-none">
        <view class="iconLeft">
          详细地址
        </view>
        <AtInput
          v-model="addressDetails"
          :value="addressDetails"
          :on-change="handleInput" 
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="详细地址"
        />
        <view class="iconright colorArr  flex-middle flexBox" />
      </view>
    </view>
    <!-- <view class="panel flexBox flex-col pac-mt20x">
      <view class="flexBox flex-row formitem flex-middle">
        <view class="iconLeft">
          姓名
        </view>
        <AtInput
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="输入姓名" 
          :value="name"
        />
      </view>
      <view class="flexBox flex-row formitem flex-middle bd-none">
        <view class="iconLeft">
          电话
        </view>
        <AtInput
          class="text-right" 
          name="value" 
          type="text" 
          placeholder="请输入电话" 
          :value="name"
        />
      </view>
    </view> -->
    <AtButton
      v-if="!isEidt"
      class="pac-mt15x pac-ml14x pac-mr14x"
      type="primary"
      :on-click="toadd"
    >
      提交
    </AtButton>
    <AtButton
      v-if="isEidt"
      class="pac-mt15x pac-ml14x pac-mr14x"
      type="primary"
      :on-click="update"
    >
      修改
    </AtButton>
  </view>
</template>
<script>
import Taro from '@tarojs/taro'
import { AtList, AtListItem, AtButton } from 'taro-ui-vue'
import { AtInput } from 'taro-ui-vue'
import {regionName} from '@/utils/lib'
import {getRegionTreeApi, addWxUserAddressApi,updateWxUserAddressApi} from '@/api/apilist'
export default {
  name:'Addaddress',
  components: {AtButton,AtInput},
  data() {
    return{
      placeholder: Taro.getCurrentInstance().router.params.addressDetails? regionName(Taro.getCurrentInstance().router.params.areaCode) :'请选择省市区',
      id: Taro.getCurrentInstance().router.params.id,
      isEidt: Taro.getCurrentInstance().router.params.id,
      addressDetails:Taro.getCurrentInstance().router.params.addressDetails,
      code: Taro.getCurrentInstance().router.params.areaCode,
      name:'',
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
    this.getCityList()
    console.log(Taro.getCurrentInstance().router.params.id)
  },
  methods:{
    regionName,
    handleInput(val) {
      this.addressDetails = val
    },
    cancel() {
       
    },
    update() {
      updateWxUserAddressApi({
        id: this.id,
        addressDetails: this.addressDetails,
        areaCode:this.code,
        wxUserId: this.$store.state.UserInfo.userId
      }).then(data=>{
        this.$bus.trigger('success')
        Taro.navigateBack({
          delta: 1
        })
      })
    },
    toadd() {
    
      addWxUserAddressApi({
        addressDetails: this.addressDetails,
        areaCode:this.code,
        wxUserId: this.$store.state.UserInfo.userId
      }).then(data=>{
        this.$bus.trigger('success')
        Taro.navigateBack({
          delta: 1
        })
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
      this.code = code
      
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
<style lang="scss">
.addaddress{
  padding: 20px 0;
  background-color: RGBA(242, 245, 251, 1);
  box-sizing: border-box;
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    .at-list{
      &:after{
        border-top: none;
        display: none;
      }
      
    }
    .item-bottom{
      &:after{
        display: none;
      }
    }
    .iconLeft{
      width: 180px;
    }
    .colorArr{
      color: rgba(205, 205, 205,1);
      font-size: 50px;
    }
    .iconright{

    }
    .bd-none{
      border-bottom: none;
    }
  }
}
</style>