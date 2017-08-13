<?php

	include("../connect.php");

	$id=$_GET['id'];

	$sql="SELECT * from products where ID='$id'";
	$query=mysqli_query($conn,$sql);
	$data=array();
	while($row=mysqli_fetch_assoc($query)){
	  $data[]=$row;
	}
  
    echo json_encode($data);