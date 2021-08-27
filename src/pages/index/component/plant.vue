<template>
  <view class="flexBox flex-col plant">
    <flotlay
      ref="flotlay"
      @ok="selectStart"
    />
    <AuDia ref="AuDia" />
    <SwitchTab
      class="pac-mt24x pac-mb24x"
      :list-show="['送我去机场', '到机场接我']"
      @swtichChange="swtichChange"
    />
    <view
      v-show="switchCurrent === '送我去机场'"
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
          :src="jichang"
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
          请选择机场
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
      v-show="switchCurrent === '到机场接我'"
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
        <view class="greycolor">
          选择出发地址
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
            v-if="mulitSelectorValues.length > 3"
            class="demo-list-item__value fR"
          >
            {{
              `${multiSelector[0][mulitSelectorValues[0]]} ${
                multiSelector[1][mulitSelectorValues[1]]
              } ${multiSelector[2][mulitSelectorValues[2]]} ${
                multiSelector[3][mulitSelectorValues[3]]
              } ${multiSelector[4][mulitSelectorValues[4]]}`
            }}
          </view>
          <view
            v-else
            class="fR"
            style="color:rgba(205, 205, 205, 1)"
          >
            航班时间
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
          :src="hangban"
        />
      </view>
      <AtInput
        class="text-right"
        name="flightNum"
        type="text"
        placeholder="输入航班号"
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
          v-if="!dataCar"
          class="greycolor fR"
        >
          选择车型
        </view>
        <view
          v-else
          class=" fR"
        >
          {{ dataCar.carNum }}
        </view>
      </view>
      <view
        class="iconLeft colorArr at-icon at-icon-chevron-right flex-middle flexBox"
      />
    </view>
    <!-- <view class="flexBox flex-row formitem flex-middle">
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="mingzi"
        />
      </view>
      <AtInput
        class="text-right"
      
        type="text"
        placeholder="输入您的名字"
        :value="value"
        :on-change="handleChange"
      />
      <view class="iconLeft colorArr flex-middle flexBox" />
    </view> -->

    <!-- <view class="flexBox flex-row formitem flex-middle">
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
    </view> -->

    <!-- <view class="flexBox flex-row formitem flex-middle">
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
      text="请输入完整信息在下单"
      :has-mask="false"
    />
  </view>
</template>
<script>
import Taro, { Events } from "@tarojs/taro";
import dizhi from "../../../assets/dizhi@2x.png";
import address from "../../../assets/address.png";
import jichang from "../../../assets/jichang@2x.png";
import riqi from "../../../assets/riqi@2x.png";
import hangban from "../../../assets/hangban@2x.png";
import chexing from "../../../assets/chexing@2x.png";
import mingzi from "../../../assets/mingzi@2x.png";
import shoujihao from "../../../assets/shoujihao@2x.png";
import shenfenzheng from "../../../assets/shenfenzheng@2x.png";
import { AtInput, AtButton,AtToast } from "taro-ui-vue";
import SwitchTab from "../../../components/SwitchTab.vue";
import AuDia from "../../../components/AuDia.vue";
import { getWxUserAddressListApi,confirmOrderApi } from "@/api/apilist";
import { checkPermission, regionName } from "@/utils/lib.js";
import flotlay from "./flotlay.vue";

export default {
  name: "Plant",
  components: {
    AtInput,
    SwitchTab,
    AuDia,
    flotlay,
    AtButton,AtToast
  },
  data() {
    return {
      showT: false,
      events: null,
      dataCar: null,
      airportname: "",
      airport: "",
      dizhi,
      address,
      riqi,
      jichang,
      hangban,
      chexing,
      mingzi,
      shoujihao,
      shenfenzheng,
      flightNum: "",
      multiSelector: [],
      mulitSelectorValues: [0, new Date().getMonth()],
      yeararr: [],
      yearSelect: null,
      monthSelect: new Date().getMonth() + 1 + "月",
      switchCurrent: "送我去机场",
      cartypeList: [["小巴（少于6人）", "中巴（6-20人）", "大巴（45人以下）"]],
      cartypeval: null,
      startPlace: "",
      startObj: {}
    };
  },
  watch: {
    switchCurrent(val) {}
  },
  mounted() {
    setTimeout(() => {
      this.getWxUserAddressList();
    }, 2000);

    this.$bus.on("eventAir", this.airFun);
    this.$bus.on("eventbus", this.busFun);
  },
  destroyed() {
    this.$bus.off("eventAir");
    this.$bus.off("eventbus");
  },
  created() {
    this.initData();
  },
  methods: {
    regionName,
    confirm(){
      let req = {}
      try {
        req.carNum = this.dataCar.carNum
        req.flightNum = this.flightNum
        req.userId = this.$store.state.UserInfo.userId
        req.userName = this.$store.state.UserInfo.userName
        req.orderType = 1
        let year = this.multiSelector[0][this.mulitSelectorValues[0]].slice(0, this.multiSelector[0][this.mulitSelectorValues[0]].length-1).toString()
        let month = this.multiSelector[1][this.mulitSelectorValues[1]].slice(0, this.multiSelector[1][this.mulitSelectorValues[1]].length-1).toString()
        let day = this.multiSelector[2][this.mulitSelectorValues[2]].slice(0, this.multiSelector[2][this.mulitSelectorValues[2]].length-1).toString()
        let hour = this.multiSelector[3][this.mulitSelectorValues[3]].slice(0, this.multiSelector[3][this.mulitSelectorValues[3]].length-1).toString()
        let min = this.multiSelector[4][this.mulitSelectorValues[4]].slice(0, this.multiSelector[4][this.mulitSelectorValues[4]].length-1).toString()
        req.startTime = `${year}-${month.length===1? '0'+month:month.length}-${day.length===1? '0'+day:day.length} ${hour.length===1? '0'+hour:hour.length}:${min.length===1? '0'+min:min.length}:00`

        if(this.switchCurrent==='送我去机场') {
          req.startAreaCode = this.startObj.areaCode
          req.startAddress = this.startObj.addressDetails
          req.endAreaCode = this.airport
          req.endAddress = this.airportname
        } else {
          req.startAreaCode = this.airport
          req.startAddress = this.airportname
          req.endAreaCode = this.startObj.areaCode
          req.endAddress = this.startObj.addressDetails
        }
      } catch(err){
        console.log(err)
        this.showT=true
        setTimeout(()=>{
          this.showT=false
        },2000)
      }
      
     
      if(!req.carNum || !req.userId || !req.flightNum || !req.userName || !req.startTime || !req.startAreaCode || !req.startAddress || !req.endAreaCode || !req.endAddress) {
        this.showT=true
        setTimeout(()=>{
          this.showT=false
        },2000)
        return
      }
      confirmOrderApi(req).then(data=> {
        Taro.navigateTo({url: "../orderstatus/orderstatus"})
      })
    },
    busFun(data) {
      console.log(data);
      this.dataCar = data;
    },
    selectStart(data) {
      if (data) {
        this.startPlace = regionName(data.areaCode) + data.addressDetails;
        this.startObj = data;
      }
    },
    selectChufa() {
      this.$refs.flotlay.show();
    },
    selectCar() {
      Taro.navigateTo({ url: "../carlist/carlist?event=eventbus" });
    },
    getWxUserAddressList() {
      getWxUserAddressListApi().then(data => {
        if (checkPermission(data)) {
        } else {
          this.$refs.AuDia.show();
        }
      });
    },
    airFun(x, y) {
      this.airport = x;
      this.airportname = y;
    },
    chooseAir() {
      Taro.navigateTo({
        url: "../addressSearch/addressSearch?type=1&event=eventAir"
      });
    },
    swtichChange(val) {
      this.switchCurrent = val;
    },
    handleChange(v) {
      console.log(v)
      this.flightNum = v
    },
    cartypeListchange(c) {
      this.cartypeval = c.detail.value;
    },
    handleMulitChange(c) {
      this.mulitSelectorValues = c.detail.value;
    },
    handleColumnChange(c) {
      if (c.detail.column === 0) {
        this.yearSelect = this.multiSelector[0][c.detail.value];
        this.monthSelect =
          this.monthSelect ||
          this.multiSelector[1][this.mulitSelectorValues[1]];
      }
      if (c.detail.column === 1) {
        this.yearSelect =
          this.yearSelect || this.multiSelector[0][this.mulitSelectorValues[0]];
        this.monthSelect = this.multiSelector[1][c.detail.value];
      }
      this.monthSelect =
        this.monthSelect.indexOf("月") !== -1
          ? this.monthSelect.slice(0, this.monthSelect.length - 1)
          : this.monthSelect;
      let dayarr = [];
      if (c.detail.column == 1 || c.detail.column == 0) {
        console.log(
          this.yearSelect.slice(0, this.yearSelect.length - 1),
          this.monthSelect
        );
        let monlen = this.getMonthLen(
          this.yearSelect.slice(0, this.yearSelect.length - 1),
          this.monthSelect
        );
        for (let i = 1; i < monlen + 1; i++) {
          dayarr.push(`${i}日`);
        }
        this.multiSelector[2] = dayarr;
        this.multiSelector = JSON.parse(JSON.stringify(this.multiSelector));
        console.log(this.multiSelector[2].length);
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
      let houerarr = [];
      let dayarr = [];
      let monarr = [];
      let yeararr = [];

      for (let i = 0; i < 10; i++) {
        yeararr.push(`${year + i}年`);
      }
      this.yeararr = yeararr;
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
