<template>
  <view>
    <AtModal :is-opened="isopens">
      <AtModalHeader>更新用户资料</AtModalHeader>
      <AtModalContent>
        <AtInput
          v-show="isopens"
          name="name"
          :value="name"
          :on-change="handleChangeName" 
          type="text"
          placeholder="姓名"
        />
       
        <AtInput
          v-show="isopens"
          name="names"
          :value="phone"
          :on-change="handleChangephone" 
          
          type="phone"
          placeholder="新的电话"
        />
      </AtModalContent>
      <AtModalAction>
        <button @tap="closes">
          取消
        </button>  <button
          @tap="changphone"
        >
          确定
        </button>
      </AtModalAction>
    </AtModal>
    <view class="persondetail flexBox flex-col">
      <AtModal :is-opened="isopen">
        <AtModalHeader>免责条款</AtModalHeader>
        <AtModalContent>
          <view @tap="showPdf">
            查看免责条款
          </view>
        </AtModalContent>
        <AtModalAction>
          <button @tap="close">
            取消
          </button>  <button
            open-type="getPhoneNumber"
            :on-get-phone-number="getPhoneNumber"
          >
            同意并注册
          </button>
        </AtModalAction>
      </AtModal>
    
      <view class="flexBox flex-row item flex-middle">
        <view class="pac-pl12x">
          姓名
        </view>
        <view class="pac-pl24x">
          {{ getUserInfo.userName || getWxUserInfo.nickName }}
        </view>
      </view>
      <view class="flexBox flex-row item flex-middle">
        <view class="pac-pl12x">
          性别
        </view>
        <view class="pac-pl24x">
          {{ getWxUserInfo.gender === 1 ? '男' : '女' }}
        </view>
      </view>
      <view class="flexBox flex-row item flex-middle">
        <view class="pac-pl12x">
          电话
        </view>
        <view class="pac-pl24x flex-1">
          {{ getUserInfo.phone }}
        </view>
        <view class="pac-pl24x pac-pr24x">
          <view class="fR">
            <AtButton
              v-show="!getUserInfo.phone"
              size="small"
              type="primary"
              :on-click="openxy"
            >
              <!-- open-type="getPhoneNumber"
              :on-get-phone-number="getPhoneNumber" -->
              {{ getUserInfo.phone?'更新电话':'获取电话并注册' }}
            </AtButton>
            <AtButton
              v-show="getUserInfo.phone"
              size="small"
              type="primary"
              :on-click="updatep"
            >
              {{ getUserInfo.phone?'修改用户信息':'获取电话' }}
            </AtButton>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {mapGetters} from 'vuex'

import {AtButton,AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput } from 'taro-ui-vue'
import {checksession,loginToGetToken1} from '@/utils/index.js'
import {analysisPhoneApi,registerWxUserApi,updateUserDetailsApi} from '@/api/apilist'

import Taro, { Events } from "@tarojs/taro";
export default {
  components: {
    AtButton,AtModal, AtModalHeader, AtModalContent, AtModalAction,AtInput
  },
  data(){
    return {
      isopen: false,
      isopens: false,
      phone: '',
      name: ''
    }
  },
computed: {
    ...mapGetters(["getWxUserInfo","getUserInfo"]),
  },
  mounted() {
   
  
  },
  methods: {
    handleChangeName(c) {
      console.log(c)
      this.name=c
    },
    handleChangephone(c) {
      this.phone=c
    },
    changphone(v){
     
      updateUserDetailsApi({
        name: this.name,
        phone:this.phone
      }).then(data=> {
        if (data.data.code==200){
            this.$store.commit('SET_UserInfo', data.data.data)     
         } else  {
           Taro.showToast({
          title:data.data.message,
          duration:2000, 	  
      })

         }
         this.isopens = false
      })
    },
    showPdf() {
      Taro.downloadFile({
  // 示例 url，并非真实存在
  url: 'http://15366728352.uicp.top/pic/pdf.pdf',
  success: function (res) {
    const filePath = res.tempFilePath
    Taro.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('打开文档成功')
      }
    })
  }
})
      
    },
    openxy() {
this.isopen=true
    },
    closes() {
      this.isopens=false
    },
    close() {
      this.isopen=false
    },
    updatep() {
      this.isopens = true
    },
    getPhoneNumber (e) {
      if (e.detail.errMsg=='getPhoneNumber:ok') {
        checksession().then(()=>{
          //调用解析
          analysisPhoneApi({encryptedData: e.detail.encryptedData, iv:e.detail.iv}).then(data=>{
            
            registerWxUserApi({phone:data.data.data, openId:this.getUserInfo.openId,userType:1,name:this.getWxUserInfo.nickName}).then((datas)=>{
              if (datas.data.code==200){
                this.$store.commit('SET_UserInfo', datas.data.data)
                
              } else {
                Taro.showToast({
                    title:datas.data.message,
                    duration:2000, 	  
                })
              }
              this.isopen=false
              
            })
          })
        }).catch(err=> {
          loginToGetToken1().then(()=>{
            //调用解析
            analysisPhoneApi({encryptedData: e.detail.encryptedData, iv:e.detail.iv}).then(data=>{
            
            registerWxUserApi({phone:data.data.data, openId:this.getUserInfo.openId,userType:1,name:this.getWxUserInfo.nickName}).then((datas)=>{
            
              if (datas.data.code==200){
                this.$store.commit('SET_UserInfo', datas.data.data)
                
              } else {
                Taro.showToast({
                    title:datas.data.message,
                    duration:2000, 	  
                })
              }
              this.isopen=false
              
            })
          })
            
          })
        })
      
      } else {

      }
    console.log(e.detail.errMsg)
    
    }
  }
}
</script>

<style lang="scss">
.persondetail{
  .item{
    border-bottom: 1px solid #dfdfdf;
    height: 80px;
  }
}
</style>