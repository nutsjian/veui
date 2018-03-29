# keyboard
> 键盘组件

<script>
export default {
  data() {
    return {
      crabKeyboardText: "",
      crabKeyboardTextPassword: "",
      crabKeyboardTitle: "",
      crabKeyboardShow: false,
      crabKeyboardPassShow: false,
      keyboardOptions: {
        title: '用户名',
        text: '',
        visible: false
      }
    }
  },
  methods: {
    passkeyboard: function() {
      this.crabKeyboardTitle = "密码"
      this.crabKeyboardShow = false
      this.crabKeyboardPassShow = true
      this.keyboardOptions.visible = true
    },
    onClose (val) {
      console.log('onClose = ' + val)
      // this.crabKeyboardPassShow = val
      this.keyboardOptions.visible = true
    }
  }
}
</script>
<template>
  <div class="form">
    <div class="relative">
      <input type="text" placeholder="用户名" v-model="keyboardOptions.text" autocomplete="off" />
      <div class="keyboard" @click="passkeyboard()"></div>
    </div>
  </div>
  <!-- <ve-keyboard text="" title="阿萨德" :show="crabKeyboardPassShow" @on-close="onClose"></ve-keyboard> -->
  <ve-keyboard :options="keyboardOptions"></ve-keyboard>
</template>
<style>
.form {
    background: #FFFFFF;
    width: 600px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -300px;
    margin-top: -200px;
    border-radius: 8px;
    padding-bottom: 60px;
}
.form p {
    width: 450px;
    margin: 0 auto;
    font-size: 20px;
    color: #404040;
    font-weight: 500;
    margin-top: 40px;
    text-indent: 15px;
}
.form input {
    display: block;
    width: 450px;
    margin: 0 auto;
    border: 1px solid #bebebe;
    border-radius: 2px;
    height: 60px;
    margin-top: 16px;
    text-indent: 15px;
    font-size: 20px;
    color: #404040;
}
.form .keyboard {
    position: absolute;
    width: 62px;
    height: 62px;
    top: 0px;
    right: 74px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAAEyHv41AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTYtMDgtMTVUMTA6MDc6NDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE2LTA4LTE1VDEwOjEyOjMxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE2LTA4LTE1VDEwOjEyOjMxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCOTNCNjIwMTYyOEQxMUU2QUJGQThBNTQ0ODc2NUE2RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCOTNCNjIwMjYyOEQxMUU2QUJGQThBNTQ0ODc2NUE2RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI5M0I2MUZGNjI4RDExRTZBQkZBOEE1NDQ4NzY1QTZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI5M0I2MjAwNjI4RDExRTZBQkZBOEE1NDQ4NzY1QTZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dnSjJgAAAN1JREFUeNpiZJj534eBgWEzAwS8YIFyFKACD0ACL0AMqAADQAAxArX8h3FYkJSCOXBlAAEEUwaXRQJgQxmQVSMDgABCsQAZMDHgAFSUAAggnJbjA0wMZACqaRIEOxuK/6eBaRQAEEAgPz0H0hIkWOTHRKIGENjEhOYsYmgUP70nkmYYGJsoiidGQvHEgkUTSlpknIUh/wIgwMiJXHLACyY6WAICEvjSONF8tPAVxJUv/tPBRwzDz0csRKgBlfwfiVD3nlKLQJZ8wCUJDCZceQcj6HyB9CwaJnNQPZoGAAm3QIOFI5HxAAAAAElFTkSuQmCC) no-repeat center center;
}
.relative {
    position: relative;
}
</style>