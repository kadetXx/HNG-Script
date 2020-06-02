<?php


$json = $_SERVER["QUERY_STRING"];

$files = scandir("scripts/");

unset($files[0]);
unset($files[1]);
$output = [];

foreach($files as $file){

    $extension = explode('.', $file)[1];


    switch($extension){
        case 'php':
            $startScript = "php";
            break;
        case 'js':
            $startScript = "node";
            break;
        case 'py':
            $startScript = "python";
            break;
    }

    $f = exec($startScript . " scripts/".$file);


    $output[] = ["content" => $f, "status" => testFileContent($f)];

}

function testFileContent($string){
    if(preg_match('/^Hello World, this is (([a-zA-Z]+?\s)+)with HNGi7 ID (HNG-[0-9]{5}) using ([a-zA-Z]+?) for stage 2 task$/',trim($string))){
        return true;
    }

    return false;
}


var_dump($output);

