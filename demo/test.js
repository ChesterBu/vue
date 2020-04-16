/* global Vue */

var vm =  new Vue({    
    el:".a",        
    name:"A",    
    components:{        
        testb:{            
            props:{                
                childName:""
            },            
        template: '<p>父组件传入的 props 的值 {{childName}}</p>',
        }
    },
    data(){        
        return {            
            parentName:"我是父组件"
        }
    },
})