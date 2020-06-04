//Mark:- Check Inputted HNG ID, Full Name & Language and return Text
const displayMessage = (hngID, fullName, language) => {
  console.log(`Hello World, this is ${fullName} with HNGi7 ID ${hngID} using ${language} for stage 2 task`);
};

//Mark:- Breaking down the entries required
const fullName = 'Oluwadamilola Adediran';
const hngID = "02794";
const language = "Javascript";

//Mark: - Run
displayMessage(hngID, fullName, language);
