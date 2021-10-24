<template>
  <!-- <map
    id="map"
    style="width: 100%; height: 300px;"
    :longitude="longitude"
    :latitude="latitude"
    scale="14"
    :markers="markers"
    :polyline="polyline"
    :show-location="true"
  /> -->
  <view>
    <TimePick
      mode="format"
      :date-time="dateTime"
    />
  </view>
</template>
<script>
// var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js'
import address from "@/assets/address.png";
import TimePick from '../../components/picker/TimePick.vue'
export default {
  components:{TimePick},
  data() {
    return {
      dateTime:[
      {mode: 'year', unit: '年', start: '2020'},
      {mode: 'month', unit: '月'},
      // { mode: 'day', duration: 30, unit: '日', humanity: true, format: 'M月D日' },
      {mode: 'day', unit: '日' },
      // { mode: 'hour', unit: ':00', format: 'H:s', selected: [8, 12, 16] },
      { mode: 'hour', unit: '时' },
      {mode: 'minute', fields: 1, unit: '分'},
      // {mode: 'second', fields: 30, unit: '秒'},
    ],
      longitude: 113.324520,
      latitude: 23.099994,
      qqmapsdk:null,
      markers: [{
        iconPath: address,
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color:"#FF0000DD",
        width: 2,
        dottedLine: true
      }]
    }
  },
  mounted() {
    this.qqmapsdk = new QQMapWX({
            key: 'PW7BZ-BD7K3-RIP3R-3ZIPQ-73EBJ-TVFWP'
        });
    setTimeout(() => {
      this.markers[0].latitude = 23
      this.markers = JSON.parse(JSON.stringify(this.markers))
      this.latitude = 23
    },5000)
  }
}
</script>
<style lang="scss">

</style>