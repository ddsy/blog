<!DOCTYPE html>
<html>
<head>
    <title>管理系统</title>
    <link rel="stylesheet" type="text/css" href="{{ elixir('css/app.css') }}">
</head>
<body>

<div id="app">
    <transition name="fade">
        <router-view class="appview"></router-view>
    </transition>
</div>

<script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>
