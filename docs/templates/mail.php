<?php
// PHP script for sending an email

$name = $_POST['form-name' + ' ' + 'form-lastname'];
$visitor_email = $_POST['form_email'];
$subject = $_POST['form_subject']
$message = $_POST['form_message'];
$webpageRating = $_POST['webpageScale']
$photoRating = $_POST['photoScale']

$email_from = 'form@code-c.github.io.com';

$email_subject = "Web Form - $subject";

$email_body = "from: $name\n".
              "Their message:\n $message".
              "web page rating: $webpageRating"
              "Photo rating: $photoRating"

$to = "codiecottrell@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

// check to see if there were any injection attempts or
// invalid characters
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );

    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

// check email value for injections
if(IsInjected($visitor_email))
{
    exit;
}

mail($to,$email_subject,$email_body,$headers);

?>
