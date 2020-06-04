const output = () => {
  const myData = {
    firstName: "Oluwatosin",
    lastName: "Jimoh",
    language: "Javascript",
    id: "HNG-00977",
    email: "jayoluwatosin@gmail.com"
  };
  return `Hello World, this is ${myData.firstName} ${myData.lastName} with HNGi7 ID ${myData.id} using ${myData.language} for stage 2 task. ${myData.email}`
}

console.log(output());