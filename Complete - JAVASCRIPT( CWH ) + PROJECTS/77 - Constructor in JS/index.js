class RailwayForm {
    constructor(givenname, trainno) {
          {
            this.name = givenname
            this.trainno = trainno
          }
          console.log("Constructor called.....")
    }
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
  
  }
  
  // Create and fill the form for Harry
  let rishabhForm = new RailwayForm("Rishabh",22222)
  // Fill the form with Harry's details
//   rishabhForm.fill("Rishabh", 145316)
  
  // Create and fill the forms for Rohan

  let nishuForm1 = new RailwayForm("Nishu",111111)
  let nishuForm2 = new RailwayForm("Niishu",33333)
  // Fill the forms with Rohan's details
//   nishuForm1.fill("Nishu", 222420)
//   nishuForm2.fill("Nishu", 2229211)
  
  rishabhForm.submit()
  nishuForm1.submit()
  nishuForm2.submit()
  nishuForm1.cancel()