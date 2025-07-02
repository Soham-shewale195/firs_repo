// alert("hello zatu ..");
// console.log("What are you doing .");

//DOM Manipulation
// let heading=document.getElementById("myID") // h1
// console.dir(heading);

// let foot=document.getElementsByClassName("myClass") // h1
// console.dir(foot); 

// let paras =document.getElementsByTagName("p");
// console.dir(paras);

// Query selector 
// for tag 
// let elements=document.querySelector("p"); // it gives only first element
// console.log(elements);

// let AllElement=document.querySelectorAll("p"); // it gives all element
// console.log(AllElement);

//for CLASS
// let class1=document.querySelector(".myClass"); // it gives only first element
// console.log(class1);

// //for ID
// let ID=document.querySelector("#myID"); // it gives only first element
// console.log(ID);

// PRACTICE QUESTIONS :-
// Q.1
let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "I am going to conqueor you!!";


//Q.2
let divs = document.querySelectorAll(".box"); // use (.) because of its CLASS
// console.log(divs[0]);// we can access specific div using [] it .

// for(div of divs)
// {
//     console.log(div.innerText);
// }
// div[0].innerText ="unique value 1";
// div[1].innerText ="unique value 2";
// div[2].innerText ="unique value 3";

let indx=1;
for(div of divs)
{
    div.innerText=`uniques values are ${indx}`
    indx++;
}
