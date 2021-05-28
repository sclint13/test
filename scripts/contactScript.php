<?php

//This script sends contact info

$to = 'stephanieclinton@stephaniedclinton.com'; //Set to email where the info should go
$name = $_POST['usersName'];
$email = $_POST['usersEmail'];
$message = $_POST['body'];
// $botChecker = $_POST['watchdog'];

// if(!empty($botChecker)){
//     header('location: https://stephaniedclinton.com'); //Place redirect location here 
//     die();
// }

//Strip Special Characters

$name = strip_tags($name);
$email = strip_tags($email);
$message = strip_tags($message);

//Trim Spaces
$name = trim($name);
$email = trim($email);
$message = trim($message);

$subject = $name. ' has sent a message from StephanieDClinton.com';

//Set a default answer if no on contact page or if no message was entered
// if(!isset($message)){
//     $message = "No message provided.";
//     if (empty($name) || empty($email)){
//         header('location: https://stephaniedclinton.com');
//     }else{
//         $headers =  "From: $email";
//         $message = "Hello, "."\n";
//         // $message

//         mail($to, $subject, $message, $headers);

//         header('location: https://stephaniedclinton.com/') //Create A success page & enter it here
//     }
// }

?>