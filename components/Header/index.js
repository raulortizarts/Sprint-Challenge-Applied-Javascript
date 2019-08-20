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
h1 = 'Lambda Times';
temp = '98°'

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

// temp span, class

function temperature (temp) {
    const tempSpan = document.createElement('span')
    tempSpan.classList.add('temp')
    tempSpan.textContent = temp

    return tempSpan
}

//main comp, everything appended to it, div, class
function Header(date, h1, temp) {

    const header = document.createElement('div')
    header.classList.add('header')

    header.appendChild(dateSpanner(date))
    header.appendChild(h1er(h1))
    header.appendChild(temperature(temp))

    return header
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header(date, h1, temp))
