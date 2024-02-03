let a = [
    "Initializing hacker to",
    "Connecting to facebook",
    "Connecting to server 1 ",
    "Connection failed. Retrying....",
    "Connecting to server 2 ",
    "Connected successfully...",
    "Username iamRishabh",
    "Trying brute Force",
    "200K passwords tried....",
    "Match not found",
    "Another  200K passwords tried....",
    "Match Found",
    "Accessing Account",
    "Hack Success"


]

const sleep = (second) =>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {resolve(true)},second * 1000)
        
    });
}

const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for(let i=0; i<a.length;i++){
      await  showHack(a[i])
    }
})()