var section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        // showBtn = document.querySelector(".show-modal"),
        closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function(){
    section.setAttribute("style", "display: none");
})