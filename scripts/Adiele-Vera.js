const firstProgramString = "Hello World";
const firstName = "Vera";
const lastName = "Adiele";
const hngID = "HNG-04854";
const email = "adielevera226@gmail.com";
const language = "JavaScript";

const template = `${firstProgramString}, this is ${firstName} ${lastName} with `;
const templateContd = `HNGi7 ID ${hngID} and email ${email} using `;
const templateEnd = `${language} for stage 2 task`;

const scriptString = template.concat(templateContd, templateEnd);

const refinedRegEx = /(\w+,?-?@?\w*\.?\w*\s)+\w+/;
if(refinedRegEx.test(scriptString)){
    console.log(scriptString);
}