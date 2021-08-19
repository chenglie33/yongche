<template>
  <view class="suggestion">
    <view class="panel flexBox flex-col">
      <AtTextarea
        placeholder="输入留言或建议..."
        style="background-color:rgba(0, 0, 0, 0.05)"
      />
    </view>
  </view>
</template>
<script>
import { AtTextarea } from 'taro-ui-vue'
export default {
  name:'Suggestion',
  components:{AtTextarea}
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