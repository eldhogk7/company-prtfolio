document.addEventListener('DOMContentLoaded', function() {
    // Get the id and section parameters from the URL
    var params = new URLSearchParams(window.location.search);
    var idname = params.get('id');
    // var sectionId = params.get('section');

    // Perform actions based on the parameters
    if (idname) {
       fillmessage(idname);
    }
});

function fillmessage(selectedValue) {
    // Define an array with values and corresponding contents
    const data = [
        { value: 'iot', subject: 'Enquiry for IoT', msg: 'I would like to know more about your IoT products and services.' },
        { value: 'iiot', subject: 'Enquiry for Industrial IoT', msg: 'I would like to know more about your Industrial IoT products and services.' },
        { value: 'ciot', subject: 'Enquiry for Consumer IoT', msg: 'I would like to know more about your Consumer IoT products and services.' },
        { value: 'aiot', subject: 'Enquiry for Agricultural IoT', msg: 'I would like to know more about your Agricultural IoT products and services.' },
        { value: 'temp_sens', subject: 'Enquiry for Temperature Analyser', msg: 'I would like to know more about this iot product Temperature Analyser.' },
        { value: 'smart_pot', subject: 'Enquiry for Smart Pot', msg: 'I would like to know more about this iot product Smart Pot.' },
        { value: 'iot_custom', subject: 'Enquiry for Custom Iot Products and Services', msg: 'I would like to know more about this custom iot service.' },

        { value: 'embed', subject: 'Enquiry for Embedded System Products and Services', msg: 'I would like to know more about your Embedded system product and service.' },
        { value: 'smart_really', subject: 'Enquiry for smart Really', msg: 'I would like to know more about this product Smart Really.' },
        { value: 'embed_custom', subject: 'Enquiry for custom Embedded services', msg: 'I would like to know more about this custom embedded Board design.' },

        { value: 'robot', subject: 'Enquiry for Abhram Robots', msg: 'I would like to know more about the Robots of Abhram Technologies.' },

        { value: 'drone', subject: 'Enquiry for Abhram Drones', msg: 'I would like to know more about the drones and its services.' },
        { value: 'fpv_nano', subject: 'Enquiry for FPV Nano Drones', msg: 'I would like to know more about this product FPV Nano Drones' },
        { value: 'fpv_micro', subject: 'Enquiry for FPV Micro Drones', msg: 'I would like to know more about this product FPV Micro Drones' },
        { value: 'fpv_mini', subject: 'Enquiry for FPV Mini Drones', msg: 'I would like to know more about this product FPV Mini Drones' },
        { value: 'survi_drone', subject: 'Enquiry for Surveillance Drones', msg: 'I would like to know more about your Surveillance Drones' },
        { value: 'agri_drone', subject: 'Enquiry for Agricultural Drones', msg: 'I would like to know more about your Agricultural Drones' },
        { value: 'vtol', subject: 'Enquiry for Vtol Power Board', msg: 'I would like to know more about this product VTOL Power Board' },
        { value: 'vtol_plus', subject: 'Enquiry for Vtol Power Board Plus', msg: 'I would like to know more about this product VTOL Power Board Plus' },
        { value: 'vtol_pro', subject: 'Enquiry for Vtol Power Board Pro', msg: 'I would like to know more about this product VTOL Power Board Pro' },
        { value: 'drone_custom', subject: 'Enquiry for Custom Drones products', msg: 'I would like to know more about your custom drone products' },

        { value: 'com', subject: 'Enquiry For Cloud-on-Module', msg: 'I would like to know more about cloud-on-module (COM) services of Abhram Technologies' },
        { value: 'som', subject: 'Enquiry For System-on-Module', msg: 'I would like to know more about System-on-module (SOM) services of Abhram Technologies' },

        { value: 'services', subject: 'Enquiry for Abhram Technologies Services', msg: 'I would like to know more about Abhram Technologies services from you' },
        { value: 'acs', subject: 'Enquiry for Abhram Cloud Services', msg: 'I would like to know more about the Abhram Cloud Services' },
        { value: 'randd', subject: 'Enquiry for Research and Development', msg: 'I would like to know more about the Research and Development of Abhram Technologies' },
        { value: 'mandp', subject: 'Enquiry for Product Manufacturing and Prototyping', msg: 'I would like to know more about the Product Manufacturing and Prototyping services of Abhram Technologies' },

        { value: 'store', subject: 'Enquiry for store', msg: 'I would like to know more about the store of Abhram Technologies.' },
        // Add more options as needed
    ];
    
    // Find the object in the array with the selected value
    const selectedOption = data.find(option => option.value === selectedValue);
    
    // Check if the selected option is found
    if (selectedOption) {
        // Get the content from the selected option
        const subjectToFill = selectedOption.subject;
        const msgToFill = selectedOption.msg;
    
        // Assuming there is an input element with the id "myInput"
        const inputsubject = document.getElementById('text-c261');
        const inputmsg = document.getElementById('message-3d90');
        // const name_input = document.getElementById('name_3d90');
        // Fill the input with the content
        inputsubject.value = subjectToFill;
        inputmsg.value = msgToFill;
        // console.log(subjectToFill);
        // console.log(msgToFill);
        // name_input.focus();

    } else {
        // Handle the case when the selected value is not found
        console.error('Parameter not found in the array');
    }
    // document.getElementById("name-id").focus();
}

// onclick="submitForm()"



function submitForm() {
    var name_id = encodeURIComponent(document.getElementById('name-3d90').value);
    var phn_id = encodeURIComponent(document.getElementById('phone-b074').value);
    var email_id = encodeURIComponent(document.getElementById('email-3d90').value);
    var subject_id = encodeURIComponent(document.getElementById('text-c261').value);
    var msg_id = encodeURIComponent(document.getElementById('message-3d90').value);
    var message = `data from Abhram Site \n\nemail=${email_id}\nname=${name_id}\nphone=${phn_id}\nmessage=${msg_id}\n`;
    if (name_id !== '' && email_id !== '' && msg_id !== '') {
        // Create the payload object
        var payload = {
            subject: subject,
            message: message
        };

        // Create an XMLHTTPRequest object
        var xhr = new XMLHttpRequest();

        // Define the request method and URL
        xhr.open('POST', 'https://685e5e36e802b899737ac27c--ibfm.netlify.app/.netlify/functions/sendMail', true); // Update the URL to your function

        // Set the request header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Set up the callback function to handle the response
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Handle the successful response
                    console.log(xhr.responseText);
                    document.getElementById("suc_msg").style.display = "block";
                    document.getElementById("mail_form").reset;
                    document.getElementById("close-icon");
                } else {
                    console.error('Error: ' + xhr.status);
                    document.getElementById("err_msg").style.display = "block";
                    document.getElementById("mail_form").reset;
                    document.getElementById("close-icon");
                }
            }
        };

        // Send the POST request with the JSON payload
        xhr.send(JSON.stringify(payload));
    }
}



// document.getElementById("name-id").addEventListener("input", function () {
//     document.getElementById("err_msg_form").style.display = "none";
// });
// document.getElementById("phn-id").addEventListener("input", function () {
//     document.getElementById("err_msg_form").style.display = "none";
// });
// document.getElementById("email-id").addEventListener("input", function () {
//     document.getElementById("err_msg_form").style.display = "none";
// });
// document.getElementById("subject-id").addEventListener("input", function () {
//     document.getElementById("err_msg_form").style.display = "none";
// });
// document.getElementById("msg-id").addEventListener("input", function () {
//     document.getElementById("err_msg_form").style.display = "none";
// });

function close_click_fun(){
    document.getElementById("suc_msg").style.display = "none";
    document.getElementById("err_msg").style.display = "none";
   
}