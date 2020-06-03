class Person {
  constructor(fullname, id, language) {
    this.fullname = fullname;
    this.id = id;
    this.language = language;
  }
  greeting() {
    return `Hello World,this is ${this.fullname} with HNGi7 ID ${this.id} using ${this.language} for stage 2 task.`;
  }
}

const Yemi = new Person("Akinyemi Oluwayemisi", "HNG-02253", "javascript");

Yemi.greeting();
