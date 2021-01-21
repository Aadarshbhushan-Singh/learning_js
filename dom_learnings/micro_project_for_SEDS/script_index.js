var ten=document.querySelector("#ten");
var twenty=document.querySelector("#twenty");
var thirty=document.querySelector("#thirty");
var fourty=document.querySelector("#fourty");
var fifty=document.querySelector("#fifty");

var text=document.querySelector("#heroText");

var textColor=document.querySelector("#textColor");

var body=document.querySelector("#background");
var color01=document.querySelector(".color01");
var color02=document.querySelector(".color02");

var btnAdd=document.querySelector("#btnAdd");
var addToList=document.querySelector("#addToList");
var shopingList=document.querySelector("#shopingList");

ten.addEventListener("click", function(){
    text.style.fontSize="10px";
});
twenty.addEventListener("click", function(){
    text.style.fontSize="20px";
});
thirty.addEventListener("click", function(){
    text.style.fontSize="30px";
});
fourty.addEventListener("click", function(){
    text.style.fontSize="40px";
});
fifty.addEventListener("click", function(){
    text.style.fontSize="50px";
});

textColor.addEventListener("input", function(){
    text.style.color=textColor.value;
});

color01.addEventListener("input", changeBackground);
color02.addEventListener("input", changeBackground);
function changeBackground(){
    body.style.background="linear-gradient(to right, "+color01.value + ", "+ color02.value+")";
}

function createListElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(addToList.value));
    shopingList.appendChild(li);
    addToList.value="";
}
btnAdd.addEventListener("click", function(){
    if (addToList.value.length>0){
        createListElement();
    }
    
});
addToList.addEventListener("keypress", function(){
    if (addToList.value.length>0 && event.keyCode===13){
        createListElement();
    }
});

const carouselSlider=document.querySelector(".carouselSlider");
const carouselImage=document.querySelectorAll(".carouselSlider img");
const prevBtn=document.querySelector("#previous");
const nextBtn=document.querySelector("#next");

let counter=1;
const size=carouselImage[0].clientWidth;

carouselSlider.style.transform="translateX("+(-size*counter)+"px)";
//buttons

nextBtn.addEventListener("click", function(){
    if (counter>= carouselImage.length-1) return;
    carouselSlider.style.transition="transform 0.4s ease-in-out";
    counter++;
    carouselSlider.style.transform="translateX("+(-size*counter)+"px)";});

prevBtn.addEventListener("click", function(){
    if (counter<=0) return;
    carouselSlider.style.transition="transform 0.4s ease-in-out";
    counter--;
    carouselSlider.style.transform="translateX("+(-size*counter)+"px)";});

carouselSlider.addEventListener("transitionend", function(){
    if (carouselImage[counter].id === 'lastClone'){
        carouselSlider.style.transition="none";
        counter=carouselImage.length -2;
        carouselSlider.style.transform="translateX("+(-size*counter)+"px)";
    }
    if (carouselImage[counter].id === 'firstClone'){
        carouselSlider.style.transition="none";
        counter=carouselImage.length - counter;
        carouselSlider.style.transform='translateX('+(-size*counter)+'px)';

    }
    
})

