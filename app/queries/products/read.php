<?php

	include("../connect.php");

	$sql="SELECT * from products";
	$query=mysqli_query($conn,$sql);
	$data=array();
	while($row=mysqli_fetch_assoc($query)){
	  $data[]=$row;
	}
  
    echo json_encode($data);