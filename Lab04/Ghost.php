<?php
$txtfile = file_get_contents('words.txt');
//$wordarr = explode($txtfile);
$input = $_GET["query"]
// $input  = readline("Type Word: " );
$regex = "/\n".$input."/";
$check = preg_match_all($regex,$txtfile,$match);
echo ($check."\n");
?>
