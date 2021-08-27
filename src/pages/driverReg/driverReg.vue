<template>
  <view class="pac-p20x regpanel">
    <view class="regpanel">
      <AtForm>
        <AtInput 
          name="value" 
          title="姓名" 
          type="text" 
          placeholder="请输入姓名" 
          :value="req.name"
          :on-change="handleChangeName" 
        />
        <AtInput 
          name="value" 
          title="电话" 
          type="text" 
          placeholder="请输入电话" 
          :value="req.phone"
          :on-change="handleChangePhone" 
        />
        <AtInput 
          name="value" 
          title="身份证" 
          type="text" 
          placeholder="请输入身份证" 
          :value="req.idNumber"
          :on-change="handleChangeid" 
        />
        <view
          class="example-item flexBox flex-row flex-middle"
          style="height:48px"
        >
          <view
            class="pac-pl18x"
            style="width:90px"
          >
            公司
          </view>
          <picker
            mode="selector"
            :range="companyNameList"
            :value="req.companyName"
            @change="companyNameChange"
          >
            <view class="demo-list-item  flex-1">
              <view
                v-if="req.companyName.length===0"
                class="demo-list-item__label greycolor fR"
              >
                请选择公司
              </view>
              <view class="demo-list-item__label  fR">
                {{ companyNameList[req.companyName[0]] }}
              </view>
            </view>
          </picker>
        </view>
        <view
          class="example-item flexBox flex-row flex-middle"
          style="height:148px"
        >
          <view
            class="pac-pl18x"
            style="width:90px"
          >
            头像
          </view>
          <AtImagePicker
            
            :count="1"
            :files="files"
            :multiple="false"
            :on-change="onChange"
            :on-image-click="onChange"
          />
        </view>
      
        <AtButton
          type="primary"
          form-type="submit"
          :on-click="onSubmit"
        >
          提交
        </AtButton>
      </AtForm>
    </view>
  </view>
</template>
<script>
import { AtForm,AtInput, AtButton, AtImagePicker } from 'taro-ui-vue'
import {getCompanyListApi} from '@/api/apilist'
export default {
  components: {
    AtForm, AtInput, AtButton ,AtImagePicker
  },
  data() {
    return {
      req: {
        name: '',
        phone: '',
        idNumber: '',
        companyId: '',
        photo: '',
        companyName: [],
      },
      files: [{ type: 'btn' }],
      companyNameList: [],
      companyNameListObj: {}
    }
  },
  mounted() {
    getCompanyListApi().then(data=>{
      console.log(data.data.data)
      let companyNameList = []
      let companyNameListObj = {}
      data.data.data.map(item=>{
        companyNameList.push(item.companyName)
        companyNameListObj[item.companyName] = item.id
      })
      this.companyNameListObj =companyNameListObj
      this.companyNameList = companyNameList
    })
  },
  methods: {
    handleChangeName (value = 'value') {
      this.req.name = value
    },
    handleChangePhone (value = 'value') {
      this.req.phone = value
    },
    handleChangeid (value = 'value') {
      this.idNumber = value
    },
    companyNameChange(e) {
      this.req.companyId = this.companyNameListObj[this.companyNameList[e.detail.value]]
      this.req.companyName = [e.detail.value]
    },
    onSubmit (event) {
      console.log(this.value)
    },
    onChange(v) {
      
      if(isNaN(v)) {
        console.log(22,v)
        if (v.length>2){
          console.log(11)
          v.splice(1,1)
          this.files = v
        } else {
          this.files = v
        }
        
      } 
      console.log(v)
      this.files = JSON.parse(JSON.stringify(this.files))
      
    }
  
  }
  
}
</script>
<style lang="scss">

</style>