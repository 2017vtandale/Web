<?php 
	//instantiate our DB object
	$host="host=ec2-23-23-225-246.compute-1.amazonaws.com";
	$dbname="dbname=d2g9hb311v8dl8";
	$user="user=puuhajyxwxnpbc";
	$port="port=5432";
	$password="password=qX9Xe_KHwJG_AmTzjoUUbNwDQ6";
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