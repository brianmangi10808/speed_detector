//key concept 
// document.querySelector()
//addEventLister()
//math Object()
//innerText

let btn =  document.querySelector('#new-quote');
let quote=  document.querySelector('.quote');
let person =  document.querySelector('.person');

const quotes = [{
    quote: `"the best way to find yourself is to lose yourself in the service of others."`,
    person: `mahatma gandhi`
},
{
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
},
{
    quote: `"In the end, we will remember not the words of our enemies, but the silence of our friends."`,
    person: `Martin Luther King Jr`
},
{
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt"
},
{
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
},
{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela"
},
{
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt"
},
{
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt"
},
{
    quote: "The purpose of our lives is to be happy.",
    person: "Dalai Lama"
},
{
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
},
{
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: "Ralph Waldo Emerson"
},
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText =  quotes[random].quote;

    person.innerText = quotes[random].person;

})