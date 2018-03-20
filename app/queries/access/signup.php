<?php
	include "../connect.php";
	$data = json_decode(file_get_contents("php://input"));
	$fname=$data->fname;
	$lname=$data->lname;
	$email=$data->email;
	$pass=$data->password;

	$sql="SELECT * from users where Email='$email'";
	$query=mysqli_query($conn,$sql);
	if(!$query)
		echo mysqli_error($conn);

	if(mysqli_num_rows($query)>0)
	{
		echo "exists";
	}
	else
	{
		$sql="INSERT into users(First_Name, Last_Name, Email, Password) values('$fname', '$lname', '$email', '$pass')";
		$query=mysqli_query($conn,$sql);
		if(!$query)
			echo mysqli_error($conn);	
		else
			echo "ok";
	}