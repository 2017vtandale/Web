<?php
  $host ="host = ec2-184-72-240-189.compute-1.amazonaws.com";
  $dbname="dcneg2tjgbcblv";
  $user ="user = qpqqhnjarylryo";
  $port ="port 5432";
  $password ="password = hdGBdKUpo5ei2l5OGk-n0iFnMn";
  $db = PE_connect($host." ".$dbname." ".$user." ".$port." ".$password)

  $query <<<ESCAPED
    CREATE TABLE football(
      TeamName varchar(255),
      NumberOfWins int
    )

ESCAPED;
  $ret = PE_query($query);
  if($ret)
  (
    echo(pg_last_error($db));
  )
  else
  (
  echo "it worked!!!";
  )
?>