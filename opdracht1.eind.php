<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <titel>Info van vandaag

    </titel>
</head>

<body>
<br>
<br>
    <?php 
        //date_default_timezone_set('UTC');
        //date_default_timezone_set('CET');
        //date_default_timezone_set('Europe/Amsterdam');
        $dagvdweek = date('D');
        $dag = date('d');
        $maand = date('M');
        $jaar = date('Y');
        $uur = date('H');
        $minuut = date('m');
        $seconden = date('s');

        if ($uur >= 0 && $uur <= 6 || $uur >= 18 && $uur <= 24){
            echo "goedenacht beste Jaro <br>";
        }
        elseif ($uur >= 6 && $uur <= 12){
            echo "goedemorgen beste Jaro <br>";
        }
        elseif ($uur >= 12 && $uur <= 18){
            echo "goedemiddag beste Jaro <br>";
        }
        elseif ($uur >= 18 && $uur <= 24){
            echo "goedenacht beste Jaro <br>";
        }
        
        echo "Het is vandaag: {$dag}-{$maand}-{$jaar} --- {$dagvdweek} <br> \n";
        echo "en het is nu {$uur}:{$minuut}:{$seconden} <br> \n";
        
        if (date('I') == 1){
            echo "het is nu zomertijd <br>";
        } 
        else {
        echo "het is nu wintertijd <br>";
        }
    ?>

</body>
</html>