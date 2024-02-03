console.log(document.cookie)
document.cookie = "Name=Rishabh12222222222"
document.cookie = "Name=Rishabh12222222222"
console.log(document.cookie)
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)