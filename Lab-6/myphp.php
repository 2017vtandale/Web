<?php
require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;
$Consumer_Key =	"K5S66l8uA2P9y12gd29e3clTK";
$Consumer_Secret = "WTiykrcOmJs5GkfYflVRBOxvz4ZveWufF1i5mHUff1Fm5vZNyo";
$Access_Token = 	"2292515321-NB5OR6fY3TmFVal6BP9KTvV0aXx5aEbe3o19lJ7";
$Access_Token_Secret =	"5BvsebycnDgu7shDncX9oDDRDPB5FP4o6czAm8fcALvwH";

$connection = new TwitterOAuth($Consumer_Key, $Consumer_Secret, $Access_Token, $Access_Token_Secret);
$content = $connection->get("account/verify_credentials");
$term = $_REQUEST["term"];
$tweets = $connection->get("search/tweets",["q"=>"harambe","result_type"=>"recent"]);
//$array = json_decode($tweets=>"statuses",true);
foreach($tweets as $key => $value) {
    echo sizeof($value);
}
?>
