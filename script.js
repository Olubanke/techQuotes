const quotes = [{
        name: 'Matt Mullenweg',
        quote: 'Technology is best when it brings people together.',
    },
    {
        name: 'Albert Einstein',
        quote: 'It has become appallingly obvious that our technology has exceeded our humanity.',
    },
    {
        name: 'Clive James',
        quote: 'It is only when they go wrong that machines remind you how powerful they are.',
    },
    {
        name: 'Tim Berners-Lee',
        quote: 'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
    },
    {
        name: 'Frank Lloyd Wright',
        quote: 'If it keeps up, man will atrophy all his limbs but the push-button finger.',
    },
    {
        name: 'Lyndon B. Johnson',
        quote: 'If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.',
    },
    {
        name: 'Stewart Brand',
        quote: 'Once a new technology rolls over you, if you are not part of the steamroller, you are part of the road.',
    },
    {
        name: 'Steve Jobs',
        quote: 'It is not a faith in technology. It is faith in people.',
    },
    {
        name: 'Bill Gates',
        quote: 'The advance of technology is based on making it fit in so that you do not really even notice it, so it is part of everyday life.',
    },
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);


function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}