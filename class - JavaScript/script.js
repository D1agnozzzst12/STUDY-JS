// class 



class Box {

    constructor(name, age) {
        console.log('Create class')
        this.name = name
        this.age = age
        
    }


    hi () {
        console.log('hello: ' + this.name)
    }
}

let myBox = new Box('gazdiev', 21)
let myBox2 = new Box('ilishan', 22)
let myBox3 = new Box('diagnozzz', 23)


console.log(myBox)
console.log(myBox2)
console.log(myBox3)

myBox.hi()
myBox2.hi()
myBox3.hi()