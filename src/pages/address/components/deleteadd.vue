<template>
  <AtModal :is-opened="isopen">
    <AtModalHeader>标题</AtModalHeader>
    <AtModalContent>
      你确定删除此地址？
    </AtModalContent>
    <AtModalAction>
      <button @tap="isopen=false">
        取消
      </button> <button @tap="okdo">
        确定
      </button>
    </AtModalAction>
  </AtModal>
</template>
<script>
import {delWxUserAddressApi} from '@/api/apilist'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui-vue'
export default {
  components: {AtModal, AtModalHeader, AtModalContent, AtModalAction},
  data() {
    return{isopen:false,
    data:{}
    }
  },
  methods: {
    show(data){
      this.isopen = true
      this.data = data
    },
    okdo() {
      delWxUserAddressApi({id: this.data.id}).then(()=>{
        this.isopen = false
        this.$emit('success')
      })
    }
  }
  
}
</script>