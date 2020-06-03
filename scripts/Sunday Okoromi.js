let profile = {firstName: "Sunday", lastName:"Okoromi", hngId: "HNG-03987", language: "Javascript",
  fullName: function() {
    return  "Hello World, " + "this is " + this.firstName + " " + this.lastName + " with " + this.hngId + " using " + this.language + " for stage 2 task";
}

}; 

profile.fullName();
