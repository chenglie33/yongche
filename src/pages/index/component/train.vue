<template>
  <view class="flexBox flex-col plant">
    <flotlay
      ref="flotlay1"
      @ok="selectStart"
    />
    <AuDia
      ref="AuDia"
    />
    <Switch-tab
      class="pac-mt24x pac-mb24x"
      :list-show="['送我去火车站', '到火车站接我']"
      @swtichChange="swtichChange"
    />
    <view
      v-show="switchCurrent==='送我去火车站'"
      key="tra1"
      class="flexBox flex-row formitem flex-middle"
    >
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="dizhi"
        />
      </view>
      <view
        class="flex-1"
        @tap="selectChufa"
      >
        <view
          v-if="!startPlace"
          class="greycolor fR"
        >
          选择出发地址
        </view>
        <view
          v-else
          class=" fR"
        >
          {{ startPlace }}
        </view>
      </view>
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="address"
        />
      </view>
    </view>

    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="huoche"
        />
      </view>
      <view
        class="flex-1  "
        @tap="chooseAir"
      >
        <view
          v-if="!airport"
          class="fR greycolor"
        >
          请选择火车站
        </view>
        <view
          v-else
          class="fR"
        >
          {{ airportname }}
        </view>
      </view>
      <view
        class="iconLeft colorArr at-icon at-icon-chevron-right flex-middle flexBox"
      />
    </view>
    <view
      v-show="switchCurrent==='到火车站接我'"
      key="tra12"
      class="flexBox flex-row formitem flex-middle"
    >
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="dizhi"
        />
      </view>
      <view
        class="flex-1"
        @tap="selectChufa"
      >
        <view
          v-if="!startPlace"
          class="greycolor fR"
        >
          选择目的地
        </view>
        <view
          v-else
          class=" fR"
        >
          {{ startPlace }}
        </view>
      </view>
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="address"
        />
      </view>
    </view>
    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="riqi"
        />
      </view>
      <picker
        class="flex-1"
        mode="multiSelector"
        :range="multiSelector"
        :value="mulitSelectorValues"
        @change="handleMulitChange"
        @columnchange="handleColumnChange"
      >
        <view class="demo-list-item flex-1">
          <view
            v-if="mulitSelectorValues.length>3"
            class="demo-list-item__value fR"
          >
            {{
              `${multiSelector[0][mulitSelectorValues[0]]} ${
                multiSelector[1][mulitSelectorValues[1]]
              } ${
                multiSelector[2][mulitSelectorValues[2]]
              } ${
                multiSelector[3][mulitSelectorValues[3]]
              } ${
                multiSelector[4][mulitSelectorValues[4]]
              }`
            }}
          </view>
          <view
            v-else
            class="fR"
            style="color:rgba(205, 205, 205, 1)"
          >
            请选择到站日期和时间
          </view>
        </view>
      </picker>
      <view
        class="iconLeft colorArr at-icon at-icon-chevron-right flex-middle flexBox"
      />
    </view>

    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="checi"
        />
      </view>
      <AtInput
        class="text-right"
        name="flightNum"
        type="text"
        placeholder="输入火车车次"
        :value="flightNum"
        :on-change="handleChange"
      />
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view>
    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="chexing"
        />
      </view>
      <view
        class="flex-1"
        @tap="selectCar"
      >
        <view
          v-if="!lag"
          class="greycolor fR"
        >
          选择车型
        </view>
        <view
          v-else
          class=" fR"
        >
          已经选择
        </view>
      </view>
      <view
        class="iconLeft colorArr at-icon at-icon-chevron-right flex-middle flexBox"
      />
    </view>
    <timecom
      :start-time="timeFun()"
      @changesData="changesDatas"
    />
    <!-- <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="mingzi"
        />
      </view>
      <AtInput
        class="text-right"
        name="value"
        type="text"
        placeholder="输入您的名字"
        :value="value"
        :on-change="handleChange"
      />
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view>

    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="shoujihao"
        />
      </view>
      <AtInput
        class="text-right"
        name="value"
        placeholder="输入手机号"
        type="phone"
        :value="value"
        :on-change="handleChange"
      />
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view>

    <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="shenfenzheng"
        />
      </view>
      <AtInput
        class="text-right"
        name="value"
        type="idcard"
        placeholder="输入身份证号"
        :value="value"
        :on-change="handleChange"
      />
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view> -->
    总金额：{{ total }}元
    <AtButton
      :on-click="confirm"
      class="w100pct"
      type="primary"
      style="margin-top:10px;"
    >
      确定下单
    </AtButton>
    <AtToast
      :is-opened="showT"
      :text="errMessage"
      :has-mask="false"
    />
  </view>
</template>
<script>
import Taro, { Events } from "@tarojs/taro";
import dizhi from "../../../assets/dizhi@2x.png";
import address from "../../../assets/address.png";
import huoche from "../../../assets/huoche@2x.png";
import riqi from "../../../assets/riqi@2x.png";
import checi from "../../../assets/checi@2x.png";
import chexing from "../../../assets/chexing@2x.png";
import mingzi from "../../../assets/mingzi@2x.png";
import shoujihao from "../../../assets/shoujihao@2x.png";
import shenfenzheng from "../../../assets/shenfenzheng@2x.png";
import { AtInput, AtButton,AtToast } from "taro-ui-vue";
import SwitchTab from "../../../components/SwitchTab.vue";
import { checkPermission, regionName } from "@/utils/lib.js";
import { getWxUserAddressListApi,confirmOrderApi,getCostApi } from "@/api/apilist";
import AuDia from "../../../components/AuDia.vue";
import flotlay from "./flotlay.vue";
import timecom from './timecom.vue'
export default {
  name: "Plant",
  components: {
    timecom,
    AtInput,
    SwitchTab,
    AuDia,
    flotlay,
    AtButton,
    AtToast
  },
  data() {
    return {
      showT: false,
      flightNum:'',
       airportname: "",
      airport: "",
      dizhi,
      address,
      riqi,
      huoche,
      checi,
      chexing,
      mingzi,
      shoujihao,
      shenfenzheng,
      value: "",
      multiSelector: [],
      mulitSelectorValues: [0, new Date().getMonth()],
      yeararr:[],
      yearSelect: null,
      monthSelect: new Date().getMonth()+1 + '月',
      switchCurrent: '送我去火车站',
      cartypeList: [['小巴（少于6人）','中巴（6-20人）', '大巴（45人以下）']],
      cartypeval: null,
      startPlace: "",
      startObj: {},
      dataCar: [0,0,0,0],
      total:0,
      lag: false,
      changesData: {selectorValue:1},
      errMessage:''
    };
  },
  watch: {
    dataCar: {
      handler: function(v) {
        this.lag = false
        v.forEach((item,index)=> {
        if (item != 0) this.lag=true
        })
        this.getCost();
      },
      deep: true
    },
    switchCurrent(val) {
      this.getCost();
    },
    changesData: {
      handler: function(v) {
        this.getCost();
      },
      deep:true
    },
    startPlace(v){
      this.getCost();
    },
    airport(v){
      this.getCost();
    }
  },
  created() {
    this.initData();
  },
   mounted() {
    setTimeout(() => {
      // this.getWxUserAddressList();
    }, 2000);

    this.$bus.on("eventtrain", this.airFun);
    this.$bus.on("eventbusTrain", this.busFun);
  },
  destroyed() {
    this.$bus.off("eventtrain");
    this.$bus.off("eventbusTrain");
  },
  methods: {
    getCost(){
      let carTypeNumDtos = []
      this.dataCar.forEach((item,index)=> {
        if (item != 0) 
        carTypeNumDtos.push({
            carType: Number(index)+1,
            num: item
          })
      })
     if (this.startPlace&& this.airport&&this.changesData && this.changesData.selectorValue ) {
            if ((this.changesData.selectorValue ==4&& this.changesData.startTimeH!==null && this.changesData.endTimeH!==null && this.changesData.endTime!==null)||this.changesData.selectorValue !=4) {

              getCostApi({
            "configType": this.switchCurrent==='送我去火车站'?4:3,
           "endAreaCode": this.switchCurrent!=='送我去火车站' ? this.startObj.areaCode : this.airport,
          "startAreaCode": this.switchCurrent!=='送我去火车站' ? this.airport : this.startObj.areaCode,
            timeType:this.changesData.selectorValue,
  
         carTypeNums:carTypeNumDtos,
            startTime:this.timeFun() + ' ' + (Number(this.changesData.startTimeH)>9?this.changesData.startTimeH:`0${this.changesData.startTimeH}`) + ':00:00',
            endTime: this.changesData.endTime + ' ' + (Number(this.changesData.endTimeH)>9?this.changesData.endTimeH:`0${this.changesData.endTimeH}`) + ':00:00'
          }).then((data) => {
           if (data.data.code!==200) {
              this.errMessage='未配置此费用'
              this.total = 0
              this.showT=true
              setTimeout(()=>{
                this.showT=false
              },2000)
            } else {
  
              this.total = data.data.data.totalCost
            }
          })
            }
          }
    },
    changesDatas(changesData) {
       this.changesData = changesData
     },
     timeFun() {
       let time = ''
       if (this.mulitSelectorValues.length>3) {
         let year = this.multiSelector[0][this.mulitSelectorValues[0]].slice(0, this.multiSelector[0][this.mulitSelectorValues[0]].length-1).toString()
          let month = this.multiSelector[1][this.mulitSelectorValues[1]].slice(0, this.multiSelector[1][this.mulitSelectorValues[1]].length-1).toString()
          let day = this.multiSelector[2][this.mulitSelectorValues[2]].slice(0, this.multiSelector[2][this.mulitSelectorValues[2]].length-1).toString()
          console.log(this.mulitSelectorValues[1],this.multiSelector[1], month)
          time= `${year}-${month.length===1? '0'+month:month}-${day.length===1? '0'+day:day}`
       } 
       return time
     },
      confirm(){
      let req = {carTypeNums:[]}
      try {
        // req.carNum = this.dataCar.carNum
        req.flightNum = this.flightNum
        req.userId = this.$store.state.UserInfo.userId
        req.userName = this.$store.state.UserInfo.userName
        req.orderType = 2
        let year = this.multiSelector[0][this.mulitSelectorValues[0]].slice(0, this.multiSelector[0][this.mulitSelectorValues[0]].length-1).toString()
        let month = this.multiSelector[1][this.mulitSelectorValues[1]].slice(0, this.multiSelector[1][this.mulitSelectorValues[1]].length-1).toString()
        let day = this.multiSelector[2][this.mulitSelectorValues[2]].slice(0, this.multiSelector[2][this.mulitSelectorValues[2]].length-1).toString()
        let hour = this.multiSelector[3][this.mulitSelectorValues[3]].slice(0, this.multiSelector[3][this.mulitSelectorValues[3]].length-1).toString()
        let min = this.multiSelector[4][this.mulitSelectorValues[4]].slice(0, this.multiSelector[4][this.mulitSelectorValues[4]].length-1).toString()
        req.startTime = `${year}-${month.length===1? '0'+month:month.length}-${day.length===1? '0'+day:day.length} ${hour.length===1? '0'+hour:hour.length}:${min.length===1? '0'+min:min.length}:00`

        if(this.switchCurrent==='送我去火车站') {
          req.orderType = 4
          req.startAreaCode = this.startObj.areaCode
          req.startAddress = this.startObj.addressDetails
          req.endAreaCode = this.airport
          req.endAddress = this.airportname
        } else {
          req.orderType = 3
          req.startAreaCode = this.airport
          req.startAddress = this.airportname
          req.endAreaCode = this.startObj.areaCode
          req.endAddress = this.startObj.addressDetails
        }
      } catch(err){
        console.log(err)
       this.errMessage='请输入完整信息'
        this.showT=true
        setTimeout(()=>{
          this.showT=false
        },2000)
      }
      
     let lag = false
      this.dataCar.forEach((item,index)=> {
        if (item != 0) lag=true
        req.carTypeNums.push({
            carType: Number(index)+1,
            num: item
          })
      })
      if (!lag) {
        this.errMessage='请输入完整信息'
        this.showT=true
        setTimeout(()=>{
          this.showT=false
          
        },2000)
        return
      }
      if (this.changesData && this.changesData.selectorValue && this.changesData.selectorValue && this.changesData.startTimeH!==null && this.changesData.endTimeH!==null && this.changesData.endTime!==null) {
        req.timeType = this.changesData.selectorValue
        req.timeTypeStart =this.changesData.selectorValue==4?(this.timeFun() + ' ' + (Number(this.changesData.startTimeH)>9?this.changesData.startTimeH:`0${this.changesData.startTimeH}`) + ':00:00'):null
        req.timeTypeEnd = this.changesData.selectorValue==4?(this.changesData.endTime + ' ' + (Number(this.changesData.endTimeH)>9?this.changesData.endTimeH:`0${this.changesData.endTimeH}`) + ':00:00'):null
      } else {
        this.errMessage='请输入完整信息'
        this.showT=true
        setTimeout(()=>{
          this.showT=false
        },2000)
        return
      }
      if(!req.userId || !req.flightNum || !req.userName || !req.startTime || !req.startAreaCode || !req.startAddress || !req.endAreaCode || !req.endAddress) {
        this.errMessage='请输入完整信息'
        this.showT=true
        setTimeout(()=>{
          this.showT=false
        },2000)
        return
      }
      confirmOrderApi(req).then(data=> {
        if(data.data.code!=200){
          Taro.navigateTo({url: "../orderstatus/orderstatus?shibai=true"})
        }else {
          Taro.navigateTo({url: "../orderstatus/orderstatus"})
        }
      })
    },
    handleChange(v) {
      console.log(v)
      this.flightNum = v
    },
    busFun(data) {
      this.dataCar = data;
    },
    selectCar() {
       Taro.navigateTo({ url: `../SelectCar/SelectCar?event=eventbusTrain&daba=${this.dataCar[0]}&zhongba=${this.dataCar[1]}&shangwu=${this.dataCar[2]}&xiaoba=${this.dataCar[3]}` });
      // Taro.navigateTo({ url: "../carlist/carlist?event=eventbusTrain" });
    },
    getWxUserAddressList() {
      return new Promise((res,rej)=> {
      getWxUserAddressListApi().then(data => {
        if (checkPermission(data)) {
          res(true)
        } else {
          this.$refs.AuDia.show();
        }
      });
      })
    },
    airFun(x, y) {
      this.airport = x;
      this.airportname = y;
    },
    chooseAir() {
      Taro.navigateTo({
        url: "../addressSearch/addressSearch?type=2&event=eventtrain"
      });
    },
    selectStart(data) {
      if (data) {
        this.startPlace = regionName(data.areaCode) + data.addressDetails;
        this.startObj = data;
      }
    },
    selectChufa() {
      this.getWxUserAddressList().then(()=>{
        this.$refs.flotlay1.show();
      })
      
    },
    swtichChange(val) {
      console.log(val)
      this.switchCurrent = val
    },
    cartypeListchange(c) {
      console.log(c.detail.value);
      this.cartypeval = c.detail.value
    },
    handleMulitChange(c) {
      console.log(c.detail.value);
      this.mulitSelectorValues = c.detail.value
    },
    handleColumnChange(c) {
      if (c.detail.column === 0 ) {
        this.yearSelect = this.multiSelector[0][c.detail.value]
        this.monthSelect = this.monthSelect || this.multiSelector[1][this.mulitSelectorValues[1]]
      }
      if (c.detail.column === 1 ) {
        this.yearSelect = this.yearSelect || this.multiSelector[0][this.mulitSelectorValues[0]]
        this.monthSelect = this.multiSelector[1][c.detail.value]
      }
      this.monthSelect = this.monthSelect.indexOf('月')!==-1 ? this.monthSelect.slice(0, this.monthSelect.length-1):this.monthSelect
      let dayarr = []
      if (c.detail.column == 1 || c.detail.column == 0) {
        console.log(this.yearSelect.slice(0,this.yearSelect.length-1), this.monthSelect)
        let monlen = this.getMonthLen(this.yearSelect.slice(0,this.yearSelect.length-1), this.monthSelect);
        for (let i = 1; i < monlen + 1; i++) {
          dayarr.push(`${i}日`);
        }
        this.multiSelector[2]=dayarr;
        this.multiSelector = JSON.parse(JSON.stringify(this.multiSelector))
        console.log(this.multiSelector[2].length)
      }
    },
    getMonthLen(year, mon) {
      let date = new Date(year, mon, 0);
      return date.getDate();
    },
    initData() {
      let multiSelector = [];
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let minarr = [];
      let houerarr = []
      let dayarr = [];
      let monarr = [];
      let yeararr = [];

      for (let i = 0; i < 10; i++) {
        yeararr.push(`${year + i}年`);
      }
      this.yeararr = yeararr
      multiSelector.push(yeararr);
      for (let i = 1; i < 13; i++) {
        monarr.push(`${i}月`);
      }
      multiSelector.push(monarr);
      let monlen = this.getMonthLen(year, month);
      for (let i = 1; i < monlen + 1; i++) {
        dayarr.push(`${i}日`);
      }
      multiSelector.push(dayarr);
      for (let i = 1; i < 25; i++) {
        houerarr.push(`${i}时`);
      }
      multiSelector.push(houerarr);
      for (let i = 1; i < 60; i++) {
        minarr.push(`${i}分`);
      }
      multiSelector.push(minarr);
      this.multiSelector = multiSelector;
    }
  }
};
</script>
<style lang="scss">
.plant {
  .colorArr {
    color: rgba(205, 205, 205, 1);
    font-size: 50px;
  }
}
</style>
