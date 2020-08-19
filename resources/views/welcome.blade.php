<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Laravel') }}</title>
        <meta name="description" content="{{ config('app.name', 'Laravel') }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Scripts -->
        <script>window.App = {!! json_encode(['name' => config('app.name')]) !!};</script>
        <script src="{{ config('app.env') === 'local' ? asset('js/app.js') : secure_asset('js/app.js') }}" defer></script>

        <!-- Styles -->
        <link href="{{ config('app.env') === 'local' ? asset('css/app.css') : secure_asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
