<?php
$connectstr =  "dbname=d2p8qh6esl50d9 host=ec2-54-243-59-15.compute-1.amazonaws.com port=5432 user=umytqcshywmkvl password=-suxmkeL_GhbeXFKIlKzbxr1Kp sslmode=require";
$db = pg_pconnect($connectstr,PGSQL_CONNECT_FORCE_NEW);
$itemname = str_replace("+"," ",htmlspecialchars($_POST["itemname"]));
$price = htmlspecialchars($_POST["price"]);
$query = "INSERT INTO tacobell VALUES('$itemname','$price')";
$ret = pg_query($query);
?>
