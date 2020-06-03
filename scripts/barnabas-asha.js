//This function returns the string
let hngProfile = {
    fullName: 'Barnabas Asha',
    hngId: 'HNG-01877',
    email: 'barnabee58@gmail.com',
    language: 'Javascript',
    loadProfile : function() {
        console.log(`Hello World, this is ${this.fullName} with HNGi7 ID ${this.hngId} using ${this.language} and email ${this.email} for stage 2 task`)
    }
}


hngProfile.loadProfile();
