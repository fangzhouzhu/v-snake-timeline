<template>
  <div v-if="timeLineData.length" class="snake-time-line-container" :style="{ paddingTop: lineWidthInt + 40 + 'px' }">
    <div v-for="(rowItem, rowItemIndex) in rowsNum" :key="rowItemIndex" class="row">
      <div :style="leftLineStyle(rowItemIndex)">
        <span class="arrow" :style="leftArrowStyle(rowItemIndex)" />
        <span class="start-ratio" :style="startRatioStyle(rowItemIndex)" />
      </div>
      <div class="center-warp" :style="centerWarpStyle">
        <div v-for="(item, i) in getCirculateData(timeLineData, rowItemIndex + 1)" :key="i" class="center-item-container"
          :style="
            centerItemStyle(
              getCirculateData(timeLineData, rowItemIndex + 1).length
            )
          ">
          <div class="center-item-warp">
            <span class="ratio" :style="ratioStyle" />
            <div :style="timeStyle">
              <slot name="line-top" :item="item" :index="rowItemIndex * columnsInt + i" />
            </div>
            <div class="line-bottom">
              <slot name="line-bottom" :item="item" :index="rowItemIndex * columnsInt + i" />
            </div>
          </div>
        </div>
      </div>
      <div :style="rightLineStyle(rowItemIndex)">
        <span class="arrow" :style="rightArrowStyle(rowItemIndex)" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VSnakeTimeLine",
  props: {
    data: {
      type: Array,
      default: () => [], //时间轴列表
    },
    columns: {
      type: [Number, String],
      default: 4, //每行展示X条数据
      validator: function (value) {
        return (isNaN(value) || value <= 0) ? 4 : parseInt(value);
      }
    },
    rowHeight: {
      type: [Number, String],
      default: 120,
      validator: function (value) {
        return (isNaN(value) || value <= 0) ? 120 : parseInt(value);
      }
    },
    lineWidth: {
      type: [Number, String],
      default: 2,
      validator: function (value) {
        return (isNaN(value) || value <= 0) ? 2 : parseInt(value);
      }
    },
    themeColor: {
      type: String,
      default: '#ccc',
    },
    ratioColor: {
      type: String,
      default: '#1e9bff',
    },
    lineStyle: {
      type: String,
      default: 'solid',
    }
  },
  data() {
    return {
      timeLineData: this.data,
      rowsNum: 0,
      columnsInt: parseInt(this.columns),
      rowHeightInt: parseInt(this.rowHeight),
      lineWidthInt: parseInt(this.lineWidthInt),
    };
  },
  computed: {
    startRatioStyle() {
      return (index) => {
        let style = {};
        if (index === 0) {
          style = {
            position: 'absolute',
            width: `${this.lineWidthInt + 8}px`,
            height: `${this.lineWidthInt + 8}px`,
            background: `${this.themeColor}`,
            borderRadius: '50%',
            left: '-5px',
            top: `${-this.lineWidthInt - 4}px`
          };
        }
        return style;
      };
    },
    // 中间内容
    centerItemStyle() {
      return (length) => {
        let style = {
          width: 100 / length + '%',
          height: `${this.rowHeightInt - this.lineWidthInt}px`,
          position: 'relative'
        };
        return style;
      };
    },
    timeStyle() {
      let style = {
        position: 'absolute',
        top: `${-this.lineWidthInt - 30}px`
      };
      return style;
    },
    ratioStyle() {
      const offset = 4;
      let style = {
        width: `${this.lineWidthInt + offset}px`,
        height: `${this.lineWidthInt + offset}px`,
        top: `${-this.lineWidthInt - 5 - offset / 2}px`,
        borderColor: `${this.ratioColor}`
      };
      return style;
    },
    leftArrowStyle() {
      return (index) => {
        let style = {};
        if (index === this.rowsNum - 1 && (index + 1) % 2 === 0) {
          const offset = 6;
          style = {
            top: `${-(this.lineWidthInt / 2 + offset + this.lineWidthInt)}px`,
            left: `${-this.lineWidthInt - offset}px`,
            borderTop: `${this.lineWidthInt + offset}px solid transparent`,
            borderRight: `${this.lineWidthInt + offset * 2}px solid ${this.themeColor}`,
            borderBottom: `${this.lineWidthInt + offset}px solid transparent`
          };
        }
        return style;
      };
    },
    rightArrowStyle() {
      return (index) => {
        let style = {};
        if (index === this.rowsNum - 1 && (index) % 2 === 0) {
          const offset = 6;
          style = {
            top: `${-(this.lineWidthInt / 2 + offset + this.lineWidthInt)}px`,
            right: `${-this.lineWidthInt - offset}px`,
            borderTop: `${this.lineWidthInt + offset}px solid transparent`,
            borderLeft: `${this.lineWidthInt + offset * 2}px solid ${this.themeColor}`,
            borderBottom: `${this.lineWidthInt + offset}px solid transparent`
          };
        }
        return style;
      };
    },
    centerWarpStyle() {
      let style = {
        borderTop: `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`,
      };
      return style;
    },
  },
  watch: {
    data: {
      handler(newVal) {
        this.initConfig()
        this.timeLineData = newVal;
        if (newVal.length) {
          let rows = Math.ceil(newVal.length / this.columnsInt);
          this.rowsNum = rows;
        }
        this.layoutRefresh()
      },
      immediate: true
    }
  },
  methods: {
    initConfig() {
      this.columnsInt = parseInt(this.columns)
      this.rowHeightInt = parseInt(this.rowHeight)
      this.lineWidthInt = parseInt(this.lineWidth)
    },
    getCirculateData(data, index) {
      let arr = data.slice(this.columnsInt * (index - 1), this.columnsInt * index);
      return arr;
    },

    // 左侧线条
    leftLineStyle(index) {
      let style = {
        width: '10%',
        border: `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`,
        borderRight: '0',
        height: `${this.rowHeightInt + this.lineWidthInt}px`,
        position: 'relative'
      };
      // 奇数
      if ((index + 1) % 2 === 0) {
        style.borderRadius = '100% 0 0 100%';
        style.marginBottom = `${-this.lineWidthInt}px`;
        // 最后一行
        if (index + 1 === this.rowsNum) {
          style.border = '0';
          style.borderTop = `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`;
          style.borderRadius = '0';
        }
      } else {
        // 偶数，无border
        style.border = '0';
        if (index === 0) {
          style.borderTop = `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`;
        }
      }
      return style;
    },
    rightLineStyle(index) {
      let style = {
        width: '10%',
        border: `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`,
        borderLeft: '0',
        height: `${this.rowHeightInt + this.lineWidthInt}px`,
        position: 'relative'
      };
      // 偶数行
      if ((index) % 2 === 0) {
        style.borderRadius = '0 100% 100% 0';
        style.marginBottom = `${-this.lineWidthInt}px`;
        if (index === 0) {
          style.marginBottom = `-${this.lineWidthInt}px`;
          style.borderRadius = '0 100% 100% 0';
        }
        // 最后一行
        if (index + 1 === this.rowsNum) {
          style.border = '0';
          style.borderTop = `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`;
          style.borderRadius = '0';
        }
      } else {
        // 奇数，无border
        style.border = '0';
        style.borderRadius = '0 100% 100% 0';
        style.marginBottom = `${-this.lineWidthInt}px`;
      }
      return style;
    },
    // 布局更新
    layoutRefresh() {
      this.timeLineData = []
      this.$nextTick(() => {
        this.timeLineData = this.data
      })
    }
  }
};
</script>

<style lang="scss">
.snake-time-line-container {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  .row {
    display: flex;
    position: relative;

    .center-warp {
      display: flex;
      width: 80%;

      .center-item-container {
        display: flex;
        justify-content: center;
      }

      .center-item-warp {
        margin: 0 auto;

        .ratio {
          position: absolute;
          border-radius: 50%;
          background: white;
          border: 5px solid #1e9bff;
          right: 50%;
          top: 0;
        }

        .line-bottom {
          margin-top: 10px;
        }
      }
    }

    .arrow {
      position: absolute;
    }
  }
}
</style>
