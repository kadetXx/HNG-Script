<?php

    $fName  = "Jude";
    $lName = "Biose";
    $HNG_ID = "HNG-01207";
    $language = "PHP";

    $full_text = 'Hello World, this is '
                      .$fName. ' ' .$lName.
                      ' with HNGi7 ID '
                      .$HNG_ID. ' using ' .$language. 
                      ' for stage 2 task.';

    $result = $full_text;

    print_r($result);