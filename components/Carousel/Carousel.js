/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function playPauseDiv() {
  const playpauseCont = document.createElement ('div')
  playpauseCont.classList.add('playPause')
  playpauseCont.attributes.add('onclick', playPauseSlides())

  return playpauseCont
}

function larrowDiv() {
  const larrowCont = document.createElement ('div')
   larrowCont.attributes.add('onclick', switchSlide(-1))
   larrowCont.classList.add('nextPrevBtn leftArrow')

   function larrowSpan() {
    const larrowspan = document.createElement ('span')
    larrowspan.classList.add('arrow arrowLeft')

    return larrowspan
  }

  return larrowCont
}

function rarrowDiv() {
  const rarrowCont = document.createElement ('div')
   rarrowCont.attributes.add('onclick', switchSlide(1))
   rarrowCont.classList.add('nextPrevBtn rightArrow')

   function larrowSpan() {
    const rarrowspan = document.createElement ('span')
    rarrowspan.classList.add('arrow arrowRight')
    
    return rarrowspan
  }

  return rarrowCont
}

function captionDiv() {
  const captionCont = document.createElement ('div')
  captionCont.classList.add('captionTextHolder')

   function captionP() {
    const captionTextP = document.createElement ('p')
    captionTextP.classList.add('captionText slideTextFromTop')
    
    return captionTextP
  }

  return captionCont
}

//append almost everything here and then appen this to .carousel
function slidesContainer() {
  const slidesCont = document.createElement ('div')
  slidesCont.classList.add('slides-container')

  slidesCont.appendChild(playPauseDiv())
  slidesCont.appendChild(larrowDiv())
  slidesCont.appendChild(rarrowDiv())
  slidesCont.appendChild(captionDiv())

  return slidesCont
}


function carouselComp() {
  const carouselCont = document.createElement ('div')
  carouselCont.classList.add('carousel')

  carouselCont.appendChild(slidesContainer())

  return carouselCont
}


const carouselContainer = document.querySelector('.carousel-container')
        
carouselContainer.appendChild(carouselComp())
///

var slideIndex,slides,indicators,captionText;

function initiateCarousel(){
    //Setting first slide as index 0
    slideIndex = 0;
    //Below im getting the element in the html class slide and defining them as slides var
    slides = document.getElementsByClassName("slide");
    //access the style pro of the prev def element and
    //making it visible
    slides[slideIndex].style.opacity = 1;

    //defining the var captiontext as the selector for class captiontext
    captionText = document.querySelector(".captionTextHolder .captionText");
    //using the innertext property, and getting text within each captiontext element
    captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;

    //disabling nextPrevBtn if slide count is one
    if(slides.length<2){
        var nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display = "none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }

    //adding indicators elements using a for loop
    indicators = [];
    var slides_nav = document.querySelector(".slides_nav"),i;
    for (i = 0; i < slides.length; i++) {
        //took the slides and ran a for loop 
        //for each element creates a span
        var indicator = document.createElement("span");
        //adds class of indicators to each
        indicator.classList.add("indicators");
        //appends under slides_nav class element
        slides_nav.append(indicator);

        indicator.setAttribute("onclick","moveSlide("+i+")");
        //push the createdelement to the array
        indicators.push(indicator);
    }
    //to each created element in the array adds class of active
    indicators[slideIndex].classList.add("active");
}
//we just basically created some empty elements in the html under slides_nav
//these can be styled with css to be visible

//calling the func
initiateCarousel();

function switchSlide(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    //if index is greater than the n arg
    //moves current and next slides into position
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
        //do the opposite if lesser than
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "slide";
            //hides image and removes class active
            slides[i].style.opacity=0;
            indicators[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        indicators[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}
var timer=null;

//using the setTimer func activate slides moving func every interval
function setTimer(){
    timer=setInterval(function () {
        switchSlide(1) ;
    },5000);
}

//call timer
setTimer();

//stoping or activating timer with button
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPause");
    //if timer is null move icon image to possition 
    //and vise versa
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="2px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-30px"
    }
}