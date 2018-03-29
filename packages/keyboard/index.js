/**
 * @author nutsjian
 * Date: 18/3/29
 */
import Keyboard from './src/keyboard';

/* istanbul ignore next */
Keyboard.install = function(Vue) {
  Vue.component(Keyboard.name, Keyboard);
};

export default Keyboard;

