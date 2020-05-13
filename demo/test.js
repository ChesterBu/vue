/* global Vue */
var child = {
    template: `<div class="child"><slot></slot></div>`,
    mounted () {
        window.child = this
    }
  }

// $children中只会有子组件
window.vm = new Vue({
    el: '.a',
    components: {
        child
    },
    template: `<div id="app"><child>test</child><div>2222</div></div>`
})