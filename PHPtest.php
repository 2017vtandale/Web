<?php
  $host ="host=ec2-184-72-240-189.compute-1.amazonaws.com";
  $dbname="dbname=dcneg2tjgbcblv";
  $user ="user=qpqqhnjarylryo";
  $port ="port-5432";
  $password ="password=hdGBdKUpo5ei2l5OGk-n0iFnMn";
  $db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);

  $query= <<<ESCAPED
    CREATE TABLE football
    (
      TeamName varchar(255),
      NumberOfWins int
    )

ESCAPED;
  echo $query;
  $ret = pg_query($query);
  if(!$ret)
  {
    echo("hi");
    echo(pg_last_error($db));
  }
  else
  {
  echo "it worked!!!";
}
?>
