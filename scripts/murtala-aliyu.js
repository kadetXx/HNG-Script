const firstName = "Aliyu";
const lastName = "Murtala";
const languageUsed = "javascript";
const internId = "HNG-00925";

function displayMessage(){
    const message = `Hello World, this is ${lastName} ${firstName} with HNGi7 ID ${internId} using ${languageUsed} for stage 2 task.`
    
    return message;
}

console.log(displayMessage());