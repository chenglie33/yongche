<template>
  <view class="address">
    <deleadd
      ref="deleadd"
      @success="getlist"
    />
    <view
      v-for="item in listAdd"
      :key="item.id"
      class="panel flexBox flex-col pac-mb8x"
    >
      <view
        
        class="header flexBox flex-row flex-middle"
      >
        <view>{{ regionName(item.areaCode) }}</view>
        <view class="flex-1">
          <view class="fR" />
        </view>
      </view>
      <view class="content">
        {{ item.addressDetails }}
      </view>
      <view class="flexBox flex-row footer flex-middle">
        <view class="readior flexBox flex-middle">
          <image
            v-if="defaultAddress===item.id"
            :src="morenCheck"
            class="radioImg pac-mr12x"
          />
          <image
            v-else
            :src="moren"
            class="radioImg pac-mr12x"
            @tap="handleClick(item.id)"
          />
          <view v-if="defaultAddress!==item.id">
            设为默认地址
          </view>
        </view>
        <view class="flex-1 ">
          <view class="fR">
            <AtButton
              :on-click="()=>deleteadd(item)"
              type="secondary"
              size="small"
            >
              删除
            </AtButton>
          </view>
          <view class="fR pac-mr12x">
            <AtButton
              :on-click="()=>update(item)"
              type="secondary"
              size="small"
            >
              修改
            </AtButton>
          </view>
        </view>
      </view>
    </view>
    <AtButton
      class="pac-mt15x pac-ml14x pac-mr14x"
      type="primary"
      :on-click="toadd"
    >
      新增地址
    </AtButton>
  </view>
</template>
<script>
import morenCheck from '../../assets/moren@2x.png'
import moren from '../../assets/moren_g@2x.png'

import Taro from '@tarojs/taro'
import deleadd from './components/deleteadd.vue'
import {getWxUserAddressListApi, addWxUserAddressApi} from '@/api/apilist'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction,AtButton } from 'taro-ui-vue'
import {regionName} from '@/utils/lib'
export default {
  name: 'Address',
  components: {AtButton,deleadd},
  data() {
    return {
      defaultAddress: Taro.getStorageSync('defaultAddress') || '',
      isopen: false,
      morenCheck,
      moren,
      checkedList: [],
      listAdd:[],
      checkboxOption: [{
        value: 'list1',
        label: '默认地址'
      }]
    }
  },
  destroyed() {
    this.$bus.off('success')
  },
  mounted() {
    this.getlist()
    this.$bus.on('success', this.getlist)
  },
  methods:{
    regionName,
    okdo() {

    },
    getlist(){
      getWxUserAddressListApi().then(data=>{console.log(data.data.data)
        this.listAdd = data.data.data
     
        
      })
    },  
    deleteadd(data) {
      this.$refs.deleadd.show(data)
    },
    update(data) {
      console.log(data)
      Taro.navigateTo({url:`../addaddress/addaddress?areaCode=${data.areaCode}&addressDetails=${data.addressDetails}&id=${data.id}`})
    },
    toadd(){
      
      Taro.navigateTo({url:'../addaddress/addaddress'})
    },
    handleClick(v){
      
      Taro.setStorageSync('defaultAddress',v)
      this.defaultAddress = v
    }
  }
}
</script>
<style lang="scss">
  .address{
  padding: 20px 0;
  background-color: RGBA(242, 245, 251, 1);
  box-sizing: border-box;
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
    .header{
      border-bottom: 1px solid rgb(214, 228, 239);
      color: rgba(153, 153, 153, 1);
      height: 90px;
    }
    .content{
        border-bottom: 1px solid rgb(214, 228, 239);
        padding: 20px 0;
    }
    .at-checkbox{
      &::before{
        display: none;
      }
    }
  }
  .readior{
    font-size: 28px;
  }
  .radioImg{
    width: 40px;
    height: 40px;
  }
  .footer{
    height: 93px;
  }
  }
</style>