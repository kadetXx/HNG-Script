<?php

header("Content-Type: application/json");

    $fName  = "Jude";
    $lName = "Biose";
    $HNGi7_ID = "HNG-01207";
    $language = "PHP";

    $location_vars = "Hello World, this is "
                      .$fName. " " .$lName.
                      " with HNGi7 ID "
                      .$HNGi7_ID. " using " .$language. 
                      " for stage 2 task.";

    $result = json_encode($location_vars);;

    print_r($result);