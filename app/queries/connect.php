
<?php
$db="angular-test";
$conn=mysqli_connect('127.0.0.1','root','rohan001',$db);

if (!$conn) {
    die("Connection failed: " . $conn->connect_error);
} 
?>