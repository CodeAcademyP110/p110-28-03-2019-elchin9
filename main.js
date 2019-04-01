// //HomeWork 2

// let numbers = [];
// let arrayLength = +prompt("Reqem daxil edin: ");

// function GetNumbers(...numbers){

//     for(let i = 0; i < arrayLength; i++)
//     {
//         let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
//         numbers.push(n);
//     }

// 	let sum = 0;
//     for (let n of numbers) sum += n;
    
//     let numbersMid = sum / numbers.length;

//     return numbersMid;

// }

// console.log(GetNumbers())

//HomeWork 3

// let numbers = [];
// let arrayLength = +prompt("Reqem daxil edin: ");
// let oddNumbers = []

// function GetNumbers(...oddNumbers){
//     for(let i = 0; i < arrayLength; i++)
//     {
//         let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
//         numbers.push(n);

//         if(n % 2 ===0){

//     	oddNumbers.push(n);
//     }
//     }

//     return oddNumbers;
// }

// console.log(GetNumbers());

//HomeWork 4

// let numbers = [];
// let arrayLength = +prompt("Reqem daxil edin: ");
// let bigNumbers = []

// function GetNumbers(...numbers){

//     for(let i = 0; i < arrayLength; i++)
//     {
//        let n = +prompt(i+1 + "-ci reqemi daxil edin: ");
//       numbers.push(n);
//     }

//     let sum = 0;
//     for (let n of numbers) {

//     sum += n;
    
//     let numbersMid = sum / numbers.length;
//         if (n > numbersMid){

//     	bigNumbers.push(n);

//         }
//     }
  
//     return bigNumbers;
// }

// console.log(GetNumbers())

//HomeWork 5

// let words = [];
// let arrayLength = +prompt("Reqem daxil edin: ");

// function GetWords(...words){

//     for(let i = 0; i < arrayLength; i++)
//     {
//        let w = prompt(i+1 + "-ci sozu daxil edin: ");
//       words.push(w);

//     }

//     let oneWords = words.join(",");

//     return oneWords;

// }

// console.log(GetWords());

//HomeWork 6

// let words = [];
// let arrayLength = +prompt("Reqem daxil edin: ");

// function GetWords(...words){

//     for(let i = 0; i < arrayLength; i++)
//     {
//        let w = prompt(i+1 + "-ci sozu daxil edin: ");
//       words.push(w);

//     }
    
//     words.reverse();

//     return words;
// }

// console.log(GetWords());

//HomWork 8

// let words = [];
// let arrayLength = +prompt("Nece soz daxil edeceksiniz ?");
// for(let i = 0; i < arrayLength; i++)
// {
// let w = prompt(i+1 + "-ci sozu daxil edin: ");
// words.push(w);
// }

// let myLetter = prompt("Hansi herf axtarilsin ?");
// let myArray = (words.filter(word => word.indexOf(myLetter) === words[0]));


// console.log(myArray);

//HomeWork 9

// let words = [];
// let w = prompt("Soz daxil edin: ");
// words.push(w);

// let myLetter = [];
// let newLetter =  w.split('');

// for (let l of newLetter) {

// 	if (oneLetters = l) {
//     myLetter.push(l)

//     }
// };

// function filterItems(myLetter, oneLetters) {
//     oneLetters = prompt("Herfi daxil edin: ");
//     return myLetter.filter(function(el) {
//     return el.toLowerCase().indexOf(oneLetters.toLowerCase()) > -1;
//     })
// }

// console.log(filterItems(myLetter, oneLetters));




