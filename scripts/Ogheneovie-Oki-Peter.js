var name = 'Ogheneovie Oki-Peter';
var email = 'okipeterovie@gmail.com'
var ID = 'HNG-03714';
var lang = 'JavaScript';

function showProps(myName, myID, myEmail, myLang) {
    var result = ``;

        result += (`Hello World, this is ${myName} HNGi7 ID: ${myID} with email address ${myEmail} using ${myLang} for stage 2 task`);
     
    return result;
  }

 
  console.log (showProps(name, ID, lang, email));