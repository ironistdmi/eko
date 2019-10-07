@extends('layouts.master')

@section('content')
	@if (Auth::check())
		<div class="container">
			<private-chat :dialog="{{$dialog}}" :user="{{Auth::user()}}"></private-chat>
		</div>
	@endif
@endsection