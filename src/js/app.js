document.querySelectorAll('a[href^="#"]').forEach(achor => {
    achor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth", 
        });
    });
});

// phone navbar
const check = document.querySelector(".check");
const swab = document.querySelector(".swab");

check.addEventListener("click", function(){
    swab.classList.toggle("click");
})

const close = document.querySelector(".close")
close.addEventListener("click", function(){
    swab.classList.remove("click")
})