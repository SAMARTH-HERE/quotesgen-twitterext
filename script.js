const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const key = "jXZppzOjqboiAHoF5h7SeA==ARjzgRv3jyrcr3Hg";
const utext = "https://twitter.com/intent/tweet?text=";

const btn1 = document.querySelector(".btn1");
const twitter = document.querySelector(".twitter-share-button");
const quotes = document.querySelector(".q");
const aut = document.querySelector(".a");

async function quote() {
    const response = await fetch(url, {
        headers: { 'X-Api-Key': key }
    });

    const data = await response.json();
    console.log(data);
    
    quotes.innerHTML = data[0].quote;
    aut.innerHTML = data[0].author;
    twitter.setAttribute("href", `${utext}${encodeURIComponent(data[0].quote)}`);
}

quote();

btn1.addEventListener("click", () => {
    quote();
});
