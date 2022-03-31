<?php

    require('database.php');

    $dbh = new DBConnection();
    $conn = $dbh->getConnection();

    //Construct our query
    $sql = 'SELECT `name`, `role`, `statement`, `artist_pic`, `project_pic`, `class` FROM `example`';

    //Prepare the query to be executed
    $stmnt = $conn->prepare($sql);
    
    //Execute the query: INSERT INTO, SELECT FROM, UPDATE SET, DELETE FROM
    $stmnt->execute();

    //Fetch the data out of the object
    $apprentices = $stmnt->fetchAll();

    $apprentices = json_encode($apprentices);
    echo $apprentices;
    $output = '';

    $stmnt->closeCursor();
    $dbh = null;
?>