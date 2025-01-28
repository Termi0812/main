var myButton  = document.getElementsByClassName("myButton")[0];

myButton.addEventListener("touchstart", function(){
    myButton.classList.add("myButtonHover");
})

myButton.addEventListener("touchend", function(){
    myButton.classList.remove("myButtonHover");
})