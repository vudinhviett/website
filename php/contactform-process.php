<?php
$errorMSG = "";

if (empty($_POST["name"])) {
$errorMSG = "Bạn cần điền tên! ";
} else {
$name = $_POST["name"];
}

if (empty($_POST["email"])) {
$errorMSG = "Bạn cần điền số điện thoại! ";
} else {
$email = $_POST["email"];
}
if (empty($_POST["message"])) {
$errorMSG = "Bạn cần điền lời nhắn! ";
} else {
$message = $_POST["message"];
}


$EmailTo = "vudinhviett@gmail.com";
$Subject = "Email tự động từ website!";
$emaila = "kh";

// prepare email body text
$Body = "THÔNG TIN KHÁCH HÀNG:";
$Body .= "\n";
$Body .= "\n";
$Body .= "\n";
$Body .= "Tên: ";
$Body .= $name;
$Body .= "\n";
$Body .= "\n";
$Body .= "Số điện thoại: ";
$Body .= $email;
$Body .= "\n";
$Body .= "\n";
$Body .= "Lời nhắn: ";
$Body .= $message;
$Body .= "\n";
$Body .= "\n";
$Body .= "\n";
$Body .= "Email này được gửi tự động khi có người điền thông tin trên website!";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$emaila);
echo "Cảm ơn bạn, chúng tôi đã nhận được thông tin và sẽ sớm liên hệ với bạn!";
