/* global Vue */
var child = {
    template: `<div class="child"><slot></slot></div>`,
    props:['cd'],
    mounted () {
        window.child = this
    }
}
Vue.component('hh',{
    template: `<div class="child">2</div>`,
})

// $children中只会有子组件
window.vm = new Vue({
    el: '.a',
    data:{
        cd:2222
    },
    components: {
        child
    },
    template: `<div id="app">
                <child @pop="console.log(1)" :cd="cd">test</child>
                <hh />
                <div  @click="console.log(2)">2222</div>
              </div>`
})

