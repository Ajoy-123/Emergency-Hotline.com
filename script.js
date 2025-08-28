// function:: get Id
function getId(id){
    return document.getElementById(id);
}

// heart count
const heartIcons = document.querySelectorAll(".heart-icon");
for(const heartIcon of heartIcons){
    heartIcon.addEventListener("click", function(){
    let heartCount = Number(getId("heart-count").innerText);
    heartCount++;
    getId("heart-count").innerText = heartCount;
    console.log(heartCount);
})
}


