
//--------------------------- FOR LOOP-----------------------------------------------
// Examp=1 ,print 1 to 5 
// for(let count=1; count<=5; count++)
// {
//     console.log("🖖🖖🤘🖖🤛👊🤜"); // to get emojis Press window + (;) 
// }

// Calculate the sum of 1 to 5
// let sum=0;
// let n=100; // by increasing n value we can find sum of numbers 
// for(let i=1;i<=n;i++)
// {
//     sum=sum+i;
// }
// console.log("Total sum is :"+sum);


// print i value 
//  for(let i=1; i<=5; i++)  // i variable only validate for for loop ]

// {
//     console.log(" i ="+i); // to get emojis Press window + (;) 
// }

//---------------------------------- WHILE LOOP========================================

// let i=1; // initializa
// while(i<=3) // condition
// {
//     console.log("js jindabad");
//     i++;   // increment 
// }

//---------------------------------- Do-WHILE LOOP========================================

// let i=1; // initialize
// do{
//     console.log("Om shanti");
//     i++;// increment
// }
// while(i<=8);// condition

//---------------------------------- FOR-OF LOOP========================================

// let str="jay_jinendra";
// let size=0;
// for (let i of str)
// {
//     console.log("i ="+i);
//     size++;

// }
// console.log("size of str ="+size);

//---------------------------------- FOR-In LOOP========================================

// let student ={
//     name: "soham shewale", // name ,age,cgpa are keys 
//     rollno: 43,
//     age: 23,
//     cgpa:8,
//     isPass:true
// }; 
// for(let i in student)
// {
//     console.log("key =",i,"Value =",student[i]);// student[i] prints value 
// }

//=================================== PRACTICE QUESTIONS ========================================

//Q.1 print all even nummbers from zero to 10 .

// for(i=1;i<=100;i++)
// {
//     if(i%2 ==0)  // if i use (!==), i can get odd numbers
//     {
//         console.log("Even numbers :"+i);
//     }
// }

//Q.2 Createa game where you start with any random game number. Ask the user to kepp gusseing th game 
// number until the user enters correct value.

// let gameNum = 7;

// let userNum = prompt("Guess a game number :");
// while (userNum != gameNum) 
// {
//     userNum= prompt("You entered wrong number , try again 🤦‍♂️ ")
// }
// console.log("Congratulations !! , you find  right number 🎉🌹.");


//=============================TOPIC:STRINGS IN JS  ========================================

// let str= "I am iron man";
// console.log(str);  // to print string 
// console.log(str.length); // to print string length
// console.log(str[3]);  // to print specific character in string

// Template literals
// let specialstring =`Harvey Specter `;  // (`) used in template literals
// console.log(typeof specialstring);

//e.g= 
// let obj={
//     item:"pen",
//     price:20,

// };
// console.log("the cost of",obj.item,"is",obj.price,"ruppes");// normal string print 
// let output= `the cost of ${obj.item} is ${obj.price} ruppes`; // here template literal used .
// console.log(output);


//String Interpolation :

//  let str1 =`two cricket bat price is :${600*2} ruppes `;  // (`) used in template literals
// console.log(str1);


// Escape characters :(\n ,\t)
// let str="dsadf \n asdfcsd"; // \n is use for next line
// let str1="dsadf \t asdfcsd"; // used to space between characters
// console.log(str);
// console.log(str1);

//========================STRING METHOD/FUNCTIONS=================================================
//toUpperCase()
// let str=" dadda tyagi"
// str=str.toUpperCase(); // (toUpperCase is a method) which makes string Uppercase
// console.log(str);

//toLowerCase()
// let str=" DADDA Tyagi"
// str=str.toLowerCase();// (toLowerCase is a method) which makes string in Lowercase
// console.log(str);

//trim();
// let str="       ==  DADDA Tyagi  ==    "  
// str=str.trim();// trim spaces  from strting and ending.
// console.log(str);

//slice(str,end?);
// let str="abcdefg"  
// str=str.slice(1,5);// start with index 0 ,target specific index
// console.log(str);

//concat();
// let str1="SUPER" ;
// let str2="HERO" ;
// let result1=str1.concat(str2);// start with index 0 ,target specific index
// let result2=str2.concat(str1); // we can reverse strings also
// let result3=str1+str2; // it working same as above , we can add other strins also
// console.log(result1);
// console.log(result2);
// console.log(result3);


//replace();
// let str="The MoMoMoagend";
// console.log(str.replace("Mo","Le")); // first char is 'search' and 2nd is 'replace'.
// console.log(str.replaceAll("Mo","Le")); // replace all same values

//charAt();
// let str="ILoveJava";

// console.log(str.charAt(3)); // we can print specific characters


//====================================PRACTICE QUESTIONS ===================================================
//Q.1 . Prompt the user to enter their full name . Generate a username for them based on the input .
//start username with @ , followed by their full name and ending with the fullname length.
//  eg: user name ="sohamshewale" ,username should be="@sohamshewale12"
 //----->

let fullname= prompt("Enter your fullname without spaces :");
let username="@"+fullname+fullname.length;
console.log(username);








































