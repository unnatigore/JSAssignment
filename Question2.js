var Amitabh = {
    fname : "Amitabh", lname : "Bacchan", age : 74, skills :"Acting",
    address:{
        city : "Mumbai",
        pincode : 411025
    },
    dateofbirth: new Date('1942-08-21'),
    married:true,
    profession:"Actor",
}
var Abhishek=Object.create(Amitabh);
Abhishek.fname="Abhishek";
Abhishek.age=42;
Abhishek.dateofbirth=('1976-02-05');
console.log(Abhishek.lname);
console.log(Abhishek.skills);

