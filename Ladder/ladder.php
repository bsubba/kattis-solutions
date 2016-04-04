<?php
    while(fscanf(STDIN, '%d%d', $number1, $number2) == 2){
    
        $sin = sin(deg2rad($number2));
        $length = ceil($number1/$sin);
        fprintf(STDOUT, "%d", $length);
    }