let menuBtn = document.querySelector("#menu-mobile");
let firstBar = document.querySelector("#menu-mobile span:first-child");
let secondBar = document.querySelector("#menu-mobile span:nth-child(2)");
let thirdBar = document.querySelector("#menu-mobile span:last-child");
let background = document.querySelector(".background");
let mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
    if (firstBar.classList.contains("transition")) {
        firstBar.classList.remove("transition");
        secondBar.classList.remove("transition2");
        thirdBar.classList.remove("transition3");
        background.classList.remove("opacity");
        mobileNav.classList.remove("appear");
    } else {
        firstBar.classList.add("transition");
        secondBar.classList.add("transition2");
        thirdBar.classList.add("transition3");
        background.classList.add("opacity");
        mobileNav.classList.add("appear");
    }
})
let acc = document.querySelectorAll(".btn");

for (let i = 0; i < acc.length; i++) {
    let btnAcc = acc[i];
    btnAcc.addEventListener("click", function() {
        let ulList = this.nextElementSibling;
        ulList.classList.toggle("active");
  
   
  })
}

