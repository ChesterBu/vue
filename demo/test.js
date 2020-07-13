/* global Vue */
var child = {
    template: `<div class="child">111</div>`,
    props:['cd'],
    created(){
        console.log(1)
    },
    beforeUpdate (){
        console.log('cd', this.cd)
    },
    mounted () {
        window.child = this
        child.$emit('pop');
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
    methods:{
        dc(){
            console.log(this, 1)
        }
    },
    created(){
        console.log(2),
        setTimeout(()=>{
            this.cd = 33333
        },2000)
    },
    template: `<div id="app">
                <child :cd="cd"></child>
                <hh  v-if="cd === 0"/>
                <div  v-show="cd" @click="console.log(2)">2222</div>
              </div>`
})

