

var myInfo = class 
{
    constructor(myName, myId, myEmail, pLanguage)
    {
    	this.myName = myName;
    	this.myEmail = myEmail;
    	this.myId = myId;
    	this.pLanguage = pLanguage;
    }
}
const joshua = new myInfo("Zephaniah Joshua", "HNG-06681", " zephaniahk333@gmail.com", "JavaScript");
console.log(`Hello World, This is ${joshua.myName} with HNGI7 ID ${joshua.myId} and email ${joshua.myEmail} using ${joshua.pLanguage} for stage 2 task`);
