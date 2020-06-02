<?php


$json = $_SERVER["QUERY_STRING"] ?? '';

$files = scandir("scripts/");

unset($files[0]);
unset($files[1]);
$output = [];

foreach($files as $file){

    $extension = explode('.', $file);

    switch($extension[1]){
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


    $output[] = [$f,testFileContent($f), $extension[0]];

}

function testFileContent($string){
    if(preg_match('/^Hello World, this is (([a-zA-Z]+?\s)+)with HNGi7 ID (HNG-[0-9]{5}) using ([a-zA-Z]+?) for stage 2 task$/',trim($string))){
        return 'Pass';
    }

    return 'Fail';
}

ob_end_flush();

    if(isset($json) && $json == 'json'){

       echo json_encode($output);

    }else{
            ?>
        <html>
        <body>
        <h1>Format</h1>
        <ul>

            <?php

            foreach ($output as $out){
                echo <<<EOL
                <li>
                Text: $out[2] - Status: $out[1]
                </li>
EOL;
            }
            ?>
           

        </ul>

        </body>

        </html>
<?php
    }
ob_start();
?>

