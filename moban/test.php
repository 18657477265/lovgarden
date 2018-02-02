<?php
header("Content-type:text/html;charset=utf8");
$json = '{"语文":"11","数学":"22","英语":"33","文科":"44","省内排名":"55","其他":"其他加油其他加油"}';
$object = json_decode($json);

$exame_scores_string = '"';
foreach ($object as $key => $value) {
	$exame_scores_string .= $key;
    $exame_scores_string .= ":";
    $exame_scores_string .= $value;
    $exame_scores_string .= '\r\n';
}
$exame_scores_string .= '"';
echo $exame_scores_string;