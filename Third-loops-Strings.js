
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

let gameNum = 7;

let userNum = prompt("Guess a game number :");
while (userNum != gameNum) 
{
    userNum= prompt("You entered wrong number , try again 🤦‍♂️ ")
}
console.log("Congratulations !! , you find  right number 🎉🌹.");








































































