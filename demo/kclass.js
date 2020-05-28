class This {
    c = {
        a: this.method
    }
    method(){
        console.log(this)
    }
}
let a = new This()

a.c.a()











// let aa = function (){
//     console.log(this)
// }
// let aaa = aa.bind('ccdd')
// aa()
// aaa()
// aaa.call('ddcc')   // bind之后call也没用