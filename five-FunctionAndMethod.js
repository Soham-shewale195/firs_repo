//===================================== FUNCTIONS & METHODS ============================================
// function myFunction()
// {
//     console.log("Hello my name is SOHAM");
//     console.log("favorate game is Cricket");

// }
// myFunction();

// function myFunction(msg)  // here (msg) is called as parameter
// {
//     console.log("Hello my name is SOHAM");
//     console.log(msg); // msg is parameter .

// }
// myFunction("i am happy"); //(i am happy) is called as argument .

// function to add 2 numbers.
// function sum(x,y)
// {
//     console.log(x+y);
// }
// sum(4,5)

//RETURN in function 
// function sum(x,y)
// {
//     s= x+y;
//     return s; // return pass value to parameter 
//     // we cann't type any code below return ,it's consider as comment 
// }
// let val = sum(5,4) // we have to store return value in variable
// console.log(val);

// ARROW function : also called as COMPACT function

// function sum(a,b)
// {
//     return a+b ;    
// }

//Modern JS , arrow function
// const sum= (a,b)=>
// {
//     console.log(a+b);
// };
// sum(3,4)

// const mul= (a,b)=>
// {
//     return a*b;
// };
// let val= mul(3,4)
// console.log(val);

// print using arrow function 
// const print= ()=>
// {
//     console.log("happy");
// }
// print()

//=============================== PRACTICE QUESTIONS ==============================================
//Q.1 Create a function using the "function" keyward that takes a string  as an argument & return returns the number of vowels in the string.
//-->
// function count(str)
// {
//     let count=0;
//     for(const char of str)
//     {
        
//         if(char=="a"|| char=="e"||char=="i"||char=="o"||char=="u")
//         {
//             count++
//         }
        
//     }
//     console.log(count);
// }
// count("javascript ")


// Create a arrow function using same task .

// const countVow=(str)=>
// {
//     let count=0;
//     for(const char of str)
//     {
        
//         if(char=="a"|| char=="e"||char=="i"||char=="o"||char=="u")
//         {
//             count++
//         }
        
//     }
//     return count;
// }
// let value=countVow("abcdefg") // way to print RETURN
// console.log(value);


// ================================= FOR-EACH LOOP  =================================================
//e.g =
// function abc()
// {
//     console.log("hello");
// }
// function myFunction(abc)
// {
//     return abc;
// }


//e.g 2=
// let arr=[1,2,3,4,5]

// arr.forEach(function printValue (val) // value at each index
// {
//     console.log(val);
// });

// arrow function
// let arr=["vinchur","mumbai","pune"]

// arr.forEach((val)=> // value at each index
// {
//     console.log(val.toUpperCase());
// });

// we can print 3 properties at a time (like value, index/position , array )
// let arr=["vinchur","mumbai","pune","delhi"]

// arr.forEach((val , idx , arr)=> // value at each index
// {
//     console.log(val.toUpperCase(),idx ,arr); // idx is index , arr is array.
// });

// ========================== PRACTICE QUESTOIN =================================
//Q. For a given array numbers, print the square of eachh value using the forEAch loop 
//---->
// let num=[1,2,3,4,5]
// num.forEach((num)=>  // arrow function is used ,num is call back function
// {
//     console.log(num*num);
// });


// MAP() FUNCTION :
// let arr=[3,4,6]
// let s=arr.map((val)=> {

//     return val*2;
// })
// console.log(s);

//FILTER() : 
// let arr=[2,3,4,5,6,7];

// let evenArray=arr.filter((val)=>
// {
//     // return val%2===0; // for odd val%2 !==0
//     return val>3;
// })
// console.log(evenArray)

//REDUCE() : use when find single value such as AVG, SUM ,GREATEST , SMALLEST,etc...
//e.g 1)
// let arr=[2,3,6,7];
// const sum=arr.reduce((prev , curr)=>
// {
//    return prev + curr;
// })
// console.log(sum);

//e.g 2)
//to find large number :
// let arr=[2,3,6,7];
// const sum=arr.reduce((prev , curr)=>
// {
//    return prev > curr ? prev : curr ; // if prev is greater than curr print prev if not(?) then print curr is greater 
// });
// console.log(sum);


//========================================= PRACTICE QUESTION ===============================================
//Q.1 We are given array of marks of students. Filter out of the marks of student that scored 90+ .
//--->

// let marks=[78,98,87,67,74,93,99,91,89,90]
// let desti= marks.filter((val)=>
// {
//    return val > 90;
// })
// console.log(desti);


//Q.2 Take a number n as input from user. create an array of numbers from 1 to n .
//--->
let n = prompt("Enter the size of array :");
let arr=[];
for(let i=1;i<=n;i++)
{
   arr[i-1]=i;
}
console.log(arr);
// use the reduce method to calculate sum of all numbers in the array.
let sum=arr.reduce((prev ,curr)=>
   {
      return prev + curr;
   })
console.log("sum :"+sum);
//use the reduce method to calculate product of all(factorial) numbers in the array.
//--->
let factorial=arr.reduce((prev ,curr)=>
   {
      return prev * curr;
   })
console.log("factorial :"+factorial);



















