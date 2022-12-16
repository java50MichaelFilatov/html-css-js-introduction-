const detailsImage = document.querySelector(".details-image");
const detailsTitle=document.querySelector(".details-title");
const anchorElements=document.querySelectorAll(".thumbnails-anchor");
const mainElement=document.querySelector(".main-class");
const hideButtonElement=document.getElementById("hide-button");
const detailsContainer=document.querySelector(".details-container");
const HIDDEN="hidden";
const IS_POINT="is-point";
function showDetails(){
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
        
    }, 5000);


}
function hideDetails(){
mainElement.classList.add(HIDDEN);
}

function setDetails(anchor) {

    detailsImage.src=anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    showDetails();
    
    const color=anchor.getAttribute("data-text-color");
    if(color){
        detailsTitle.getElementsByClassName.color=color;
    }else{
            detailsTitle.style.colour='';
        }
    
}
for(let i=0;i<anchorElements.length;i++)
{
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);

    })
    hideButtonElement.addEventListener("click",hideDetails);


}
