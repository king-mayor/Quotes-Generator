let quote = document.querySelector('.parag-1');
let author = document.querySelector('.header-1');
let btn = document.querySelector('#btn');
let quotes = [
    {
        quote: `"We must learn to accept life and to accept ourselves ... with a shrug and a smile ... because it's all we've got."`,
        author: `Harvey Mindess`
    },
    {
        quote: `"While we wait in silence for that final luxury of fearlessness, the weight of that silence will choke us."`,
        author: `Audre Lorde`
    },
    {
        quote: `"She is a winsome wee thing, She is a handsome wee thing, She is a bonny wee thing, This sweet wee wife o' mine."`,
        author: `James Drummond Burns`
    },
    {
        quote: `"The world doesn't come to the clever folks, it comes to the stubborn, obstinate, one-idea-at-a-time people."`,
        author: `Mary Roberts Rinehart`
    },
    {
        quote: `"Drama is very important in life: You have to come on with a bang. You never want to go out with a whimper."`,
        author: `Julia Child`
    },
    {
        quote: `"If you put a chain around the neck of a slave, the other end fastens itself around your own."`,
        author: `Ralph Waldo Emerson`
    },
    {
        quote: `"Discontent is the first step in progress. No one knows what is in him till he tries, and many would never try if they were not forced to."`,
        author: `Basil W. Maturin`
    },
    {
        quote: `"All progress is based upon a universal, innate desire on the part of every living organism to live beyond its income."`,
        author:  `Samuel Butler`
    },
    {
        quote: `"It is the spur of ignorance, the consciousness of not understanding, and the curiosity about that which lies beyond that are essential to our progress."`,
        author: `John Pierce`
    },
    {
        quote: `"Every true man, sir, who is a little above the level of the beasts and plants, lives so as to give a meaning and a value to his own life."`,
        author: `Luigi Pirandello`
    },
    {
        quote: `"The moment somebody says to me, 'This is very risky,' is the moment it becomes attractive to me."`,
        author: ` Kate Capshaw`
    },
];
btn.addEventListener('click', function(){
      let random = Math.floor(Math.random() * quotes.length);
      author.innerText = quotes[random].author;
      quote.innerText = quotes[random].quote;
})
function authorOne() {
author.style.color = "#B91600";
author.style.textTransform = "uppercase";
author.style.fontSize = "1em";
author.style.marginTop = "15px";
author.style.letterSpacing = "5px";
}
authorOne();