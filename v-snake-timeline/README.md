# v-snake-timeline

<h2>Introduction</h2>
<p><code>v-snake-timeline</code> is a Vue.js component for displaying timelines in web applications, with a snake-shaped layout.</p>

[](https://fangzhouzhu.github.io/v-snake-timeline/v-snake-timeline.jpg)![在这里插入图片描述](https://fangzhouzhu.github.io/v-snake-timeline/v-snake-timeline.jpg)

<h2>Installation</h2>
<h3>NPM</h3>

```bash
npm install v-snake-timeline --save
```

<h3>Yarn</h3>

```bash
yarn add v-snake-timeline
```

<h2>Usage</h2>
<h3>Plugin</h3>

```javascript
import VSnakeTimeline from "v-snake-timeline";

import "v-snake-timeline/v-snake-timeline.css";

Vue.use(VSnakeTimeline);
```

<h3>Global Registration</h3>

```javascript
import { VSnakeTimeline } from "v-snake-timeline";

import "v-snake-timeline/v-snake-timeline.css";

Vue.component("VSnakeTimeline", VSnakeTimeline);
```

<h3>Local Registration</h3>

```javascript
import { VSnakeTimeline } from "v-snake-timeline";
import "v-snake-timeline/v-snake-timeline.css"

export default {
  components: {
    VSnakeTimeline
  },
```

Template

```javascript
 <v-snake-timeline
  :data="timeLineData"
  :columns="3"
  :line-width="2"
  :row-height="100"
  line-style="dashed"
>
  <template #line-top="{ item }">
    <span> {{ (item.time) }} </span>
  </template>
  <template #line-bottom="{ item }">
    <li>name: {{ item.name }}</li>
    <li>type: {{ item.type }}</li>
  </template>
</v-snake-timeline>

export default {
  data() {
    return {
      timeLineData: [
        {
          time: "2023-06-06 11:11:11",
          name: "A1",
          type: "Type1",
        }
        ...
      ]
    }
  }
}
```

Attributes
| Props| Type | Default | Description |
| ----------- |-------- | -------- | ------------------------------------------------------------------------------------------------ |
| data|Array | [] | The timeline data to display, Each object in the array have custom properties |
| columns|Number | 4 | Number of columns in a row |
| row-height|Number | 120 | Height of each row |
| line-width|Number | 2 | The width of the line|
| theme-color|String | "#ccc "| The color of the lines and the colors of the start and end icons|
| ratio-color|String | "#1e9bff" | The color of the item ratio|
| line-style|String | "solid" | The style of the line|

Methods
| Name | Params | Description |
| ---------------- | ---------- | ------------ |
| layoutRefresh | none |Refresh Layout

Slots

| Name        | Scope        | Description                                                 |
| ----------- | ------------ | ----------------------------------------------------------- |
| line-top    | {item,index} | Content above the line,Slot elements include item and index |
| line-bottom | {item,index} | Content below the line,Slot elements include item and index |
