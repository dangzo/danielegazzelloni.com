<?php

require('PHPMailer/PHPMailerAutoload.php');

if($_POST) {
    $fromName = trim(stripslashes($_POST['c_name']));
    $fromMail = trim(stripslashes($_POST['c_email']));
    $contact_message = trim(stripslashes($_POST['c_message']));
    
    // Set Message
    $message = "Email from: " . $fromName . "<br />";
    $message .= "Email address: " . $fromMail . "<br />";
    $message .= "<br />Message: <br /><br />";
    $message .= $contact_message;
    $message .= "<br /> ----- <br /> This email was sent from danielegazzelloni.com contact form. <br />";
    
    // Set alternative message for non-HTML mail agents
    $altMessage = "Email from: " . $fromName . "\r\n";
    $altMessage .= "Email address: " . $fromMail . "\r\n\r\n";
    $altMessage .= "Message: \r\n\r\n";
    $altMessage .= $contact_message;
    $altMessage .= "\r\n ----- \r\n This email was sent from danielegazzelloni.com contact form. \r\n";
    
    // Set From: header
    $from =  $fromName . " <" . $fromMail . ">";
    
    $mail = new PHPMailer();

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'srv-hp18.netsons.net';            // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'daniele@danielegazzelloni.com';     // SMTP username
    $mail->Password = 'o029Kl7fsM';                         // SMTP password
    $mail->SMTPSecure = 'SSL';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    $mail->From = $fromMail;
    $mail->FromName = $fronName;
    $mail->addAddress('hello@danielegazzelloni.com', 'Daniele Gazzelloni');     // Add a recipient
    $mail->addReplyTo($fromEmail, $fromName);

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = $message;
    $mail->AltBody = $altNessage;

    // $result contains the JSON to reply with
    if(!$mail->send()) {
        $result = array('sendstatus' => 0, 'message' => 'Mail could not been sent. Please try again.', 'error' => $mail->ErrorInfo);
    } else {
        $result = array('sendstatus' => 1, 'message' => 'Message successfully sent.');
    }

    // Return a JSON object
    echo json_encode($result);
    exit();

} # end-if ($_POST)

?>