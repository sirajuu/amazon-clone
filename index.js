const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click",function(event){
    console.log("do0ne");
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft += 1250;
    event.preventDefault();
});

leftbtn.addEventListener("click",function(event){
    // console.log("do0ne");
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -= 1250;
    event.preventDefault();
});