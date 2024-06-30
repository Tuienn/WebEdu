// Mở giao diện thông tin cá nhân
var header_logo_user = document.querySelector('.header_logo_user');
var main_modal_information = document.querySelector('.main_modal_information');
header_logo_user.querySelector('#subnav_li_infor').addEventListener("click", function(){
    loadContent(main_modal_information, 'pages/modalInfor/modal.html', 'pages/modalInfor/modal.js')  
});
//Mở giao diện học sinh
var container_main_func = document.querySelector('.container_main_function');

var group_nav_subnav_liSelect = document.querySelectorAll('#student_parent li');
for(let i=0; i<2; i++){
    group_nav_subnav_liSelect[i].addEventListener("click", function(){
        container_main_func.setAttribute('style', 'display: flex');
        loadContent(container_main_func, 'pages/student/student.html', 'pages/student/student.js');
    });
}
var test = document.querySelector('#student').addEventListener("click", function(){ 
    document.querySelector('section').setAttribute('style', 'display: flex');
})

// Mở giao diện thanh toán phụ huynh
var nav_li_Content_pay = document.querySelector('#parent .nav_li_content');
nav_li_Content_pay.addEventListener("click", function(){
    loadContent(container_main_func, 'pages/parent/parent.html', 'pages/parent/parent.js')
})

// Mở giao diện lịch dạy
var nav_li_Content_calendar = document.querySelector('#teacher .nav_li_content');
nav_li_Content_calendar.addEventListener("click", function(){
    loadContent(container_main_func, 'pages/teacher/teacher.html', 'pages/teacher/teacher.js')
})
// //Fake route
// // Get references to the navBar options and main

// Function to load content from an external file


function loadContent(mainDiv, file, scriptFile) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            mainDiv.innerHTML = data;

            // Remove existing script if any
            const existingScript = document.getElementById('dynamic-script');
            if (existingScript) {
                console.log('Removing existing script');
                existingScript.remove();
            }

            // Load and execute new script if provided
            if (scriptFile) {
                setTimeout(() => loadScript(scriptFile), 0);
            }
        })
        .catch(error => {
            mainDiv.innerHTML = '<p>Error loading content.</p>';
            console.error('Error:', error);
        });
}

// Function to load and execute an external script file
function loadScript(scriptFile) {
    const script = document.createElement('script');
    script.src = scriptFile;
    script.id = 'dynamic-script';
    script.onload = function() {
        console.log(`${scriptFile} loaded successfully.`);
    };
    document.getElementById('saveFullJS').appendChild(script);
}



