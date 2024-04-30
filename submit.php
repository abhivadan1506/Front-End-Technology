<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
            text-align: center; 
        }
        h1 {
            color: #333;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <?php
     $theatre=$_POST['theatreName'];
     echo "<h1>Theatre Name: ".$theatre."</h1>";
    $date=$_POST['dateSelect'];
    echo "<h1>Booked Date Was: ".$date."</h1>";
    $time=$_POST['selectedTime'];
    echo "<h1>Booked Time Was: ".$time."</h1>";
    $ticket=$_POST['ticketCount'];
    echo "<h1>Number of Ticket Was: ".$ticket."</h1>";
   

    ?>
</body>
</html>
