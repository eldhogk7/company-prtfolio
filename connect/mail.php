<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve form data
    // $name = isset($_POST['name-id']) ? $_POST['name-id'] : '';
    // $phone = isset($_POST['phn-id']) ? $_POST['phn-id'] : '';
    // $email = isset($_POST['email-id']) ? $_POST['email-id'] : '';
    // $subject = isset($_POST['subject-id']) ? $_POST['subject-id'] : '';
    // $message = isset($_POST['msg-id']) ? $_POST['msg-id'] : '';
    $name = isset($_GET['name-id']) ? $_GET['name-id'] : '';
    $phone = isset($_GET['phn-id']) ? $_GET['phn-id'] : '';
    $email = isset($_GET['email-id']) ? $_GET['email-id'] : '';
    $subject = isset($_GET['subject-id']) ? $_GET['subject-id'] : '';
    $message = isset($_GET['msg-id']) ? $_GET['msg-id'] : '';

    
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    // $mail->Username = 'arjunlaiju0@gmail.com';
    // $mail->Password = 'wjzy oeae drjy kheg'; // Use your app password here
    $mail->Username = 'ctabhram@gmail.com';
    $mail->Password = 'ocqn mhdp fmvn aixp';
    $mail->SMTPSecure = 'tls'; // Use 'ssl' if SSL is required
    $mail->Port = 587; // Use 465 for SSL

    // Email content
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address';
        // Handle the error accordingly, don't proceed with sending the email
    } else {
        // Proceed with setting the email address in PHPMailer
        $mail->setFrom($email, $name);
    }

    $mail->addAddress('io@abhram.com', 'Abhram Technologies'); // Provide a complete and valid email address
    $mail->Subject = $subject;
    $mail->Body = 'Sender name: ' . $name . PHP_EOL
            . 'Sender Email: ' . $email . PHP_EOL
            . 'Sender Phone: ' . $phone . PHP_EOL . PHP_EOL
            . 'Message: ' . PHP_EOL . $message . PHP_EOL . PHP_EOL
            . 'Sender IP: ' . $_SERVER['REMOTE_ADDR'] . PHP_EOL
            . 'Sender Device & Browser Info: ' . $_SERVER['HTTP_USER_AGENT'];
    $mail->addReplyTo($email, $name);


    // Send the email
    try {
        $mail->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo 'console.error(' . $mail->ErrorInfo . ');';
    }
}
?>
