// console.log("hello JavaScript");

// Arithmatic operator :
// let a= 8;
// let b=2;
// console.log("a =",a, "&b =",b);

// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);


// unary operator :
// console.log("++a = ",++a); // pre incriment  
// console.log ("a =",a);

// console.log("a++ =",a++);  // post incriment 
// console.log ("a =",a);

// console.log("--a =",--a);  // pre incriment 
// console.log ("a =",a);

// console.log("a-- =",a--);  // post decriment
// console.log ("a =",a);


// Assignment operator :

// let a = 5;
// let b = 2;

// console.log("a =",a, "&b =",b);

// a += 2 ;  // also write as " a = a+2 ".
// console.log(" a += ",a);

// a -= 2 ;  // also write as " a = a-2 ".
// console.log(" a -= ",a);

// a *= 2 ;  // also write as " a = a*2 ".
// console.log(" a *= ",a);

// a /= 2 ;  // also write as " a = a/2 ".
// console.log(" a /= ",a);

// a **= 2 ;  // also write as " a = a**2 ".
// console.log(" a **= ",a);

// a %= 2 ;  // also write as " a = a%2 ".
// console.log(" a %= ",a);


// Comparison Operator :

// let a = 4;
// let b = 3;

// console.log("a =",a, "&b =",b);


// console.log(" 4 == 3 :",a==b); // false

// console.log(" 4 != 3 :",a!=b); // true

// console.log(" 4 === 3 :",a===b); // false

// console.log(" 4 !== 3 :",a!==b); // true

// console.log(" 4 > 3 :",a>b); // true

// console.log(" 4 >= 3 :",a>=b); // true

// console.log(" 4 < 3 :",a<b); // false

// console.log(" 4 <= 3 :",a<=b); // false


// Logical Operators :

// let a = 5;
// let b = 3;

// // AND (&&)
// let cond1= a>b; // true
// let cond2 = a=== 5 ; //true 
// console.log(" cond1 && cond2 :" , cond1 && cond2); // both true then true , anyone false then false .

// // OR (||)
// let cond3= a>b; // true
// let cond4 = a=== 6 ; //false 
// console.log(" cond3 || cond4 :" , cond3 || cond4); // both false then false , anyone true then true .

// // NOT (!) : gives opposite values
// let x= 2;
// let y= 8 ;
// console.log("!(3<8) :", !(x<y) ); // if Ture then False , if False then True



// ------------------- CONDITIONAL STATEMENTS ---------------------


// (IF CONDITION)Examp=1
// let age =26;

// if(age >= 18)
// {
//     console.log(" You can vote .")
// }


//(IF CONDITION)Examp =2
// let mode ="dark";

// if(mode === "dark")
// {
//     color = "black";
// }
// if(mode === "light")
// {
//     color = "white";
// }
// console.log(color);


//(IF-ELSE CONDITION)Examp =1
// let mode ="dark";

// if(mode === "dark")
// {
//     color = "black";
// }
// else
// {
//     color = "white";
// }
// console.log(color);

//(IF-ELSE CONDITION)Examp =2

// let age =16;

// if(age >= 18)
// {
//     console.log(" You can vote .")
// }
// else
// {
//     console.log(" You cann't vote .")
// }

//(IF-ELSE CONDITION)Examp =3

// let a= 5;
// if(a%2 === 0)
// {
//     console.log(a," is even ");
// }
// else
// {
//     console.log(a," is odd ");
// }


//(ELSE- IF CONDITION)Examp =1

// let mode="blue";

// if (mode==="dark")
// {
//     color="black";
// }
// else if(mode==="red")
// {
//     color="red";
// }
// else if(mode==="blue")
// {
//     color="blue";
// }
// else{
//     color="white";
// }
// console.log(color);


// Ternary operator :

// let age = 30;
// // a?b:c
// let result = age>= 18? "adult" : "not Adult" ; // simpler, compact if-else
// console.log(result);


//alert("hello there");

// let name= prompt("hello");
// console.log(name);


//practice question :
// Q.1 --> get user a input a number using prompt ("Enter a number "). check if the number is multiple of 5 or not
//answer  :

// let no= prompt("Enter a Number :");
// if (no % 5 ===0)
// {
//     console.log(no," is a multiple of 5 .");
// }
// else
// {
//     console.log(no," is not multiple of 5.");
// }

// Q.2 --> Write a code which can give grades to students according to their scores :
    //80-100 (A)
    //70-79 (B)
    //60-69 (C)
    //50-59 (D)
    //0-49 (F)
//answer  :

let perc = prompt("Enter the Percentage (0-100):");

if(perc >= 80 && perc<=100)
{
    grade = "A";
}
else if(perc >= 70 && perc<=79)
{
   grade = "B";
}
else if(perc >= 60 && perc<=69)
{
   grade = "C";
}
else if(perc >= 50 && perc<=59)
{
    grade = "D";
}
else if(perc >= 0 && perc<=49)
{
    grade = "F";
}
else{
    console.log(" Input is Wrong , Try again ");
}
console.log(grade," Grade")























