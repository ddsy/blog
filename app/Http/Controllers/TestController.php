<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use org\apache\hadoop\WebHDFS;
use App\Http\Requests;
use Illuminate\Support\Facades\Config;
use Maatwebsite\Excel\Facades\Excel;
class TestController extends Controller
{
    //
    public function test()
    {

//        $ch = curl_init();
//        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//        curl_setopt($ch, CURLOPT_HTTPHEADER, Array("Content-Type: text/xml"));
//        curl_setopt($ch, CURLOPT_URL, "http://192.168.0.120:50070/webhdfs/v1/data/22.tar.gz?op=CREATE");
//        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
//        curl_setopt($ch, CURLOPT_HEADER, true);
//        $response = curl_exec($ch);
//        $headArr = explode("\r\n", $response);
//        $redirect = "";
//        foreach ($headArr as $loop) {
//            if (strpos($loop, "Location") !== false)
//                $redirect = trim(substr($loop, 10));
//        }
//        curl_close($ch);
//        $ch = curl_init();
//        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//        curl_setopt($ch, CURLOPT_HTTPHEADER, Array("Content-Type: text/xml"));
        //        curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
//        curl_setopt($ch, CURLOPT_URL,$redirect);//CURLOPT_PUT
//        $file_hd = fopen('22.tgz','rb');
//        curl_setopt($ch, CURLOPT_PUT,true);
//        curl_setopt($ch, CURLOPT_INFILE ,$file_hd);
//        curl_setopt($ch, CURLOPT_INFILESIZE ,filesize('22.tgz'));
//        $response = curl_exec($ch);
////        preg_match('/Location:\/.* ([0-9]+) .*/', $response, $status);
//        curl_close($ch);
//        var_dump($response);
//        $file_inter = new FileInterface(Config::get('app.hdfs')['host']."44.txt"."?op=CREATE","PUT");
//        $file_inter->send();
//        $redirecton = $file_inter->getLocation();
//        $file_redir = new FileInterface($redirecton,"PUT",'11.txt');
//        $file_redir->send();
//        Excel::load('2222.xls', function($reader) {
//
//            // reader methods
//            $reader->formatDates(true, 'Y-m-d H:i:s');
//            $results = $reader->get();
//            foreach($results as $row)
//            {
//                var_dump($row);
//                break;
//            }
//        });
//        Excel::filter('chunk')->load('2222.xls')->chunk(250, function($results)
//        {
//
//            foreach($results as $row)
//            {
//                var_dump($row);
//                break;
//            }
//        });
        $res = Excel::load('2222.xls', function($file) {

            // modify stuff

        })->store('csv');

        return 1111;
    }
}
