const mydata = {
    firstname: "Emmanuel",
    lastname: "Abutu",
    id: "HNG-03705",
    email: "abutue10@gmail.com",
    language: "Javascript"
};
const output = ({ firstname, lastname, id, language, email }) =>
   `Hello World, this is [${firstname}] [${lastname}] with HNGi7 ID [${id}] using [${language}] for stage 2 task. ${email}`
console.log(output(mydata));
