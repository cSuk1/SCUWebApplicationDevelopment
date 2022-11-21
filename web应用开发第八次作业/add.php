<?php
if (isset($_GET["num2"]) && isset($_GET["num1"]) && isset($_GET["op"])) {
    $num1 = $_GET["num1"];
    $num2 = $_GET["num2"];
    $op = $_GET["op"];
    if($op === "+"){
        $res = $num1 + $num2;
        echo $num1." + ".$num2." = ".$res;
    }
    elseif($op === "-"){
        $res = $num1 - $num2;
        echo $num1." - ".$num2." = ".$res;
    }
    elseif($op === "*"){
        $res = $num1 * $num2;
        echo $num1." * ".$num2." = ".$res;
    }
    elseif($op === "/"){
        $res = $num1 / $num2;
        echo $num1." / ".$num2." = ".$res;
    }
    elseif($op === "%"){
        $res = $num1 % $num2;
        echo $num1." mod ".$num2." = ".$res;
    }
    elseif($op === "^"){
        $res = pow($num1, $num2);
        echo $num1." ^ ".$num2." = ".$res;
    }
}