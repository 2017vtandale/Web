<?php
require "twitteroauth/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;
$Consumer_Key =	"K5S66l8uA2P9y12gd29e3clTK";
$Consumer_Secret = "WTiykrcOmJs5GkfYflVRBOxvz4ZveWufF1i5mHUff1Fm5vZNyo";
$Access_Token = 	"2292515321-NB5OR6fY3TmFVal6BP9KTvV0aXx5aEbe3o19lJ7";
$Access_Token_Secret =	"5BvsebycnDgu7shDncX9oDDRDPB5FP4o6czAm8fcALvwH";

$connection = new TwitterOAuth($Consumer_Key, $Consumer_Secret, $Access_Token, $Access_Token_Secret);
$content = $connection->get("account/verify_credentials");
//$term = $_REQUEST["term"];
$term = $_GET["query"]);
//readline_add_history($line);
$tweets = $connection->get("search/tweets", ["q" => $term,"count"=>100,]);//$_GET["https://api.twitter.com/1.1/search/tweets.json?q=".$term];
echo sizeof($tweets->statuses);
// foreach($tweets->statuses as $tweet)
// {
//   echo "{$tweet->user->screen_name} {$tweet->text}\n";
// }
?>
