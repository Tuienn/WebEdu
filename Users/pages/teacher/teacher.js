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

// Mở giao diện thông tin cá nhân
var header_logo_user = document.querySelector('.header_logo_user');
var main_modal_information = document.querySelector('.main_modal_information');
header_logo_user.addEventListener("click", function(){
    loadContent(main_modal_information, '/Users/pages/modalInfor/modal.html', '/Users/pages/modalInfor/modal.js')  
});

//create event for input type checkbox whent click (change event)
var group_checkbox = document.querySelectorAll('input[type="checkbox"]');


for(let index=0; index<5; index++){
    group_checkbox[index].addEventListener("change", function() {
        var parentOfCheckbox = group_checkbox[index].parentElement.parentElement;
        if(parentOfCheckbox.className != 'active-row')
            parentOfCheckbox.classList.add('active-row');
        else
            parentOfCheckbox.classList.remove('active-row');
    });
}

