<template>
  <view class="flexBox flex-col plant">
    <SwitchTab
      class="pac-mt24x pac-mb24x"
      :list-show="['送我去火车站', '到火车站接我']"
      @swtichChange="swtichChange"
    />
    <view
      v-if="switchCurrent==='送我去火车站'"
      class="flexBox flex-row formitem flex-middle"
    >
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="dizhi"
        />
      </view>
      <AtInput
        class="text-right"
        name="value"
        type="text"
        placeholder="出发地址"
        :value="value"
        :on-change="handleChange"
      />
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
      <AtInput
        class="text-right"
        name="value"
        type="text"
        placeholder="请选择火车站"
        :value="value"
        :on-change="handleChange"
      />
      <view
        class="iconLeft colorArr at-icon at-icon-chevron-right flex-middle flexBox"
      />
    </view>
    <view
      v-if="switchCurrent==='到火车站接我'"
      class="flexBox flex-row formitem flex-middle"
    >
      <view class="iconLeft">
        <image
          class="iconLeft"
          :src="dizhi"
        />
      </view>
      <AtInput
        class="text-right"
        name="value"
        type="text"
        placeholder="目的地址"
        :value="value"
        :on-change="handleChange"
      />
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
        name="value"
        type="text"
        placeholder="输入火车车次"
        :value="value"
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
      <picker
        class="flex-1"
        mode="multiSelector"
        :range="cartypeList"
        :value="cartypeval"
        @change="cartypeListchange"
      >
        <view class="demo-list-item flex-1">
          <view
            v-if="cartypeval"
            class="demo-list-item__value fR"
          >
            {{
              `${cartypeList[0][cartypeval]}`
            }}
          </view>
          <view
            v-else
            class="fR"
            style="color:rgba(205, 205, 205, 1)"
          >
            选择车型
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
    </view>
  </view>
</template>
<script>
import dizhi from "../../../assets/dizhi@2x.png";
import address from "../../../assets/address.png";
import huoche from "../../../assets/huoche@2x.png";
import riqi from "../../../assets/riqi@2x.png";
import checi from "../../../assets/checi@2x.png";
import chexing from "../../../assets/chexing@2x.png";
import mingzi from "../../../assets/mingzi@2x.png";
import shoujihao from "../../../assets/shoujihao@2x.png";
import shenfenzheng from "../../../assets/shenfenzheng@2x.png";
import { AtInput } from "taro-ui-vue";
import SwitchTab from "../../../components/SwitchTab.vue";
export default {
  name: "Plant",
  components: {
    AtInput,
    SwitchTab
  },
  data() {
    return {
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
      cartypeval: null
    };
  },
  watch: {
    switchCurrent(val) {

    }
  },
  created() {
    this.initData();
  },
  methods: {
    swtichChange(val) {
      console.log(val)
      this.switchCurrent = val
    },
    handleChange() {},
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
