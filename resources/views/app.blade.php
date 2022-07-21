<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="image/png" sizes="16x16" rel="icon" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link type="image/png" sizes="32x32" rel="icon" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link type="image/png" sizes="96x96" rel="icon" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link type="image/png" sizes="120x120" rel="icon" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="icon" type="image/png" sizes="72x72" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="icon" type="image/png" sizes="96x96" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="icon" type="image/png" sizes="144x144" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="icon" type="image/png" sizes="192x192" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="icon" type="image/png" sizes="512x512" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="57x57"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="60x60"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="72x72"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="76x76"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="114x114"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="120x120"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="144x144"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="152x152"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link rel="apple-touch-icon" type="image/png" sizes="180x180"
        href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <link color="#26E07F" rel="mask-icon" href="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <meta name="msapplication-square70x70logo" content="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <meta name="msapplication-TileImage" content="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <meta name="msapplication-square150x150logo" content="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <meta name="msapplication-square310x310logo" content="https://img.icons8.com/dusk/256/000000/php-logo.png">
    <meta name="msapplication-TileColor" content="#C0FFEE">
    <meta name="application-name" content="Larablog">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="../css/app.css">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
    <link href="https://fonts.googleapis.com/css?family=Lexend+Deca:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
