<!doctype html>
<html class="no-js" lang="">
    <head>
            <title>Ekofarmer</title>
            <!-- Main Meta information-->
            <meta charset="utf-8" />
            <meta http-equiv="Cache-control" content="public" />
            <meta name="viewport" content="width=device-width, user-scalable=yes" />
            <!-- Meta Information-->
            <meta name="robots" content="index, follow" />
			<meta name="csrf-token" content="{{ csrf_token() }}">
			
            <link type="text/plain" rel="author" href="humans.txt" />
            <!-- Get html5shiv if this is IE lower or equal to 9-->
            <!--[if lte IE 9]>
            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <![endif]-->
            <link rel="stylesheet" href="{{ asset('css/main.min.css') }}" />
            <link rel="stylesheet" href="{{ asset('css/custom.css') }}" />
    </head>
    <body>
        <!--[if lte IE 9]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->
		
		<!-- MAIN HEADER -->
        @include('layouts.header')

        <!-- MAIN CONTENT -->
        <div id="content-wrapper">
            @yield('content')
        </div>
		
        <!-- MAIN FOOTER -->
        @include('layouts.footer')
        <!-- Quick view Modal-->
        <div id="quickViewModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true"></div>

        <!-- AppJS -->
        @include('scripts.appjs')

        <!-- Page Scripts -->
        @yield('scripts')

    </body>
</html>
