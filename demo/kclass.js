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