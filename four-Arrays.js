//============================TOPIC : ARRAYS ===============================================================

// let marks=[56,87,89,76,90];
// console.log(marks);
// console.log(marks.length); // provide length of array

// array indices
// console.log(marks[3]);// we can write specific index also
// console.log(marks[3]=80);

// Lopping array :


// for(let i=0;i<freinds.length;i++)
// {
//     console.log(freinds[i]);
// }

// for-of loop in array
// let freinds=["harshad","vishal","ankit","Atharva","avinash","om","ganesh","kundan"];

// for(let fre of freinds)
// {
//     console.log(fre); // we can aslo use for-of to print array .
// }

// let cities=["vinchur","niphad","nashik"];

// for(let city of cities)
// {
//     console.log(city.toUpperCase());
// }


//======================== PRACTICE QUESTION =======================================
//  let marks=[85,97,44,37,76,60];
// let sum=0;
//  for(i=0;i<6;i++)
//  {
//      sum += marks[i];  // we can aslo write it as (sum= sum+marks[i])
//  }
//  let avg=sum/marks.length;
// console.log(`average marks of the class :${avg}`);

// Q2.For given array price of 5 items ->[250,645,300,900,50].All items have an offer of 10% OFF on them .
//change the array to store the final price after appling offer.
//----> 
 
// let items=[250,645,300,900,50];

// for(i=0;i<items.length;i++)
// {
//     let offer= items[i]/10;
//     items[i]=items[i]- offer;
// }
// console.log(`Value after offer applied :${items} rs`)

//============================== ARRAY METHODS =================================================

// // push() used to add element form end .

// let foodItems=["apple","banana","mango"];
// console.log(foodItems);
// foodItems.push("papaya"); //to add single element .
// foodItems.push("lichi","custard","lemon");//to add multiple element 
// console.log(foodItems);


// pop() used to delete element from end and print it  .

// let foodItems=["apple","banana","mango","lichi","custard"];
// foodItems.pop(); //to delete single element from end  .
// let deleteItem=foodItems.pop();// save deleted value it 
// console.log(deleteItem); 

//toString() convert array into string
// let foodItems=["apple","banana","mango","lichi","custard"];
// console.log(foodItems.toString());

//concat() method:
// let marvel=["ironman","hulk","thor","spiderman","groot"];
// let dc=["batman","superman","flash","joker"];
// let indianhero=["shaktiman","krish"];
// let heroes= marvel.concat(dc,indianhero);
// console.log(heroes);

// // unshift() method : add element form start.
// let marvel=["ironman","hulk","thor","spiderman","groot"];
// marvel.unshift(" antman");
// console.log(marvel);

// // shift() method : delete element prom start.
// let marvel=["ironman","hulk","thor","spiderman","groot"];
// let val=marvel.shift();
// console.log(val);

// slice() method : returns the piece of array.
// let marvel=["ironman","hulk","thor","spiderman","groot"];
// console.log(marvel.slice(1,4));

// splice() method : change the original array (strtidx,deletecount,replace) .
// let arr=[1,2,3,4,5,6,7,8];
// arr.splice(2,2,9,10); //here  ,start form indx 2 , delet 2 element , and add 9 and 10 .
//add element
// arr.splice(2,0,102)    //here  ,start form indx 2 , delet 0 element , and add 102
//delete element 
// arr.splice(3,1,0)    //here  ,start form indx 1 , delet 1 element , and add 0/nothing
//replace element 
// arr.splice(3,1,45)    //here  ,start form indx 4 , delet 1 element , and add 45
// console.log(arr);


//============================= PRACTICE QUESTIONS ===================================================

//Q.1 create an array to store companies-->"Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
//1.Remove the fisrt company fronm the array :
//--->
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);

//2. Remove Uber & Add Ola in its place
//-->
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(2,1,"ola");
// console.log(companies);


//3.Add Amazon at the end 
//-->
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.push("Amazon");
console.log(companies);