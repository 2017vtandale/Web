<?php
	//instantiate our DB object
	  $host ="host=ec2-184-72-240-189.compute-1.amazonaws.com";
	  $dbname="dbname=dcneg2tjgbcblv";
	  $user ="user=qpqqhnjarylryo";
	  $port ="port-5432";
	  $password ="password=hdGBdKUpo5ei2l5OGk-n0iFnMn";
	$db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);
	//Create a table try/catch
	$query = <<<ESCAPED
		CREATE TABLE Football(
			TeamName varchar(255),
			NumberOfWins int
		)
ESCAPED;
	//$query = "CREATE TABLE Football(TeamName varchar(255),NumberOfWins int)"
	$ret = pg_query($query);
	if(!$ret)
	{
		echo(pg_last_error($db));
	}
	else
	{
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
