const accessKey = "ja_ETYSN9wIB5D2POtKxVMvDgMVUOWx8LPGK5aJVe7o"

const formE1 = document.querySelector("form")
const input = document.getElementsByClassName("input ")
const image = document.querySelector(".search-results")
const button = document.getElementById("show-more")

let inputData = " "
let page = 1;

async function searchImages() {
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`


const response = await fetch(url)
const data = await response.json()

const results = data.results

if(page === 1){
    searchResults.innerHTML = ""
}

results.map((results) => {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result");
    const image = document.createElement('img');
    image.src = results.urls.small;
    image.alt = results.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = results.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    imageWrapper.appendChild(imageWrapper);
});

page++
if(page>1){
    ShowMore.style.display="block"
}

}

formE1.addEventListener("submit",(event) => {
    event.preventDefault()
    page=1;
    searchImages()
})

ShowMore.addEventListener("click",() => {
    searchImages()
})