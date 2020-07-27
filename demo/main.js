// main.js
Vue.component('hh',{
  template: `<div class="child"><slot/></div>`,
})

new Vue({
    el: '#app',
    data() {
      return {
        list: [1, 2, 3, 4]
      }
    },
    render(h) {
      return h(
        'ul',
        {
          class: 'c-ul'
        },
        this.list.map(_ => h('hh', { key: _ }, _))
      )
    },
    mounted() {
      setTimeout(()=>{
        this.list = [2, 5, 3, 6, 7, 1]
      },2000) 
    }
})
  