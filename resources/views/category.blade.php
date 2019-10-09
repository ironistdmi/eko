@extends('layouts.master')

@section('content')

@if($products->count())

  <div class="col-md-12" style="padding-left: 15px;">

	@include('product_list')

  </div><!-- /.col-md-10 -->

@else

  <p class="lead text-center space50">
	<span class="space50">@lang('app.category.no_product_found')</span><br/>
  </p>

@endif
@endsection
