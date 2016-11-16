<?php
$connectstr =  "dbname=d2p8qh6esl50d9 host=ec2-54-243-59-15.compute-1.amazonaws.com port=5432 user=umytqcshywmkvl password=-suxmkeL_GhbeXFKIlKzbxr1Kp sslmode=require";
$db = pg_pconnect($connectstr,PGSQL_CONNECT_FORCE_NEW);
$query = "SELECT * FROM tacobell";
$ret = pg_query($query);
if(!$ret){
echo(pg_last_error($db));
}
else{
    echo("<table class = table>");
    echo("<tr>
    <th>
    Item From Tacobell
    </th>
    <th>
    Price
    </th>
    </tr>");
while ($row = pg_fetch_row($ret)) {
    echo("<tr>
    <th>
    $row[0]
    </th>
    <th>
    $row[1]
    </th>
    </tr>");
}
echo("</table>");
}
?>
