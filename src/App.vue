<template>
  <div id="app">
    <VSnakeTimeLine :data="timeLineData" :columns="3" :line-width="2" :row-height="100" line-style="dashed">
      <template #line-top="{ item }">
        <span>
          {{ item.time }}
        </span>
      </template>
      <template #line-bottom="{ item }">
        <li>name: {{ item.name }}</li>
        <li>type: {{ item.type }}</li>
      </template>
    </VSnakeTimeLine>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
// import VSnakeTimeLine from "./package/v-snake-timeline.vue";
import { VSnakeTimeLine } from '../v-snake-timeline/v-snake-timeline.umd.js';
import '../v-snake-timeline/v-snake-timeline.css';
export default {
  name: "App",
  components: {
    VSnakeTimeLine,
  },
  data() {
    return {
      timeLineData: [
        {
          time: "2023-06-06 11:11:11",
          name: "A1",
          type: "Type1",
        },
        {
          time: "2023-06-07 11:11:11",
          name: "A2",
          type: "Type2",
        },
        {
          time: "2023-06-08 11:11:11",
          name: "A3",
          type: "Type3",
        },
        {
          time: "2023-06-09 11:11:11",
          name: "A4",
          type: "Type4",
        },
        {
          time: "2023-06-10 11:11:11",
          name: "A5",
          type: "Type5",
        },
        {
          time: "2023-06-11 11:11:11",
          name: "A6",
          type: "Type6",
        },
        {
          time: "2023-06-12 11:11:11",
          name: "A7",
          type: "Type7",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.timeLineData.push({
        time: "2023-06-06 11:11:11",
        name: "xx",
        type: "是",
        source: "along",
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
