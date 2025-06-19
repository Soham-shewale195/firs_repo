// console.log("hello soham to js");
// console.log("hello everyone this is soham");
// console.log("I love javascript");

FullName="rohit sharma";
console.log(FullName);
x=null; // means empty
console.log(x);

y=undefined; // means we dont lnow inside values
console.log(y);

youStupid=false; //youStupid is a variable ,its a boolean variable 
console.log(youStupid);

//by using below variable rules we can declare variable
variable1="234";
Variable1="Kokan ";
_vary="67";
$dash="dash variable";
console.log(variable1);
console.log(Variable1);

//vari able space not allowed in variable name

// let,const,var  

let num=1;    // let variables are gobal ,give same name for multiple variable
let char="goat";
let totalNumber=99.99;

console.log(num);
console.log(char);
console.log(totalNumber);

const pi=3.14; // const variable
console.log(pi);

 y = BigInt("3455656"); // BigInt datatype
console.log(y);

x = Symbol("anda!@"); // symbol data type


// Object creation
const student =  // student is objct  ,{} used to declare object ,colon is used and ( , ) used insed of ( ; )
{
    FullName:"Soham shewale", 
    cgpa: 8.5,           // here cgpa is key and 8.5 is value.
    age:23,              // key and variable are same
    ispass :true,
    college :"kvn naik ",
    

};  // ( ; ) used after backet is completed.

student.age= student.age+1;
student["FullName"]="rohit sharma";
// to ways to print key of object 
console.log(student.age);
console.log(student["FullName"]);

// example of pen
const product= 
{
    Title: "Ball pen",
    rating:5,
    offer: 5,
    price: 30


};

console.log(product);

// example of insta id
const profile=
{
    Name: "Soham Mahesh Shewale",
    isFollow: true,
    Followers: 200 ,
    Following:500 ,
    Post:  3

};
console.log(typeof profile["Name"]);