<?php

	include("../connect.php");

	$id=$_GET['id'];

	$sql="DELETE from products where ID='$id'";
	$query=mysqli_query($conn,$sql);