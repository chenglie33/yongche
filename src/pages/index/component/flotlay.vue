<template>
  <AtFloatLayout 
    :is-opened="isopen" 
    :on-close="handleClose"
  >
    <view class="flexBox flex-row">
      <view class="flex-1">
        <view @tap="cancel">
          取消
        </view>
      </view>
      <view class="flex-1">
        <view
          class="fR"
          style="color:rgba(47, 128, 246, 1)"
          @tap="ok"
        >
          确定
        </view>
      </view>
    </view>
    <view class="flexBox flex-col pac-mt12x">
      <view
        v-for="item in listAdd"
        :key="item.id"
        class="selectadd flexBox flex-middle"
        :class="{activeitem: active===item.id}"
        @tap="select(item)"
      >
        {{ regionName(item.areaCode) }}{{ item.addressDetails }}
      </view>
    </view>
  </AtFloatLayout>
</template>
<script>
import { AtButton,AtFloatLayout } from "taro-ui-vue";
import Taro, { Events } from '@tarojs/taro'
import {getWxUserAddressListApi} from '@/api/apilist'
import {regionName} from '@/utils/lib'
export default {
  components: {AtButton,AtFloatLayout},
  data() {
    return {
      isopen: false,
      listAdd: [],
      active: null,
      activeData: null
    }
  },
  methods: {
    ok() {
      this.$emit('ok', this.activeData)
      this.isopen = false
      Taro.showTabBar()
    },
    cancel() {
      this.isopen = false
       Taro.showTabBar()
    },
    show(){
      this.isopen = true
      this.getList()
      Taro.hideTabBar()
    },
    select(data) {
      this.active = data.id
      this.activeData = data
    },
    regionName,
    getList() {
       getWxUserAddressListApi().then(data=>{
        this.listAdd = data.data.data
      })
    },
    handleClose() {

      this.isopen = false
      this.active = null
      this.activeData = null
      Taro.showTabBar()
    }
  }
}
</script>
<style lang="scss">
.selectadd{
  padding: 40px;
  border-bottom: 1px solid #dfdfdf;
  &.activeitem{
    background: rgba(47, 128, 246, .1);
  }
}

</style>