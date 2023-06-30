const quoteBtn = document.querySelector('button'),
quoteEl = document.querySelector('p'),
authorEl = document.querySelector('.author .name'),
soundEl = document.querySelector('.fa-volume-high'),
copyEl = document.querySelector('.fa-copy'),
twitterEl = document.querySelector('.fa-twitter')

const randomQuote = async()=>{
    let quote = await fetch('https://api.quotable.io/random').then(resp=> resp.json()).then(data => data)
    // console.log(quote)
    quoteEl.innerHTML = quote.content
    authorEl.innerHTML = quote.author;
}

randomQuote();

quoteBtn.addEventListener('click', randomQuote)
soundEl.addEventListener('click',()=>{
    let utterance;
    utterance = new SpeechSynthesisUtterance(quoteEl.innerText)
    speechSynthesis.speak(utterance);
})

copyEl.addEventListener('click',async()=>{
    navigator.clipboard.writeText(quoteEl.innerText)
})

twitterEl.addEventListener('click',()=>{
    let twitt = `https://twitter.com/intent/tweet?text=${quoteEl.innerHTML}`
    window.open(twitt)
})