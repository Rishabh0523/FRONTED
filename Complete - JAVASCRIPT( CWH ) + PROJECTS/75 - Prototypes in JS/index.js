let a = {
    name: "Harry",
    language: "JavaScript",

    run: () => {
        alert("Self run")
    }
}

console.log(a)

let p = {
    run: () => {
        alert("run")
    }
}

a.__proto__ = p
a.run()