<template>
  <view class="picker-page">
    <picker-view
      indicator-style="height: 50px;"
      :value="source.value"
      :style="{width: source.item.length < 4 ? '80%': '100%'}"
      @change="onChange"
    >
      <picker-view-column
        v-for="(item, index) in source.item"
        :key="index"
      >
        <view
          v-for="time in item"
          :key="time"
        >
          {{ time }}
        </view>
      </picker-view-column>
    </picker-view>
    <view class="handle">
      <button
        class="cancel"
        type="default"
        size="default"
        :on-click="onCancel"
      >
        取消
      </button>
      <button
        class="confirm"
        type="primary"
        size="default"
        :on-click="onConfirm"
      >
        确定
      </button>
    </view>
  </view>
</template>

<script>
import Taro, { Component } from '@tarojs/taro'
// import { View, PickerView, PickerViewColumn, Button } from '@tarojs/components'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import format from './format'
dayjs.extend(customParseFormat)
export default {
  props: ["dateTime",'mode'],
  data() {
    return {
      value: [],
      source: { value: [], item: [] },
      selected: [],
    }
  },
  mounted() {

    const source = this.dateTime && format(this.dateTime, dayjs()) || { value: [], item: [] }
  
    this.selected = this.dateTime
    this.source = source

    // this.onInitial()
  },
  methods:{
    onChange(e) {
        // this.setState({ value: e.detail.value })
        this.value = e.detail.value
    },
    onConfirm(){
      console.log(this.getDayjs(this.mode))
  

    },
     onCancel() {
  
  },
    onInitial()  {
    // const { onInitial, mode } = this.props
    // onInitial && onInitial(this.getDayjs(this.mode))
  },
  getToken(mode) {
    return {
      'year': 'YYYY年',
      'month': 'M月',
      'day': 'D日',
      'hour': 'H时',
      'minute': 'm分',
      'second': 's秒',
    }[mode]
  },
  getDayjs(mode = 'unix')  {
    // let { value, source, selected: dateTime } = this.state
    let value = this.value
    let source = this.source
    let dateTime = this.selected
    if (value.length === 0) value = [...source.value]
    let time = '', token = ''
    for (let i = 0; i < dateTime.length; i++) {
      const select = source.item[i][value[i]]
      time += (select === '今天' ? dayjs().format('M月D日') : select) + '-'
      token += (dateTime[i].format || this.getToken(dateTime[i].mode)) + '-'
    }
    return dayjs(time, token)[mode]()
  }
  }
}
</script>

<style lang="scss" >


.picker-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  picker-view {
    width: 100%;
    height: 280PX;
    picker-view-column {
      text-align: center;
      font-size: 16PX;
      view {
        line-height: 50Px;
      }
    }
  }
  .handle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70PX;
    button {
      height: 40PX;
      font-size: 16PX;
      padding: 0 40PX 0 40PX;
      margin-left: 10PX;
      margin-right: 10PX;
    }
    .confirm {
      background-color: #07C160;
    }
    .cancel {
      background-color: #F2F2F2;
      color: #1AAD19;
    }
  }
}
</style>