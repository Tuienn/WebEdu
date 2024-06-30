//Set time now
var getFormattedDate = () => {
    var date = new Date();

    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  

//create event for input type checkbox whent click (change event)

function checkAttendance(index){
    var group_checkbox = document.querySelectorAll('input[type="checkbox"]');
    //create event for input type checkbox whent click (change event)
    for(let i=0; i<group_checkbox.length; i++){
        group_checkbox[i].addEventListener("change", function() {
            var parentOfCheckbox = group_checkbox[i].parentElement.parentElement;
            if(parentOfCheckbox.className != 'active-row'){
                parentOfCheckbox.classList.add('active-row');
                arrayStudent[index][i].isPresent = 1;
            }
            else{
                arrayStudent[index][i].isPresent = 0;
                parentOfCheckbox.classList.remove('active-row');
            }
        });
    }
}
document.querySelector('.attendance_today').innerText = getFormattedDate();

// Sự kiện chọn lớp subnav
var subnav_classSelect = -1;
function setDataToTable_subnav(){
    for(let index=0; index<arrayClass.length; index++){
        document.getElementById(index).addEventListener("click", function(){
            subnav_classSelect = index;
            renderData_table(arrayStudent, index);
        });
    }
}


//Call API to get data
var classGETAPI = 'http://localhost:3000/classGET'; 
var studentGETFollowClassAPI='http://localhost:3000/studentGETFollowClass';
var attendancePOSTAPI = 'http://localhost:3000/POSTAttendance'
function startTeacher(){
    getClassData(returnArrayClass, returnArrayStudentByClass)
}

startTeacher();

function getClassData(callback1, callback2){
    fetch(classGETAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback1)//Trả về mảng dữ liệu các lớp của giáo viên và Render vào subnav chọn lớp
        .then(callback2)
        .catch(function(error){
            console.log(error);
        });
}
var arrayClass = [];
var arrayStudent = [];
function returnArrayClass(dataJson){
    // console.log(dataJson);
    var array = dataJson.map(function(dataClass){
        return {
            id : dataClass.id,
            className : dataClass.className
        }
    });
    arrayClass = arrayClass.concat(array);
    renderClassData_subnav(array);
    // console.log(arrayClass);
    return array;
    // setDataToTable_subnav();
}
function returnArrayStudentByClass(arrayClass){
    // console.log(arrayClass)
    for(let index=0; index<arrayClass.length; index++){
        getStudentsByClass(index, returnArrayStudent)
    }
    // console.log(arrayStudent)
    // console.log(arrayStudent);
}
function getStudentsByClass(index, callback){
    fetch(studentGETFollowClassAPI+'/'+arrayClass[index].id)
            .then(function(response){
                return response.json();
            })
            .then(callback)
            .catch(function(error){
                console.log(error);
            })
}
// CÓ data thì phải sửa lại hàm này, bỏ các id của lớp
function returnArrayStudent(dataStudent){
        var aStudent = {
            id: dataStudent.id,
            students: dataStudent.students.map(function(dataStudent){
                return{
                    id : dataStudent.id,
                    name : dataStudent.name,
                    gender: dataStudent.gender,
                    isPresent: 0
                }
                }
            )
        }
        
        arrayStudent.push(aStudent.students)
}
        
var subnav_classSelect = document.querySelector('#teacher .subnav')
function renderClassData_subnav(datas){
    // console.log(datas);
    var index=-1;
    var htmls = datas.map(function(data){
        ++index;
        return `<li id="${index}">${data.className}</li>`
    })
    var html = htmls.join('');

    subnav_classSelect.innerHTML = html;

    setDataToTable_subnav();
 }

 var table = document.querySelector('table tbody');
 function renderData_table(array, index){
    // console.log(array[index]);
    let i=0;
    console.log(array[index]);
    var htmls = array[index].map(function(student){
        i++;
        var gender = (student.gender==1) ?"Nam":"Nữ";
        return `<tr>
                    <td>${i}</td>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${gender}</td>
                    <td>
                        <input type="checkbox" class="checkbox">
                    </td>
                </tr>`
    });
    var html = htmls.join('');
    table.innerHTML = html;


    // Sau khi render xong thì gọi hàm checkAttendance để thêm sự kiện cho checkbox
    checkAttendance(index);
 }
//  POST API cho nút click
var btnSaveAttendance = document.querySelector('.attendance_form_today .btn');
function postAttendance(data){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(attendancePOSTAPI, options)
        .then(function(response){
            return response.json();
        })
        .catch(function(error){
            console.log(error);
        });
}
function checkTableIsNull(){
    if(table.querySelectorAll('tr').length ==0){
        return true;
    }
    return false;
}
btnSaveAttendance.addEventListener("click", function(){
    var group_checkbox = document.querySelectorAll('input[type="checkbox"]');
    if(checkTableIsNull()){
        alert('Bảng chưa có dữ liệu');
    }
    else{
        console.log(arrayStudent[subnav_classSelect]);
        for(let index=0; index<group_checkbox.length; index++){
            var formData = {
                "id": arrayStudent[subnav_classSelect][index].id,
                "date": getFormattedDate(),
                "isPresent": arrayStudent[subnav_classSelect][index].isPresent
            }
            postAttendance(formData);
        }
    }
})


