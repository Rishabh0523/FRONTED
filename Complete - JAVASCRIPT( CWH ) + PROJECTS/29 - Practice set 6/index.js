// let number = prompt("Enter your number")
// number = Number.parseInt(number)

// if (number > 4) {
//   location.href = "https://google.com"
// }

let color = prompt("Enter the page background color")
document.body.style.background = color




// 

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true : false
}

while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}