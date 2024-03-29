const navbar = document.querySelector(".navbar")
allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {
    li.addEventListener("click" , e =>{
        e.preventDefault();//preventing from submitting
        navbar.querySelector(".active").classList.remove("active");
        li.classList.add("active");

        const indicator = document.querySelector(".indicator");
        indicator.style.transform = `translatex(calc(${index * 90}px))`;
    });
});