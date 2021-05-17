import Vue from 'vue'
import SvgIcon from './icon.vue' // svg组件

// 注册全局插件
Vue.component('svg-icon', SvgIcon)

// 读取所有svg文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
