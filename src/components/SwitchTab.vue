<template>
  <view
    class="flexBox flex-row switchWrap posR"
    @tap="changeSwitch"
  >
    <view class="flex-1 centerTetx">
      {{ listShow[0] }}
    </view>
    <view class="flex-1 centerTetx">
      {{ listShow[1] }}
    </view>
    <view
      class="switchWrap-btn posA"
      :class="[currentTitle===listShow[0]?'switchWrap-btn-lf':'switchWrap-btn-lr']"
    >
      {{ currentTitle }}
    </view>
  </view>
</template>
<script>
export default {
  name:'Switchtab',
  props:['listShow'],
  data(){
    return {
      currentTitle: this.listShow[0],
    }
  },
  methods: {
    changeSwitch() {
      console.log(this.currentTitle,this.listShow)
      if(this.currentTitle===this.listShow[0]){
        this.currentTitle = this.listShow[1]
      } else {
        this.currentTitle = this.listShow[0]
      }
      this.$emit('swtichChange', this.currentTitle)
    }
  }

}
</script>
<style lang='scss'>
.switchWrap{
  width: 100%;
  height: 80px;
  background-color: #EEEEEE;
  border-radius: 80px;
  padding: 4px;
  box-sizing: border-box;
  .switchWrap-btn{
    width: 50%;
    height: 72px;
    border-radius: 72px;
    background-color: #fff;
    text-align: center;
    line-height: 72px;
    color: rgba(47, 128, 246, 1);
    
    transition: transform .2s;
  }
  .switchWrap-btn-lf {
    transform: translateX(0);
  }
  .switchWrap-btn-lr {
    transform: translateX(100% - 4);
  }
  .centerTetx{
    text-align: center;
    line-height: 80px;
    color: rgba(146, 158, 174, 1);
  }
}
</style>