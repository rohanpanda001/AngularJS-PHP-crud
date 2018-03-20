<?php

	include "../connect.php";
	$data = json_decode(file_get_contents("php://input"));
	$email=$data->email;
	$pass=$data->password;

	$sql="SELECT * from users where Email='$email' and Password='$pass'";
	$query=mysqli_query($conn,$sql);
	if(!$query)
		echo mysqli_error($conn);
	if(mysqli_fetch_assoc($query))
	{
		echo "true";
	}
	else
		echo "false";

?>