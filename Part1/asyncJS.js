
// Promise js
// 1

let faveNumber = 7;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${faveNumber}?json`)
.then (data => {console.log(data)});

// 2
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`)
.then(data => {
    console.log(data);
});

// 3 didn't really get this one
// Promise.all(
//     Array.from({ length: 4 }, () => {
//       return $.getJSON(`${baseURL}/${favNumber}?json`);
//     })
//   ).then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
//   });

////////////////// Part 2





//1 aysnc

let faveNumber = 7;
let baseURL = "http://numbersapi.com";

async function numFacts(){
    let data = await $.getJson(`${baseURL}/${faveNumber}?json`);
    console.log(data)
}

numFacts();

//2 
const faveNumbers = [7,12,21]
async function multiNum(){
    let data = $.getJSON(`${baseURL}/${faveNumbers}?json`);
    console.log(data);
}

multiNum();

// 3
// I dont really understand this one

// async function part3() {
//     let facts = await Promise.all(
//       Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
//     );
//     facts.forEach(data => {
//       $('body').append(`<p>${data.text}</p>`);
//     });
//   }
//   part3();

