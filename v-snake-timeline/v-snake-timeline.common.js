module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3831":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9a19":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_snake_timeline_vue_vue_type_style_index_0_id_43020273_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3831");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_snake_timeline_vue_vue_type_style_index_0_id_43020273_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_v_snake_timeline_vue_vue_type_style_index_0_id_43020273_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VSnakeTimeline", function() { return /* reexport */ v_snake_timeline; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"359c7afa-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/package/v-snake-timeline.vue?vue&type=template&id=43020273&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.timeLineData.length ? _c('div', {
    staticClass: "snake-time-line-container",
    style: {
      paddingTop: _vm.lineWidthInt + 40 + 'px'
    }
  }, _vm._l(_vm.rowsNum, function (rowItem, rowItemIndex) {
    return _c('div', {
      key: rowItemIndex,
      staticClass: "row"
    }, [_c('div', {
      style: _vm.leftLineStyle(rowItemIndex)
    }, [_c('span', {
      staticClass: "arrow",
      style: _vm.leftArrowStyle(rowItemIndex)
    }), _c('span', {
      staticClass: "start-ratio",
      style: _vm.startRatioStyle(rowItemIndex)
    })]), _c('div', {
      staticClass: "center-warp",
      style: _vm.centerWarpStyle
    }, _vm._l(_vm.getCirculateData(_vm.timeLineData, rowItemIndex + 1), function (item, i) {
      return _c('div', {
        key: i,
        staticClass: "center-item-container",
        style: _vm.centerItemStyle(_vm.getCirculateData(_vm.timeLineData, rowItemIndex + 1).length)
      }, [_c('div', {
        staticClass: "center-item-warp"
      }, [_c('span', {
        staticClass: "ratio",
        style: _vm.ratioStyle
      }), _c('div', {
        style: _vm.timeStyle
      }, [_vm._t("line-top", null, {
        "item": item,
        "index": rowItemIndex * _vm.columnsInt + i
      })], 2), _c('div', {
        staticClass: "line-bottom"
      }, [_vm._t("line-bottom", null, {
        "item": item,
        "index": rowItemIndex * _vm.columnsInt + i
      })], 2)])]);
    }), 0), _c('div', {
      style: _vm.rightLineStyle(rowItemIndex)
    }, [_c('span', {
      staticClass: "arrow",
      style: _vm.rightArrowStyle(rowItemIndex)
    })])]);
  }), 0) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/package/v-snake-timeline.vue?vue&type=template&id=43020273&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/package/v-snake-timeline.vue?vue&type=script&lang=js&
/* harmony default export */ var v_snake_timelinevue_type_script_lang_js_ = ({
  name: "VSnakeTimeLine",
  props: {
    data: {
      type: Array,
      default: () => [] //时间轴列表
    },

    columns: {
      type: [Number, String],
      default: 4,
      //每行展示X条数据
      validator: function (value) {
        return isNaN(value) || value <= 0 ? 4 : parseInt(value);
      }
    },
    rowHeight: {
      type: [Number, String],
      default: 120,
      validator: function (value) {
        return isNaN(value) || value <= 0 ? 120 : parseInt(value);
      }
    },
    lineWidth: {
      type: [Number, String],
      default: 2,
      validator: function (value) {
        return isNaN(value) || value <= 0 ? 2 : parseInt(value);
      }
    },
    themeColor: {
      type: String,
      default: '#ccc'
    },
    ratioColor: {
      type: String,
      default: '#1e9bff'
    },
    lineStyle: {
      type: String,
      default: 'solid'
    }
  },
  data() {
    return {
      timeLineData: this.data,
      rowsNum: 0,
      columnsInt: parseInt(this.columns),
      rowHeightInt: parseInt(this.rowHeight),
      lineWidthInt: parseInt(this.lineWidthInt)
    };
  },
  computed: {
    startRatioStyle() {
      return index => {
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
      return length => {
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
      return index => {
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
      return index => {
        let style = {};
        if (index === this.rowsNum - 1 && index % 2 === 0) {
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
        borderTop: `${this.lineWidthInt}px ${this.lineStyle} ${this.themeColor}`
      };
      return style;
    }
  },
  watch: {
    data: {
      handler(newVal) {
        this.initConfig();
        this.timeLineData = newVal;
        if (newVal.length) {
          let rows = Math.ceil(newVal.length / this.columnsInt);
          this.rowsNum = rows;
        }
        this.layoutRefresh();
      },
      immediate: true
    }
  },
  methods: {
    initConfig() {
      this.columnsInt = parseInt(this.columns);
      this.rowHeightInt = parseInt(this.rowHeight);
      this.lineWidthInt = parseInt(this.lineWidth);
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
      if (index % 2 === 0) {
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
      this.timeLineData = [];
      this.$nextTick(() => {
        this.timeLineData = this.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/package/v-snake-timeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_v_snake_timelinevue_type_script_lang_js_ = (v_snake_timelinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/package/v-snake-timeline.vue?vue&type=style&index=0&id=43020273&prod&lang=scss&
var v_snake_timelinevue_type_style_index_0_id_43020273_prod_lang_scss_ = __webpack_require__("9a19");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/package/v-snake-timeline.vue






/* normalize component */

var component = normalizeComponent(
  package_v_snake_timelinevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var v_snake_timeline = (component.exports);
// CONCATENATED MODULE: ./src/package/index.js
 // 引入封装好的组件
const components = [v_snake_timeline];

// 批量组件注册
const install = function (Vue) {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_package = (install);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_package);



/***/ })

/******/ });
//# sourceMappingURL=v-snake-timeline.common.js.map