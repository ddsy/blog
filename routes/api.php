<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
// sample API
Route::get('/rooms',function(){
    $data='[{"name":"a1","Number":"123"},{"name":"a1","Number":"123"},{"name":"a1","Number":"123"}]';
    return json_decode($data);
});