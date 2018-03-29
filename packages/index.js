/**
 * @author nutsjian
 * Date: 18/3/29
 */
import Vue from 'vue'
import VeRow from './row/index'
import VeCol from './col/index'
import Skeleton from './skeleton/index'
import Keyboard from './keyboard/index'

Vue.filter('keyfmt', function(key, capsed) {
  switch(key) {
    case "CapsLock":
      return capsed? "小写" : "大写"
    case "Sure":
      return "确定"
    default:
      return key
  }
})

const components = [
  VeRow,
  VeCol,
  Skeleton,
  Keyboard
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  // MetaInfo.install(Vue)
  // Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  VeRow,
  VeCol,
  Skeleton,
  Keyboard
}
