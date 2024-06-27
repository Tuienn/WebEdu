const container = document.getElementById('container_payment');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// var input_child = document.querySelector('.viewFee-container-content-select-child .input_text');
// var subnav_viewFee = document.querySelector('.viewFee-container-content-select-child .subnav');
// input_child.addEventListener("click", function(){
//     subnav_viewFee.setAttribute('style', 'display: grid');
// })

function setValueSelectedChild(){
    var selectedChild = document.querySelectorAll('.viewFee-container-content-select-child .subnav li');

    for(let i=0; i<2; i++){
        selectedChild[i].addEventListener("click", function(){
            document.querySelector('.viewFee-container-content-select-child .input_text').value = selectedChild[i].innerText;
            // document.querySelector('.viewFee-container-content-select-child .subnav').setAttribute('style', 'display: none');
        });
    }
}
setValueSelectedChild();