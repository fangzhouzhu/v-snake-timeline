import VSnakeTimeline from "./v-snake-timeline.vue"; // 引入封装好的组件
const components = [VSnakeTimeline];

// 批量组件注册
const install = function (Vue) {
  components.forEach((com) => {
    Vue.component(com.name, com);
  });
};

export default install;
export { VSnakeTimeline };
