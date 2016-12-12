<?php
/**
 * Created by PhpStorm.
 * User: linc
 * Date: 2016/12/12
 * Time: 14:15
 */

namespace App\Http\Controllers;


class FileInterface
{
    private $url ;//请求地址
    private $method;//请求方法
    private $ch;//curl handle
    private $filepath;//文件路径
    private $response = "";
    private $file_hd;//打开的文件句柄
    public function __construct($url,$method,$filepath=null)
    {
        $this->url = $url;
        $this->method = $method;
        $this->ch = curl_init();
        $this->filepath = $filepath;
        $this->setOptions();
    }

    private function setOptions()
    {
        curl_setopt($this->ch, CURLOPT_CUSTOMREQUEST, $this->method);
        curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($this->ch, CURLOPT_HEADER, true);
        curl_setopt($this->ch, CURLOPT_HTTPHEADER, Array("Content-Type: text/xml"));
        curl_setopt($this->ch, CURLOPT_BINARYTRANSFER, 1);
        curl_setopt($this->ch, CURLOPT_URL,$this->url);//CURLOPT_PUT
        if(strtolower($this->method) == 'put' && $this->filepath != null)
        {
            $file_hd = fopen($this->filepath,'rb');
            curl_setopt($this->ch, CURLOPT_PUT,true);
            curl_setopt($this->ch, CURLOPT_INFILE ,$file_hd);
            curl_setopt($this->ch, CURLOPT_INFILESIZE ,filesize($this->filepath));
        }
    }
    public function send()
    {
        $this->response = curl_exec($this->ch);
    }
    public function getLocation()
    {
        $headArr = explode("\r\n", $this->response);
        $redirect = "";
        foreach ($headArr as $loop) {
            if (strpos($loop, "Location") !== false)
                $redirect = trim(substr($loop, 10));
        }
        return $redirect;
    }
    public function __destruct()
    {
        curl_close($this->ch);
        if($this->file_hd)
            fclose($this->file_hd);
    }
}