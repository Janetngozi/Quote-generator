const quotes = [
    {
     name:'Stephen King',
     quote:'Get busy living or get busy dying.'
    },
    {
     name:'John F.Kennedy',
     quote:'Those who dare to fail miserably can achieve greatly.'
    },{
     name:'Abraham Lincoln',
     quote:'I am a success today because I had a friend who believed in me and I did not have the heart to let him down.'
    },
   {
    name:'Leonardo Da Vinci',
    quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
   },
    {
     name:'Leo Tolstoy',
     quote:'If you want to be happy, be.'
    }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}

   
    