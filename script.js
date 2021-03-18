let acc = document.querySelectorAll(".btn");

for (let i = 0; i < acc.length; i++) {
    let btnAcc = acc[i];
    btnAcc.addEventListener("click", function() {
        let ulList = this.nextElementSibling;
        ulList.classList.toggle("active");
  
   
  })
}

