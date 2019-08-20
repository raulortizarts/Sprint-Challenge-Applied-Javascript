// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

//data?
date = 'March 28, 2019';

// date span, class

function dateSpanner (date) {
    const dateSpan = document.createElement('span')
    dateSpan.classList.add('date')
    dateSpan.textContent = date

    return dateSpan
}

// h1
function h1er(h1) {
    const titleH1 =document.createElement('h1')
    titleH1.textContent = h1

    return titleH1
}

// temp span


//main comp, everything appended to it
function Header() {}
