<template>
  <view>
    <AtFloatLayout
      :is-opened="isopen"
     
      :on-close="handleClose"
    >
      <textarea
        v-show="isopen"
        v-model="req.refuseDetails"
        placeholder="拒绝理由"
        style="height:300px"
        :onInput="handleChange"
      />
      <AtButton
        :disabled="!req.refuseDetails"
        :on-click="sub"
        type="primary"
      >
        提交
      </AtButton>
    </AtFloatLayout>
  </view>
</template>
<script>
import { AtFloatLayout, AtButton } from 'taro-ui-vue'
import {driverRefuseOrderReceivingApi} from '@/api/apilist'
export default {
  components:{AtFloatLayout,AtButton},
  
  data() {
    return{
      req:{
        refuseDetails:''
      },
      id:'',
      isopen:false
    }
  },
  methods:{
    show(id) {
      this.id = id
      this.isopen = true
    },
    handleClose() {

    },
    handleChange() {

    },

    sub() {
      this.req.orderId = this.id
      driverRefuseOrderReceivingApi(this.req).then(()=>{
        this.$bus.trigger('success')
        this.isopen=false
        this.$emit('successReject')
      })
    }
  }
  
}
</script>
<style lang="scss">

</style>