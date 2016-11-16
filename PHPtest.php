<?php
  $host ="host=ec2-184-72-240-189.compute-1.amazonaws.com";
  $dbname="dbname=dcneg2tjgbcblv";
  $user ="user=qpqqhnjarylryo";
  $port ="port-5432";
  $password ="password=hdGBdKUpo5ei2l5OGk-n0iFnMn";
  $db = pg_connect($dbname." ".$host." ".$port." ".$user." ".$password."sslmode=requre");
  $query = "INSERT INTO Football VALUES('Redskins', 4)";
    $ret = pg_query($query);
    if(!$ret){
        echo(pg_last_error($db));
    }
    else{
        echo("successfully added row");
    }

?>
