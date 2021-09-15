<template>
  <view class="flexBox flex-col plant">
    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="riqi"
        />
      </view>
      <picker
        class="flex-1"
        mode="selector"
        :range="selector"
        :value="selectorValue"
        @change="handleChange"
      >
        <view class="demo-list-item flex-1">
          <view class="demo-list-item__label fR" />
          <view class="demo-list-item__value fR">
            {{ selector[selectorValue] }}
          </view>
        </view>
      </picker>
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view>
    <view
      v-show="selectorValue==3"
      class="flexBox flex-row formitem flex-middle"
    >
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="riqi"
        />
      </view>
      <view class="flexBox flex-row flex-1">
        <picker
          class="flex-1 flex-end flexBox"
          mode="date"
          :disabled="true"
          :value="startTimes"
          @change="handleChangestart"
        >
          <view class="demo-list-item">
            <view class="demo-list-item__label">
              开始日期
            </view>
            <view class="demo-list-item__value">
              {{ startTime }}
            </view>
          </view>
        </picker>
        <view />
        <picker
          class="flex-1 flex-end flexBox"
          mode="selector"
          :range="selectorTime"
          :value="startTimeH"
          @change="handleChangeH"
        >
          <view class="demo-list-item">
            <view class="demo-list-item__label">
              开始时间
            </view>
            <view class="demo-list-item__value">
              {{ selectorTime[startTimeH] }}
            </view>
          </view>
        </picker>
      </view>

      
      
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view>
    <view
      v-show="selectorValue==3"
      class="flexBox flex-row formitem flex-middle"
    >
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="riqi"
        />
      </view>
      <view class="flexBox flex-row flex-1">
        <picker
          class="flex-1 flex-end flexBox"
          mode="date"
          :value="endTime"
          @change="handleChangeend"
        >
          <view class="demo-list-item">
            <view class="demo-list-item__label">
              结束日期
            </view>
            <view class="demo-list-item__value">
              {{ endTime }}
            </view>
          </view>
        </picker>
        <view />
        <picker
          class="flex-1 flex-end flexBox"
          mode="selector"
          :range="selectorTime"
          :value="endTimeH"
          @change="handleChangeHend"
        >
          <view class="demo-list-item">
            <view class="demo-list-item__label">
              结束时间
            </view>
            <view class="demo-list-item__value">
              {{ selectorTime[endTimeH] }}
            </view>
          </view>
        </picker>
        <view class="iconLeft colorArr flex-middle flexBox" />
      </view>
    </view>
  </view>
</template>

<script>
import riqi from "../../../assets/riqi@2x.png";
export default {
  props: ['startTime'],
  data() {
    return {
      riqi,
      selector: ['整天(8:00～18:00)', '上半天(8:00～12:00)', '下半天(12:00～18:00)', '时间段'],
      selectorTime: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
      selectorValue: 0,
      startTimeH:null,
      endTimeH: null,
      endTime: null,
      startTimes: null
    }
  },
  watch: {
    selectorValue(v){
      if (v!=3) {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1})
      } else {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1, startTimeH:this.startTimeH, endTime:this.endTime,endTimeH:this.endTimeH})
      }
      
    },
    startTimeH(v){
      if (this.selectorValue!=3) {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1})
      } else {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1, startTimeH:this.startTimeH, endTime:this.endTime,endTimeH:this.endTimeH})
      }
      
    },
    endTimeH(v){
       if (this.selectorValue!=3) {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1})
      } else {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1, startTimeH:this.startTimeH, endTime:this.endTime,endTimeH:this.endTimeH})
      }
      
    }, 
    endTime(v){
       if (this.selectorValue!=3) {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1})
      } else {
        this.$emit('changesData', {selectorValue:Number(this.selectorValue)+1, startTimeH:this.startTimeH, endTime:this.endTime,endTimeH:this.endTimeH})
      }
      
    }
  },
  mounted() {

  },
  methods:{
    handleChangeHend(v) {
       this.endTimeH = v.detail.value
    },
    handleChangeH(v) {
    
      this.startTimeH = v.detail.value
    },
    handleChange(v) {
      this.selectorValue = v.detail.value
    },
    handleChangestart(v) {
      this.startTime = v.detail.value
    },
    handleChangeend(v) {
      this.endTime = v.detail.value
    }
  }
}
</script>

<style lang='scss'>

</style>