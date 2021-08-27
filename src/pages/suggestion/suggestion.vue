<template>
  <view class="suggestion">
    <view class="panel flexBox flex-col">
      <AtTextarea
        :value="detail"
        :on-change="handleChange"
        placeholder="输入留言或建议..."
        style="background-color:rgba(0, 0, 0, 0.05)"
      />
    </view>
    <AtButton
      type="primary"
      :on-click="submit"
      :disabled="!detail"
    >
      提交
    </AtButton>
  </view>
</template>
<script>
import Taro, { Events } from "@tarojs/taro";
import { AtTextarea ,AtButton} from 'taro-ui-vue'
import {addUserFeedbackApi} from '@/api/apilist'
export default {
  name:'Suggestion',
  components:{AtTextarea,AtButton},
  data() {
    return {
      detail:''
    }
  },
  methods: {
    handleChange(v) {
      this.detail = v
    },
    submit() {
      addUserFeedbackApi({
        userId:this.$store.state.UserInfo.userId,
        details:this.detail
      }).then(data=>{
        Taro.navigateBack({
          delta:1
        })
      })
    }
  }
}
</script>
<style lang="scss">
.suggestion{
  padding: 20px 0;
  background-color: RGBA(242, 245, 251, 1);
  box-sizing: border-box;
  .panel{
    width: 100%;
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
  }
}

</style>