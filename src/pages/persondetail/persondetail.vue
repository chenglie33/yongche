<template>
  <view class="persondetail flexBox flex-col">
    <view class="flexBox flex-row item flex-middle">
      <view class="pac-pl12x">
        姓名
      </view>
      <view class="pac-pl24x">
        {{ getWxUserInfo.nickName }}
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
        items
      </view>
      <view class="pac-pl24x pac-pr24x">
        <view class="fR">
          <AtButton
            size="small"
            type="primary"
            open-type="getPhoneNumber"
            :on-get-phone-number="getPhoneNumber"
          >
            获取电话
          </AtButton>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {mapGetters} from 'vuex'
import { AtButton } from 'taro-ui-vue'
export default {
  components: {
    AtButton
  },
computed: {
    ...mapGetters(["getWxUserInfo"]),
  },
  methods: {
    getPhoneNumber (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
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