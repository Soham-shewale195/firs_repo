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

// let arr=["vinchur","mumbai","pune"]

// arr.forEach((val)=> // value at each index
// {
//     console.log(val.toUpperCase());
// });

// we can print 3 properties at a time (like value, index/position , array )
let arr=["vinchur","mumbai","pune","delhi"]

arr.forEach((val , idx , arr)=> // value at each index
{
    console.log(val.toUpperCase(),idx ,arr); // isx is index , arr is array.
});
