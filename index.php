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
    if(preg_match('/^Hello\sWorld[,|.|!]*\sthis\sis\s[a-zA-Z]{2,}\s[a-zA-Z]{2,}(\s[a-zA-Z]{2,})?\swith\sHNGi7\sID\s(HNG-\d{3,})\susing\s[a-zA-Z]{3,}\sfor\sstage\s2\stask.?$/i',trim($string))){
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
                $color = $out[1] == 'Pass' ? 'green' : 'red';
                echo <<<EOL
                <li>
                Name: $out[2] - Status: <span style="color:$color">$out[1]</span>
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

