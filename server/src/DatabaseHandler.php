<?php
class DatabaseHandler
{
    private $db;

    private $dbHost = 'localhost';
    private $table = 'colors';
    private $dbUser = 'colors';
    private $dbPass = 'colors';
    private $dbName = 'colors';

    function __construct()
    {
        $dbConf = "mysql:host=".$this->dbHost.";dbname=".$this->dbName;
        $this->db = new PDO($dbConf, $this->dbUser, $this->dbPass);
    }

    public function getColors()
    {
        $query = "SELECT * FROM $this->table";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        $colors = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $colors;
    }

    public function saveColor($properties): bool
    {
        $colors = $this->getColors();
        if (in_array($properties['name'], array_column($colors, 'name'))) {
            return false;
        }
        
        $sql = "INSERT INTO $this->table (red, green, blue, name) VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$properties['red'], $properties['green'], $properties['blue'], $properties['name']]);
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
