// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.setItem("name","Rishabh")
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
    alert("Changed")
    console.log(e)
}