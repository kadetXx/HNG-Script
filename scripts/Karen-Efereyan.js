function MoveToStage2(name, id, language, email) {
  (this.name = name), (this.id = id), (this.language = language);
  console.log(
    `Hello World, This is ${name} with HNG ID ${id} using ${language} and email ${email} for stage2 task`
  );
}

MoveToStage2(
  "Efereyan Karen Simisola",
  "HNG-01050",
  "Javascript",
  "kimsyefe@gmail.com"
);
