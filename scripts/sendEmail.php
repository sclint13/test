<?php 

$name = $_POST['usersName'];
$email = $_POST['usersEmail'];
$message = $_POST['body'];

$to = 'stephanieClinton@stephaniedclinton.com';
$body = '';
$subject = $name. ' has sent a message from StephanieDClinton.com';

$body .= 'From: ' . $name . "\r\n";
$body .= 'Email: ' . $email . "\r\n";
$body .= 'Message: ' . $message . "\r\n";
$headers = 'Reply-To: ' . $email. "\r\n" ;

mail($to, $subject, $body, $headers);
$message_sent = true; 

?>