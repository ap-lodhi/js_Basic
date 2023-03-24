function getName(){
    var status = true
    if(status){
        var name  = 'anil'
    }
    console.log(name)
}

getName()

function cont(x){
    var y=x*10
    function val(z){
        console.log(x,y,z)
    }
    val(y*5)
}
cont(3)




var name  = "ajay"
function printDetails(){
    console.log(this.name)
}

var person ={
    name:"haren",
    company:"masai",
    print: printDetails()
}

person.print()



