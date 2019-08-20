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

//img container, needs class, append img

//author span, pulls author name

//author div, needs class, append img container and author span



//main comp, card div, needs class, append headline and author div


//define the html containet to append it all to



//pull data from the link using axios