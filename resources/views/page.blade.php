@extends('layouts.master')

@section('content')

    <!-- CONTENT SECTION -->
	<section>
		<div class="container">
			<div class="row">
				{!! $page->content !!}
		    </div><!-- /.row -->
	  	</div><!-- /.container -->
	</section>

	<!-- For contact page only -->
	@if(\App\Page::PAGE_CONTACT_US == $page->slug)
		@include('layouts.contact_us')
	@endif

@endsection
