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

var Aradhya=Object.create(Abhishek);
Aradhya.fname="Aradhya";
Aradhya.age=7;
Aradhya.dateofbirth=('2011-02-05');
Aradhya.married=true;
console.log(Aradhya.lname);
console.log(Aradhya.dateofbirth);