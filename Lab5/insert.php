<?php
$connectstr =  "dbname=d2p8qh6esl50d9 host=ec2-54-243-59-15.compute-1.amazonaws.com port=5432 user=umytqcshywmkvl password=-suxmkeL_GhbeXFKIlKzbxr1Kp sslmode=require";
$db = pg_connect($connectstr);

$query= <<<ESCAPED
       CREATE TABLE Tacobell(
          Itemname varchar(255), Price float
       )
ESCAPED;

$ret = pg_query($query);
if(!$ret){
echo(pg_last_error($db));
}
else{
echo("successfully added row");
}
?>
