class newIntern{
    constructor(name,id,email,language){
        this.name=name;
        this.id=id;
        this.email=email;
        this.language=language;
        return this;
    }
    myProfile(){
       console.log( ` Hello World, this is ${this.name} with HNGi7 ID: ${this.id} and email: ${this.email} using ${this.language} for stage 2 Task.`)
    }
}
const Me= new newIntern("David",06683, "robinsondavid640@gmail.com","Javascript");
Me.myProfile();





