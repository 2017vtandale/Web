<?php
  $host ="host=ec2-23-23-225-246.compute-1.amazonaws.com";
  $dbname="dbname=d2g9hb311v8dl8";
  $user ="user=puuhajyxwxnpbc";
  $port ="port-5432";
  $password ="password=qX9Xe_KHWJG_AmTzjoUUbNwDQ6";
  $db = pg_connect($host." ".$dbname." ".$user." ".$port." ".$password);

  $query= "  CREATE TABLE More_Football(TeamName varchar(255),NumberOfWins int)";
  echo $query;
  $ret = pg_query($db,$query);
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
