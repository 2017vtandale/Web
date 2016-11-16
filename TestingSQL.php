<?php
	//instantiate our DB object
	$host ="host=ec2-54-243-59-15.compute-1.amazonaws.com";
	$dbname="dbname=d2p8qh6esl50d9";
	$user ="user=umytqcshywmkvl";
	$port ="port-5432";
	$password ="password=-suxmkeL_GhbeXFKIlKzbxr1Kp";
	$db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);
	//Create a table try/catch
	echo($db);
	echo"I made it before query" ;
	$query = "CREATE TABLE Football(TeamName varchar(255),NumberOfWins int)";
	$ret = pg_query($query);

	if(!$ret){
		echo(pg_last_error($db));
	}
	else{
		echo "It worked!!!!";
	}
	//Add some data
	$query = <<<ESCAPED
		INSERT INTO Football VALUES(
			Redskins, 4
		);
ESCAPED;
$ret = pg_query($query);
	if(!$ret)
	{
		echo(pg_last_error($db));
	}
	else
	{
		echo "It worked!!!!";
	}
	//Query our table
?>
