/*var person={name:"Amitabh",surname:"Bacchan"}
console.log(person);
console.log(person.name.configurable);
console.log(person.name.writable);
console.log(person.name.enumerable);
console.log(person.name.value);*/

/*var person={name:"Amitabh"}
console.log(person);
Object.defineProperty(person, {name:{ value: "Abhishek",configurable:true,writable:true,enumerable:false},
name:{ value: "Unnati",configurable:true,writable:true,enumerable:false}});

console.log(person);*/
function person(id,name)
{
    this.id=id;
    this.name=name;
    person.prototype.Print=function()
    {
    console.log(this.id,this.name);
       
    }
}
var person1=new person(101,"Amitabh");
var person2=new person(102,"Abhishek");
person.prototype.surname="Bacchan";
person1.Print();
person2.Print();








