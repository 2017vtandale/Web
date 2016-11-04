<?php
$txtfile = file_get_contents('words.txt');
//$wordarr = explode($txtfile);
$input = htmlspecialchars($_GET["query"]);
// $input  = readline("Type Word: " );
$regex = "/\n".$input."/";
$regex2 = "/\s".$input."\s/";
$check = preg_match_all($regex,$txtfile,$match);
$check1 = preg_match_all($regex2,$txtfile,$match);
// if($check1>0&&strlen($input)>3)
//   $check = 0;
echo ($check."\n");
?>
