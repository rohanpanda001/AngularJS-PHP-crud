<?php
	include("../connect.php");

	$data = json_decode(file_get_contents("php://input"));
	$name=$data->name;
	$desc=$data->description;
	$price=$data->price;
	$category=$data->category_id;

	$sql="INSERT into products(name,description,price,category_id) values('$name','$desc','$price','$category')";
	$query=mysqli_query($conn,$sql);

	if(!$query)
		echo "Not Inserted! ".mysqli_error($conn);
