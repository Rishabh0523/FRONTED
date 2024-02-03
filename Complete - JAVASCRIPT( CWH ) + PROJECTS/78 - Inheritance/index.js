class Animal {
    constructor(name,color) {
        this.name = name
        this.color = color

    }

    run() {
        console.log(this.name + "is running")
    }

    shout() {
        console.log(this.name + " is shouting")
    }

    hide() {
        console.log(this.name + " is Hiding")
    }
}



class Monkey extends Animal{
   eatBanana() {
    console.log(this.name + " is eating banana")
   }
}

let ani = new Animal("Bruno","White")
let m = new Monkey("Champu","Brown")

ani.shout();
m.eatBanana();
m.hide();