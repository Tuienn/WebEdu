// Xử lý phần đóng và mở modal
var btn_subnav_li_infor = document.querySelector('#subnav_li_infor')
function open_inforModal(){
    document.querySelector('.modal').setAttribute('style', 'display: flex');
}
btn_subnav_li_infor.addEventListener("click", open_inforModal);
// Mở giao diện thông tin cá nhân

var btn_modal_close = document.querySelector('.modal_close>i');
function close_inforModal(){
    document.querySelector('.modal').setAttribute('style', 'display: none');
}
btn_modal_close.addEventListener("click", close_inforModal);
// Đóng giao diện thông tin cá nhân

// Xử lý bên trong modal

// 1. Xử lý khi không nhập họ tên và địa chỉ
function checkTextIsNull(input){
    var getInput = input.value;
    if(getInput==''||getInput==undefined)
        return true;
    else
        return false;
}

// 4 groupInputs chứa titleIput + input + textError
var groupInput = document.querySelectorAll('.infor_container_content .group_input');

function setModalErrorText(){    
    var arrayResult = [checkTextIsNull(groupInput[0].querySelector('.input_text')), //checkTextIsNull_name
                        checkTextIsNull(groupInput[1].querySelector('.input_text')), //checkTextIsNull_birth
                         checkTextIsNull(groupInput[2].querySelector('.input_text'))]//checkTextIsNull_address
    // var count=0;
    
    for(var i=0; i<3; i++){
        // Nếu có nhập vào input
        if(arrayResult[i]==false){
            groupInput[i].querySelector('.input_text_error').innerText = '';
            // Text erro = ""
            groupInput[i].querySelector('.input_text').setAttribute('style', 'border: solid 1px black');
            // Border input về bình thường

            // count++;
        }
        // Nếu không nhập vào input
        else{
            groupInput[i].querySelector('.input_text').setAttribute('style', 'border:solid 2px red');
            // BorderInput màu đỏ
            
            if(i==0){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng nhập họ tên';
            }
            else if(i==1){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng chọn ngày sinh';
            }
            else if(i==2){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng nhập địa chỉ';
            }
        }
    }
}

var confirm_btn = document.querySelector('.infor_container_confirm_btn');
confirm_btn.addEventListener("click", setModalErrorText);
// SỰ kiện kiểm tra input null? được lắng nghe


// Khi click vào ô input thì ô đó sẽ về trạng thái bình thường(có tác dụng khi ô đó đang có hiện lỗi và sau đó nhập dữ liệu)
var input_text = document.querySelectorAll('.infor_container_content .input_text');

// C1: khi chưa clean code
// var groupInput = document.querySelectorAll('.infor_container_content .group_input');
// input_text[0].addEventListener("input", function(){

//     groupInput[0].querySelector('.input_text_error').innerText = '';
//     groupInput[0].querySelector('.input_text').setAttribute('style', 'border: solid 1px black');
// });

// input_text[1].addEventListener("input", function(){

//     groupInput[1].querySelector('.input_text_error').innerText = '';
//     groupInput[1].querySelector('.input_text').setAttribute('style', 'border: solid 1px black');
// });

// input_text[2].addEventListener("input", function(){

//     groupInput[2].querySelector('.input_text_error').innerText = '';
//     groupInput[2].querySelector('.input_text').setAttribute('style', 'border: solid 1px black');
// });

// C2(chạy được): Tự nghĩ theo c1 nhưng đổi let thành var(var là sai)
// Link giải thích: https://chatgpt.com/c/ed4a92c7-7b62-4f09-b4ef-85e4c7b326fb
// Khi click vào ô input thì ô đó sẽ về trạng thái bình thường(có tác dụng khi ô đó đang có hiện lỗi và sau đó nhập dữ liệu)

var groupInput = document.querySelectorAll('.infor_container_content .group_input');

for(let i=0; i<3; i++){
    input_text[i].addEventListener("input", function(){

        groupInput[i].querySelector('.input_text_error').innerText = '';
        groupInput[i].querySelector('.input_text').setAttribute('style', 'border: solid 1px black');
    });
}
// Nếu click nhập rồi thì phải nhâp, không thì báo lỗi
for(let i=0; i<3; i++){
    input_text[i].addEventListener("blur", function(){
        if(checkTextIsNull(input_text[i])){
            input_text[i].setAttribute('style', 'border:solid 2px red');

            if(i==0){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng nhập họ tên';
            }
            else if(i==1){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng chọn ngày sinh';
            }
            else if(i==2){
                groupInput[i].querySelector('.input_text_error').innerText = '(*)Vui lòng nhập địa chỉ';
            }
        }
    })  
}

//Mở giao diện học sinh
var container_main_func = document.querySelector('.container_main_function');

var group_nav_subnav_liSelect = document.querySelectorAll('.nav_subnav_liSelect');
for(let i=0; i<2; i++){
    group_nav_subnav_liSelect[i].addEventListener("click", function(){
        // Xóa các thẻ con của container_main_func
        var child_container_main_func = document.querySelector('.container_main_function>div');
        if(child_container_main_func!=null){
            child_container_main_func.remove();
        }

        container_main_func.setAttribute('style', 'display: flex');

        loadContent(container_main_func, '/Users/pages/student/student.html', '/Users/pages/student/student.js');
    });
}

// C3: CLean code theo chatGPT
// Khi click vào ô input thì ô đó sẽ về trạng thái bình thường(có tác dụng khi ô đó đang có hiện lỗi và sau đó nhập dữ liệu)

// modal_input_text.forEach((input, index) => {
//     input.addEventListener("input", function() {
//         groupInput[index].querySelector('.input_text_error').innerText = '';
//         groupInput[index].querySelector('.input_text').style.border = 'solid 1px black';
//     });
// });


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
    document.body.appendChild(script);
}

//Xử lý API
// var calendarAPI = "http://localhost:3000/calendar/HS1";

// function start(){
//     getCalendarData(renderCalendar);
// }

// start();

// function getCalendarData(callback){
//     fetch(calendarAPI)
//         .then(function(response){
//             return response.json();
//         })
//         .then(callback)
//         .catch(function(error){
//             console.log(error);
//         });
        
// }

// function renderCalendar(dates){
//     var listDate = document.querySelector('.test_API');

//     var htmls = dates.listDate.map(function(date){
//         return `
//         <li>
//             <h4>${date.date}</h4>
//             <p>${date.shift}</p>
//             <p>${date.status}</p>
//         </li>`;
//     });  
//     var html = htmls.join('');
//     listDate.innerHTML = html;
// }

// function renderCourses(courses){
//     var listCourses = document.querySelector('.test_API');
//     console.log(listCourses);
//     var htmls = courses.map(function(course){
//         return `
//         <li>
//             <h4>${course.id}</h4>
//             <p>${course.name}</p>
//         </li>`;
//     });  
//     var html = htmls.join('');
//     listCourses.innerHTML = html;
// }


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
