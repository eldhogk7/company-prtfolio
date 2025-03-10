// onclick="submitForm()"


function submitForm() {
    var name_id = document.getElementById('name-e4cc').value;
    var email_id = document.getElementById('email-e4cc').value;
    var msg_id = document.getElementById('message-e4cc').value;
    var subject='client enquiry'
    var message = `email=${email_id}\nname=${name_id}\nmessage=${msg_id}\n`;
    // Check if the form is valid
    if (name_id !== '' && email_id !== '' && msg_id !== '') {
        document.querySelector(".u-btn-submit").style.display = "none";
        // Create the payload object
        var payload = {
            subject: subject,
            message: message
        };

        // Create an XMLHTTPRequest object
        var xhr = new XMLHttpRequest();

        // Define the request method and URL
        xhr.open('POST', 'https://benevolent-brigadeiros-fb8761.netlify.app/.netlify/functions/sendMail', true); // Update the URL to your function

        // Set the request header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // Set up the callback function to handle the response
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Handle the successful response
                    console.log(xhr.responseText);
                    document.querySelector(".u-btn-submit").style.display = "none";
                    document.getElementById("suc_msg").style.display = "block";
                    document.getElementById("mail_form").reset(); // Change this to reset()
                } else {
                    // Handle error
                    console.error('Error: ' + xhr.status);
                    document.querySelector(".u-btn-submit").style.display = "none";
                    document.getElementById("err_msg").style.display = "block";
                    document.getElementById("mail_form").reset(); // Change this to reset()
                }
            }
        };

        // Send the POST request with the JSON payload
        xhr.send(JSON.stringify(payload));
    }
    else{
        alert("Please fill all the fields")
    }
}




function close_click_fun(){
    document.getElementById("suc_msg").style.display = "none";
    document.getElementById("err_msg").style.display = "none";
    document.querySelector(".u-btn-submit").style.display = "";
   
}