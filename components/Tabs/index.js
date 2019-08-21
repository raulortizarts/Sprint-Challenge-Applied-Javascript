// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabComp(topic) {
    const tabCont = document.createElement ('div')
    tabCont.classList.add('tab')
    tabCont.textContent = topic

    return tabCont
}

axios.get ('https://lambda-times-backend.herokuapp.com/topics')
.then ((response) => {

    //console.log(response.data.topics) 

    response.data.topics.forEach((topic) => {

        const tabContainer = document.querySelector('.topics')
        
        tabContainer.appendChild(tabComp(topic))
        
    })
})

