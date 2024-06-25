// var courseAPI = 'http://localhost:3000/courses';

// function start(){
//     getCourses(renderCourses);
    //C2
    // getCourses(function(courses){
    //     renderCourses(courses);
    // })
    // handleCreateCourses();
    // handleUpdateCourses();
//}

// start();

// function getCourses(callback){
//     console.log(courseAPI);
//     fetch(courseAPI)
//         .then(function(response){
//             return response.json();
//         })
//         .then(callback)
//         .catch(function(error){
//             console.log(error);
//         });
// }

// function createCourses(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(courseAPI, options)
//         .then(function(response){
//             return response.json();
//         })
//         .then(callback)
//         .catch(function(error){
//             console.log(error);
//         });
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

// function handleCreateCourses(){
//     var btn = document.querySelector('.btn');

//     btn.addEventListener('click', function(){

//         var id = document.querySelector('input[name="id"]').value;
//         var name = document.querySelector('input[name="name"]').value;
//         console.log(id, name);
//         var formData = {
//             id: id,
//             name: name
//         };

//         createCourses(formData, function(){
//             getCourses(renderCourses);//Sau khi tạo mới thì render lại giao diện
//         });
//         // createCourses(formData, function(){})
//     })
// }

// function deleteCourse(id){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     };
//     fetch(courseAPI + '/' + id, options)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(){
//             getCourses(renderCourses);
//         })
//         .catch(function(error){
//             console.log(error);
//         });
// }

// function updateCourses(data, callback){
//     var options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
//     fetch(courseAPI+'/'+ '1', options)
//         .then(function(response){
//             return response.json();
//         })
//         .then(callback)
//         .catch(function(error){
//             console.log(error);
//         });
// }

// function handleUpdateCourses(){
//     var btn = document.querySelector('.btn');

//     btn.addEventListener('click', function(){

//         var id = "1";
//         var name = "Name";
//         console.log(id, name);
//         var formData = {
//             id: id,
//             name: name
//         };

//         updateCourses(formData, function(){
//             getCourses(renderCourses);//Sau khi tạo mới thì render lại giao diện
//         });
//         // createCourses(formData, function(){})
//     })
// }
