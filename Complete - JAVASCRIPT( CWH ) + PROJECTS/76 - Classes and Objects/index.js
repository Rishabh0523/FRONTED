class RailwayForm {
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno) {
      this.name = givenname
      this.trainno = trainno
    }
  }
  
  // Create a form for Harry
  let rishabhForm = new RailwayForm()
  // Fill the form with Harry's details
  rishabhForm.fill("Rishabh", 145316)
  
  // Create a forms for Rohan
  let nishuForm1 = new RailwayForm()
  let nishuForm2 = new RailwayForm()
  // Fill the forms with Rohan's details
  nishuForm1.fill("Nishu", 222420)
  nishuForm2.fill("Nishu", 2229211)
  
  rishabhForm.submit()
  nishuForm1.submit()
  nishuForm2.submit()
  nishuForm1.cancel()