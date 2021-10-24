<template>
  <AtForm>
    <AtInput 
      name="bank" 
      title="开户行" 
      type="text" 
      
      :value="req.bank"
      :on-change="handleChange" 
    />
    <AtInput 
      name="bankNum" 
      title="银行卡" 
      type="text" 
     
      :value="req.bankNum"
      :on-change="handleChangebankNum" 
    />
    <AtInput 
      name="companyName" 
      title="公司名" 
      type="text" 
      
      :value="req.companyName"
      :on-change="handleChangecompanyName" 
    />
    <AtInput 
      name="address" 
      title="地址" 
      type="text" 
      
      :value="req.address"
      :on-change="handleChangecompanyNameaddress" 
    />
    <AtInput 
      name="phone" 
      title="电话" 
      type="text" 
      
      :value="req.phone"
      :on-change="handleChangecompanyNamephone" 
    />
    <AtInput 
      name="taxNum" 
      title="税号" 
      type="text" 
      
      :value="req.taxNum"
      :on-change="handleChangecompanyNametaxNum" 
    />
    <AtButton
      type="primary"
      form-type="submit"
      :on-click="onSubmit"
    >
      提交
    </AtButton>
  </AtForm>
</template>

<script>
import { AtForm, AtInput, AtButton } from 'taro-ui-vue'
import {invoicingApi} from '@/api/apilist'
import Taro from '@tarojs/taro'
export default {  
components: {
    AtForm, 
    AtInput, 
    AtButton
  },
  data() {
    return {
      req: {
        bank: '',
        bankNum: '',
        companyName: '',
        address: '',
        phone: '',
        taxNum: ''


        }
      }
  },
  methods: {
    invoicing() {
      this.req.orderId = Taro.getCurrentInstance().router.params.id
      invoicingApi(this.req).then(data=> {
        console.log(data)
        if (data.data.code!==200) {
          Taro.showToast({
            icon:'none',
            title: '接口异常',
            duration:2000, 	  
          })
        } else {
          this.$bus.trigger('successorder')
          Taro.navigateBack({
            delta: 1
          })
        }
      })
    },
    handleChange (value) {
      this.req.bank = value
    },
    handleChangebankNum (value) {
      this.req.bankNum = value
    },
    handleChangecompanyName (value) {
      this.req.companyName = value
    },
    handleChangecompanyNameaddress (value) {
      this.req.address = value
    },
    handleChangecompanyNamephone (value) {
      this.req.phone = value
    },
    handleChangecompanyNametaxNum (value) {
      this.req.taxNum = value
    },
    onSubmit () {
      if (!this.req.phone || !this.req.taxNum || !this.req.companyName || !this.req.address || !this.req.bankNum|| !this.req.bank){
        Taro.showToast({
          icon:'none',
          title: '数据不可为空',
          duration:2000, 	  
        })
        return
      }
      this.invoicing()
    },
    onReset (event) {
      this.value = ''
    }
  }, 
}

</script>

<style>

</style>