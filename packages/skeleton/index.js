/**
 * @author nutsjian
 * Date: 18/3/29
 */
import Skeleton from './src/skeleton.vue'

Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton)
}

export default Skeleton
