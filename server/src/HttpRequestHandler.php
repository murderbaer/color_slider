<?php
include('DatabaseHandler.php');
class HttpRequestHandler
{
    private $dbHandler;
    public function __construct()
    {
        header('Access-Control-Allow-Origin: *');
        $this->dbHandler = new DatabaseHandler();
    }

    public function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {
            case 'GET':
                $this->getColors();
                break;
            case 'POST':
                $post = file_get_contents('php://input');
                $this->saveColor($post);
                break;
            default:
                echo '405 Method Not Allowed';
                http_response_code(405);
                break;
        }
    }

    private function getColors()
    {
        $colors = $this->dbHandler->getColors();
        echo json_encode($colors);
        http_response_code(200);
    }

    private function saveColor($properties)
    {
        $propsEnc = json_decode($properties, true);
        if ($this->validateProps($propsEnc) && $this->dbHandler->saveColor($propsEnc)) {
            http_response_code(200);
        } else {
            http_response_code(400);
        }
    }

    private function validateProps($props)
    {
        return $this->validateColor($props['red']) &&
            $this->validateColor($props['green']) &&
            $this->validateColor($props['blue']) &&
            $this->validateName($props['name']);
    }

    private function validateColor($colorValue): bool
    {
        if (gettype($colorValue) !== 'integer' || $colorValue < 0 || $colorValue > 255) {
            return false;
        }
        return true;
    }
    private function validateName($colorValue): bool
    {
        if (gettype($colorValue) !== 'string' || strlen($colorValue) < 1 || !ctype_alnum($colorValue)) {
            return false;
        }
        return true;
    }
}
