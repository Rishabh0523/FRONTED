class RailwayForm {
    constructor(givenname, trainno, address) {
        console.log("Constructor called....." + givenname + " " + trainno)
          
            this.name = givenname
            this.trainno = trainno
            this.address = address
          
          
    }
    preview() {
        alert(this.name + " : Your form is for train number : " + this.trainno + "and your Address is " + this.address)
    }
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
      this.trainno = 0;
    }
  
  }

  let rishabhForm = new RailwayForm ("Rishabh",12557,"845106, Champaran, Bihar")
  rishabhForm.preview()
  rishabhForm.submit()
  rishabhForm.cancel()
  rishabhForm.preview()