/* global Vue */
var child = {
    template: `<div class="child"><slot></slot></div>`,
    mounted () {
        window.child = this
    }
  }
window.vm = new Vue({
    el: '.a',
    components: {
        child
    },
    template: `<div id="app"><child>test</child></div>`
})