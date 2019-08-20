// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//headline div needs class and text
function headlineComp (headline) {
    const headlineDiv = document.createElement('div')
    headlineDiv.textContent = headline

    return headlineDiv
}

//img needs to pull source

function imgComp (authorImg) {
    const cardImg = document.createElement('img')
    cardImg.src = authorImg

    return cardImg
}

//img container, needs class, append img

function imgCont (authorImg) {
    const imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container')

    imgDiv.appendChild(imgComp(authorImg))

    return imgDiv
}

//author span, pulls author name

function authorNameComp (author) {
    const authorName = document.createElement('span')
    authorName.textContent =author

    return authorName
}

//author div, needs class, append img container and author span

function AuthorComp (authorImg, author) {
    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')

    authorDiv.appendChild(imgCont(authorImg))
    authorDiv.appendChild(authorComp(author))
}

//main comp, card div, needs class, append headline and author div

function cardComp () {
    const card= document.createElement('div')
    card.classList.add('card')

    card.appendChild(headlineComp(headline))
    card.appendChild(authorComp(authorPhoto, authorName))
    
}
//define the html containet to append it all to

const cardsContainer = document.querySelector('.cards-container')

//pull data from the link using axios and feed to comps as args

axios.get ( 'https://lambda-times-backend.herokuapp.com/articles')

.then ((response) => {

    console.log(response.data.articles.javascript)
})
