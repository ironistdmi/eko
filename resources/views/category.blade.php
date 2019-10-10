@extends('layouts.master')

@section('content')

@if($products->count())
	<div class="d-flex fullscreen-page only-fullscreen">
		<div class="map-page fullscreen-block">
			<div class="toggle-map-list">
				<div class="list-choose active">@lang('app.category.list')</div>
				<div class="map-choose">@lang('app.category.map')</div>
			</div>
			<div class="shop-block active">
				<div class="search-info">
					<div class="background-fixed-shadow disabled"></div>
					<span class="result-statistic">@lang('app.category.results'): 12 594</span>
					<span id="filter-toggle" class="filter-button">
						<svg xmlns="http://www.w3.org/2000/svg" width="10.904" height="12" viewBox="0 0 10.904 12">
							<g id="noun_Settings_943929" transform="translate(-11.2 -7.3)">
								<g id="Group_1083" data-name="Group 1083" transform="translate(11.2 7.3)">
									<path id="Path_2140" data-name="Path 2140" d="M21.584,37.963H20.516A1.867,1.867,0,0,0,18.732,36.6a1.915,1.915,0,0,0-1.8,1.363H11.72a.52.52,0,1,0,0,1.04h5.213A1.85,1.85,0,0,0,20.5,39H21.57a.519.519,0,0,0,.52-.52A.5.5,0,0,0,21.584,37.963Zm-2.852,1.363a.845.845,0,0,1-.843-.843.843.843,0,0,1,1.686,0A.845.845,0,0,1,18.732,39.326Z" transform="translate(-11.2 -32.483)" fill="#2b2c33" />
									<path id="Path_2141" data-name="Path 2141" d="M11.72,9.7h1.11a1.85,1.85,0,0,0,3.569,0h5.185a.519.519,0,0,0,.52-.52.51.51,0,0,0-.52-.52H16.4a1.85,1.85,0,0,0-3.569,0H11.72a.519.519,0,0,0-.52.52A.51.51,0,0,0,11.72,9.7ZM14.615,8.34a.845.845,0,0,1,.843.843.828.828,0,0,1-.843.843.845.845,0,0,1-.843-.843A.864.864,0,0,1,14.615,8.34Z" transform="translate(-11.2 -7.3)" fill="#2b2c33" />
									<path id="Path_2142" data-name="Path 2142" d="M21.584,67.263H16.4a1.85,1.85,0,0,0-3.569,0H11.72a.519.519,0,0,0-.52.52.51.51,0,0,0,.52.52h1.11a1.85,1.85,0,0,0,3.569,0h5.185a.519.519,0,0,0,.52-.52A.51.51,0,0,0,21.584,67.263Zm-6.97,1.363a.845.845,0,0,1-.843-.843.843.843,0,1,1,1.686,0A.845.845,0,0,1,14.615,68.626Z" transform="translate(-11.2 -57.666)" fill="#2b2c33" />
								</g>
							</g>
						</svg>@lang('app.search.filter') </span>
					<div id="filter-content-toggle" class="filter-container disabled">
						<div class="filter-title">
							<h4>@lang('app.search.customize_search')</h4>
							<div class="title-button">
								<input type="reset" value="@lang('app.search.reset')">
								<a class="close-filter" href="#">@lang('app.search.close')</a>
							</div>
						</div>
						<div class="form-group-item">
							<label for="radius-input">@lang('app.search.radius')</label>
							<select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="radius-input">
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div>
						<div class="form-group-container">
							<div class="form-group-item">
								<label for="subcategory-input">@lang('app.search.subcat')</label>
								<select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="subcategory-input">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div class="form-group-item">
								<label for="category-input">@lang('app.search.category')</label>
								<select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="category-input">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
						</div>
						<div class="form-group-container">
							<div class="form-group-item">
								<label for="price-input">@lang('app.search.price')</label>
								<input id="price-input" placeholder="Example: Poltaskiy Shlyah" type="text">
							</div>
							<div class="form-group-container form-group-item">
								<div class="form-group-item">
									<label for="unit-input">@lang('app.search.unit')</label>
									<select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="unit-input">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
									</select>
								</div>
								<div class="form-group-item">
									<label for="currency-input">@lang('app.search.currency')</label>
									<select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="currency-input">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
									</select>
								</div>
							</div>
						</div>
						<div class="form-group-item">
							<label for="rating-input">@lang('app.search.rating')</label>
							<div class="range-container">
								<input id="rating-input" type="range" min="1" max="5" value="1">
								<div class="range-value"><span>1</span></div>
							</div>
						</div>
						<button type="submit">@lang('app.search.find')</button>
					</div>
				</div>
				<div class="shop-list-container">
					@foreach($products as $item)
					<div class="shop-item" data-lat="50.463155489015875" data-lng="30.447924270458998">
						<div class="info-wrapper">
							<div class="image-container">
								<img src="/img/pics/product-slider-main.png" alt="">
							</div>
							<div class="text-container">
								<h5> <svg xmlns="http://www.w3.org/2000/svg" width="15.764" height="15.764" viewBox="0 0 15.764 15.764">
										<g id="Layer_2" data-name="Layer 2" transform="translate(0 0)">
											<path id="Path_924" data-name="Path 924" d="M29.764,14.882a7.882,7.882,0,1,0-7.882,7.882,7.882,7.882,0,0,0,7.882-7.882Zm-14.888,0a7.006,7.006,0,1,1,7.006,7.006,7.006,7.006,0,0,1-7.006-7.006Z" transform="translate(-14 -7)" fill="#a3a3a3" />
											<path id="Path_925" data-name="Path 925" d="M29.32,24.071a.438.438,0,0,0,.438-.438V19.452a1.752,1.752,0,0,0,.876-1.441h0v-.175l-.153-.622a.246.246,0,0,0,0-.053l-.723-2.829A.438.438,0,0,0,29.32,14H22.314a.438.438,0,0,0-.438.333l-.705,2.829a.245.245,0,0,0,0,.053L21,17.836v.175h0a1.752,1.752,0,0,0,.876,1.445v4.177a.438.438,0,0,0,.438.438Zm-.648-5.285h-.061a.74.74,0,0,1-.136-.057l-.031-.048a.876.876,0,0,1-.162-.123h0a.837.837,0,0,1-.145-.18h1.511a.876.876,0,0,1-.477.39.793.793,0,0,1-.49,0Zm-5.22-.324-.057.07-.048.048-.079.061-.044.035-.123.066h0a.876.876,0,0,1-.35.074.727.727,0,0,1-.14,0,.7.7,0,0,1-.158-.044.841.841,0,0,1-.46-.394H23.5V18.4Zm3.613-.959h-2.5l.328-2.627h1.8a.289.289,0,0,0,0,.061Zm-.49.876a.876.876,0,0,1-1.515,0Zm3.039-.959a.158.158,0,0,0,0,.048V17.5H27.949l-.381-2.627h1.406Zm-6.958-2.544h1.353L23.68,17.5H22v-.031a.245.245,0,0,0,0-.053Zm.1,4.817a1.607,1.607,0,0,0,.328-.035.876.876,0,0,0,.1-.026,1.593,1.593,0,0,0,.206-.061l.109-.048.175-.1.1-.066a1.139,1.139,0,0,0,.158-.131l.083-.074a2.189,2.189,0,0,0,.153-.188l.044-.053a1.42,1.42,0,0,0,.074-.14,1.752,1.752,0,0,0,3.065,0,1.419,1.419,0,0,0,.074.14l.044.053a1.634,1.634,0,0,0,.158.188c0,.026.053.048.079.074a1.139,1.139,0,0,0,.158.131l.1.066.175.1.109.048a1.594,1.594,0,0,0,.206.061.876.876,0,0,0,.1.026,1.607,1.607,0,0,0,.328.035v3.5H27.131V21.006a.438.438,0,0,0-.438-.438H24.941a.438.438,0,0,0-.438.438V23.2H22.752Zm2.627,3.5V21.444h.876V23.2Z" transform="translate(-17.935 -10.935)" fill="#a3a3a3" />
										</g>
									</svg> {{ $item->shop->name }}</h5>
								<a href="{{ route('show.product', $item->slug) }}">
									<h3>{{ $item->name }}</h3>
								</a>
								<p>{{ $item->short_description }}</p>
								<div class="price-container">
									<div class="title-review">
										<div class="review-rating">
											<svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
												<path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
											</svg>
											<span>4</span>
											<span class="all-review">(493)</span>
										</div>
										<div class="map-distance">
											<svg id="noun_distance_1122903" xmlns="http://www.w3.org/2000/svg" width="18.02" height="14.921" viewBox="0 0 18.02 14.921">
												<g id="Group_10" data-name="Group 10" transform="translate(0 0)">
													<g id="Group_1" data-name="Group 1" transform="translate(0 0)">
														<path id="Path_926" data-name="Path 926" d="M12.115,13.606a4.457,4.457,0,0,0-6.966,5.462l.02.02,3.483,4.928a.413.413,0,0,0,.317.158.385.385,0,0,0,.317-.158l3.483-4.928.02-.02A4.491,4.491,0,0,0,12.115,13.606Zm-.02,5.046L8.949,23.105,5.8,18.652a3.657,3.657,0,0,1,.554-4.492A3.67,3.67,0,0,1,12.1,18.652Z" transform="translate(-4.495 -12.3)" fill="#b2b2b2" />
													</g>
													<g id="Group_2" data-name="Group 2" transform="translate(2.554 2.751)">
														<path id="Path_927" data-name="Path 927" d="M19.221,26.2a1.821,1.821,0,1,0,0,3.641h0a1.821,1.821,0,1,0,0-3.641Zm0,2.869h0A1.029,1.029,0,1,1,20.25,28.04,1.035,1.035,0,0,1,19.221,29.069Z" transform="translate(-17.4 -26.2)" fill="#b2b2b2" />
													</g>
													<g id="Group_3" data-name="Group 3" transform="translate(9.669 0)">
														<path id="Path_928" data-name="Path 928" d="M60.411,13.606a4.467,4.467,0,0,0-6.313,0,.392.392,0,1,0,.554.554,3.68,3.68,0,0,1,5.759,4.492l-3.166,4.453-3.166-4.453a.4.4,0,1,0-.653.455l3.483,4.928a.413.413,0,0,0,.317.158.385.385,0,0,0,.317-.158l3.483-4.928.02-.02A4.455,4.455,0,0,0,60.411,13.606Z" transform="translate(-53.357 -12.3)" fill="#b2b2b2" />
													</g>
													<g id="Group_4" data-name="Group 4" transform="translate(11.657 2.771)">
														<path id="Path_929" data-name="Path 929" d="M65.221,29.941A1.821,1.821,0,1,0,63.4,28.121a1.816,1.816,0,0,0,1.821,1.821ZM64.192,28.1a1.029,1.029,0,1,1,1.029,1.029h0A1.01,1.01,0,0,1,64.192,28.1Z" transform="translate(-63.4 -26.3)" fill="#b2b2b2" />
													</g>
													<g id="Group_5" data-name="Group 5" transform="translate(3.662 13.734)">
														<path id="Path_930" data-name="Path 930" d="M23.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,23.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,23.594,82.492Z" transform="translate(-23 -81.7)" fill="#b2b2b2" />
													</g>
													<g id="Group_6" data-name="Group 6" transform="translate(6.037 13.734)">
														<path id="Path_931" data-name="Path 931" d="M35.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,35.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,35.594,82.492Z" transform="translate(-35 -81.7)" fill="#b2b2b2" />
													</g>
													<g id="Group_7" data-name="Group 7" transform="translate(8.411 13.734)">
														<path id="Path_932" data-name="Path 932" d="M47.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,47.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,47.594,82.492Z" transform="translate(-47 -81.7)" fill="#b2b2b2" />
													</g>
													<g id="Group_8" data-name="Group 8" transform="translate(10.786 13.734)">
														<path id="Path_933" data-name="Path 933" d="M59.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,59.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,59.594,82.492Z" transform="translate(-59 -81.7)" fill="#b2b2b2" />
													</g>
													<g id="Group_9" data-name="Group 9" transform="translate(13.161 13.734)">
														<path id="Path_934" data-name="Path 934" d="M71.594,81.7a.594.594,0,1,0,.594.594A.583.583,0,0,0,71.594,81.7Zm0,.792a.2.2,0,1,1,.2-.2A.187.187,0,0,1,71.594,82.492Z" transform="translate(-71 -81.7)" fill="#b2b2b2" />
													</g>
												</g>
											</svg>
											<span>1,3 km</span>
										</div>
										<a href="{{ route('wishlist.add', $item) }}" class="saved-link active">
											<svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
												<path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
											</svg>
											<span>@lang('app.category.saved')</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="button-container">
							<a class="link-button" href="{{ route('show.product', $item->slug) }}">@lang('app.category.learn_more')</a>
							<a class="link-button button-fill" href="{{ route('dialog', $item->shop_id) }}">@lang('app.category.message')</a>
							<a class="link-button show-on-map" href="#">@lang('app.category.show_map')</a>
						</div>
					</div>
					@endforeach
				</div>
			</div>
			<div class="map-block">
				<div id="map" class="google-map search-map"></div>
			</div>
		</div>
	</div>
        
@else

  <p class="lead text-center space50">
	<span class="space50">@lang('app.category.no_product_found')</span><br/>
  </p>

@endif
@endsection
