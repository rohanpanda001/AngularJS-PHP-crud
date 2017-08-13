<?php

	include("../connect.php");

	$data = json_decode(file_get_contents("php://input"));
	$name=$data->name;
	$desc=$data->description;
	$price=$data->price;
	$category=$data->category_id;
	$id=$data->id;

	$sql="UPDATE products SET Name='$name',Description='$desc',Price='$price' where ID='$id'";
	$query=mysqli_query($conn,$sql);
	if(!$query)
		echo "Not Inserted! ".mysqli_error($conn);