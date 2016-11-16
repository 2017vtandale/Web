<?php
	//instantiate our DB object
	$host ="host=ec2-54-243-59-15.compute-1.amazonaws.com";
	$dbname="dbname=d2p8qh6esl50d9";
	$user ="user=umytqcshywmkvl";
	$port ="port-5432";
	$password ="password=-suxmkeL_GhbeXFKIlKzbxr1Kp";
	$connectstr =  "dbname=d2p8qh6esl50d9 host=ec2-54-243-59-15.compute-1.amazonaws.com port=5432 user=umytqcshywmkvl password=-suxmkeL_GhbeXFKIlKzbxr1Kp sslmode=require";
	$db = pg_connect($connectstr);


$query = "SELECT * FROM Football";
	$ret = pg_query($query);
	if(!$ret){
			echo(pg_last_error($db));
	}
	else{
			while ($row = pg_fetch_row($ret)) {
					echo("Team:".$row[0]."Num of Wins:".$row[1]);
					//echo "<br />\n";
			}
			echo("success");
	}
	//Query our table
?>
