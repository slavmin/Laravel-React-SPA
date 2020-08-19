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
        <script>
            window.App = {!! json_encode([
            'name' => config('app.name')
        ]) !!};
        </script>
        <script src="{{ secure_asset('js/app.js') }}" defer></script>

        <!-- Styles -->
        <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body>
        {{--@if (Route::has('login'))
            <div class="top-right links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                @else
                    <a href="{{ route('login') }}">Login</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}">Register</a>
                    @endif
                @endauth
            </div>
        @endif--}}

        <div id="app"></div>
    </body>
</html>
