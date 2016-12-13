<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataUploadController extends Controller
{
    public function getFileupload()
    {
        $postUrl = '/data/upload';
        $csrf_field = csrf_field();
        $html = <<<CREATE
        <form action="$postUrl" method="POST" enctype="multipart/form-data">
        $csrf_field
        <input type="file" name="filename"><br/><br/>
        <input type="submit" value="提交"/>
        </form>
CREATE;
        return $html;
    }

    public function uploadData(Request $request)
    {
        $data_type = 1;//数据类型，如银行数据
        $data_detail = 1;//数据下所属的具体信息，如银行数据，择此项为具体的银行
        $data_columns = "";//导入的字段设置，格式为"name,sex,age"
        $data_src = 1;//导入的数据来源，1表示文件，2表示数据库

        if($data_src == 1)
        {
            //文件类型数据导入
            //判断请求中是否包含name=filename的上传文件
            $file = $request->file('filename');
            if(!$file){
                return response()->json(array(
                    'status'=>1001,
                    'err_msg'=>'上传文件为空！'
                ));
            }
            //判断文件上传过程中是否出错
            if(!$file->isValid()){
                return response()->json(array(
                    'status'=>1001,
                    'err_msg'=>'文件上传出错！'
                ));
            }
            var_dump($file->getExtension());
            exit;
            $destPath = realpath(public_path('images'));
            if(!file_exists($destPath))
                mkdir($destPath,0755,true);
            $filename = $file->getClientOriginalName();
            if(!$file->move($destPath,$filename)){
                exit('保存文件失败！');
            }
            exit('文件上传成功！');
        }
        else
        {
            //其他类型
            return response()->json(array(
                'status'=>1001,
                'err_msg'=>'暂时不支持非文件类型的数据导入！'
            ));
        }
    }
}
