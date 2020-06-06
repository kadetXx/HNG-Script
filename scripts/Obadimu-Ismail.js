const userInfo = {
    firstName: 'Ismail',
    lastName: 'Obadimu',
    HNGId: 'HNG-06578',
    email: 'me@ismailobadimu.com'
};
const greet = (userInfo)=> {
    console.log(
        `Hello World, this is ${userInfo.firstName} ${userInfo.lastName} with HNGi7 ID ${userInfo.HNGId} and email ${userInfo.email} using Javascript for stage 2 task`)
}
greet(userInfo);