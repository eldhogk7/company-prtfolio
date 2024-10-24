// onclick="submitForm()"

function submitForm() {
    var name_id = encodeURIComponent(document.getElementById('name-e4cc').value);
    // var phn_id = encodeURIComponent(document.getElementById('phone-b074').value);
    var email_id = encodeURIComponent(document.getElementById('email-e4cc').value);
    // var subject_id = encodeURIComponent(document.getElementById('text-c261').value);
    var msg_id = encodeURIComponent(document.getElementById('message-e4cc').value);
    // var err_msg_form = document.getElementById("err_msg_form");

    // var name_id1 = document.getElementById('name-id');
    // var phn_id1 = document.getElementById('phn-id');
    // var email_id1 = document.getElementById('email-id');
    // var subject_id1 = document.getElementById('subject-id');
    // var msg_id1 = document.getElementById('msg-id');


    // Check if the form is valid
    if (name_id !== '') {
        // if (phn_id !== '') {
            if (email_id !== '') {
                // if (subject_id !== '') {
                    if (msg_id !== '') {
                        var queryString = "name-id=" + name_id + "&email-id=" + email_id + "&msg-id=" + msg_id;

                        // Create an XMLHTTPRequest object
                        var xhr = new XMLHttpRequest();

                        // Define the request method and URL
                        xhr.open('GET', 'connect/mail2.php?' + queryString, true);

                        // Set up the callback function to handle the response
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    // Handle the response here if needed
                                    console.log(xhr.responseText);
                                    document.querySelector(".u-btn-submit").style.display = "none";
                                    document.getElementById("suc_msg").style.display = "block";
                                    document.getElementById("mail_form").reset;
                                    
                                } else {
                                    // Handle error
                                    console.error('Error: ' + xhr.status);
                                    document.querySelector(".u-btn-submit").style.display = "none";
                                    document.getElementById("err_msg").style.display = "block";
                                    document.getElementById("mail_form").reset;
                                    
                                }
                            }
                        };

                        // Send the GET request
                        xhr.send();

                    } 
                    // else {
                    //     err_msg_form.style.display = "flex";
                    //     err_msg_form.innerText = "Please fill in the Message Box";
                    //     msg_id1.focus();
                    // }
                // } 
                // else {
                //     err_msg_form.style.display = "flex";
                //     err_msg_form.innerText = "Please fill in the field Subject";
                //     subject_id1.focus();
                // }
            } 
            // else {
            //     err_msg_form.style.display = "flex";
            //     err_msg_form.innerText = "Please fill in the field Email";
            //     email_id1.focus();
            // }
        // } 
        // else {
        //     err_msg_form.style.display = "flex";
        //     err_msg_form.innerText = "Please fill in the field Phone";
        //     phn_id1.focus();
        // }
    } 
    // else {
    //     err_msg_form.style.display = "flex";
    //     err_msg_form.innerText = "Please fill in the field Name";
    //     name_id1.focus();
    // }
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
    document.querySelector(".u-btn-submit").style.display = "";
    var redirectUrl = "index.html";
    window.location.href = redirectUrl;
}