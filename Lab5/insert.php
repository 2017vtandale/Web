<?php
$connectstr =  "dbname=d2p8qh6esl50d9 host=ec2-54-243-59-15.compute-1.amazonaws.com port=5432 user=umytqcshywmkvl password=-suxmkeL_GhbeXFKIlKzbxr1Kp sslmode=require";
$db = pg_connect($connectstr,PGSQL_CONNECT_FORCE_NEW);
$foodnames = array('Chicken_Soft_Taco','Chicken_Hard_Taco','Cheesy_Gordita_Crunch','XXL_Grilled_Stuffed_Burrito','Smothered_Burrito','Shredded_Chicken_Burrito','Crunch_Wrap_Supreme','Grand_Scrambler');
$prices = array('1.79','1.19','2.89','4.19','4.19','1.89','3.19','4.69');
for( $i=0;   $i<8;   $i++ ){
       $query = "INSERT INTO tacobell (itemname, price) VALUES($foodnames[$i], $prices[$i])";
       $ret = pg_query($query);
       if(!$ret){
       echo(pg_last_error($db));
       }
       else{
       echo($foodnames[$i].$prices[$i]);
}
}
// $query = "CREATE TABLE tacobell(Item varchar(255),Price float)";
// $ret = pg_query($query);
// $query = "SELECT * FROM tacobell";
// $ret = pg_query($query);
// if(!$ret){
// echo(pg_last_error($db));
// }
// else{
// while ($row = pg_fetch_row($ret)) {
//     echo("Item:".$row[0]."Price".$row[1]);
//     echo "<br />";
// }
?>
