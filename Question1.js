var Person1 = {
    fname : "Unnati", lname : "Gore", age : 21, skills : ["C","C++","Java"],
    address:{
        city : "Pune",
        pincode : 411002
    },
    dateofbirth: new Date('1997-03-14'),
    married:false,
    profession:"Analyst",
}
var Person2 = {
    fname : "Kanak", lname : "Soni", age : 22, skills : ["C","Java","Python"],
    address:{
        city : "Noida",
        pincode : 201306
    },
    dateofbirth:new Date('1996-01-31'),
    married:true,
    profession:"Data Analyst",
}
print=function(objectToDisplay){
    console.log(objectToDisplay);

}
print(Person1);
print(Person2);

print(Person1.fname);
print(Person2.dateofbirth);

 