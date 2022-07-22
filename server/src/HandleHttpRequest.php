<?php
class HandleHttpRequest
{
    public function handleRequest()
    {
        $uri = $_SERVER['REQUEST_URI'];

        switch ($uri) {
            case '/colors':
                $this->handleColorsRequest();
                break;
            default:
                echo '404 Not Found';
                http_response_code(404);
                break;
        }
    }

    private function handleColorsRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {
            case 'GET':

                break;
            case 'POST':
                $post = file_get_contents('php://input');
                $this->saveColor($post);
                break;
            default:
                echo '405 Method Not Allowed';
                break;
        }
    }

    private function getColors()
    {

    }

    private function saveColor($properties)
    {
        $propsInJson = json_decode($properties, true);
        echo $propsInJson['red'] . ' ' . $propsInJson['green'] . ' ' . $propsInJson['blue'] . ' ' . $propsInJson['name']; 
    }
}
