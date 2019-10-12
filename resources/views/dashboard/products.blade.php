@extends('layouts.master')

@section('content')

<div class="d-flex fullscreen-page">
            <aside class="profile-aside">
                <h3>Dashboard</h3>
                <div class="aside-navigation">
                    <a class="" href="{{ route('account') }}">Profile</a>
                    <a class="active" href="{{ route('account.products') }}">My products</a>
                    <a class="" href="{{ route('account.reviews') }}">All reviews</a>
                    <a class="" href="{{ route('profile.edit') }}">Settings</a>
                    <hr>
                    <a href="{{ route('logout') }}">Log out</a>
                </div>
            </aside>
			<div class="my-products-page fullscreen-block">
                <a class="toggle-dashboard" href="#">Dashboard <br> <svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934">
                        <g id="Group_997" data-name="Group 997" transform="translate(0)">
                            <path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff" />
                        </g>
                    </svg>
                </a>
                <div class="title-container">
                    <h2>My products</h2>
                    <a class="toggle-archive-button" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <g id="noun_archive_750186" transform="translate(-10.759 -13.59)">
                                <path id="Path_2316" data-name="Path 2316" d="M25.175,36.36h-4.17a.291.291,0,0,0-.219.1l-.733.821H16.465l-.733-.821a.291.291,0,0,0-.219-.1h-4.17a.546.546,0,0,0-.411.192.72.72,0,0,0-.173.489l.549,8.769a.626.626,0,0,0,.576.646H24.628a.614.614,0,0,0,.576-.646l.555-8.795a.689.689,0,0,0-.169-.466A.545.545,0,0,0,25.175,36.36Zm-.576,9.3a.089.089,0,0,1-.084.086H11.988a.071.071,0,0,1-.065-.069l-.541-8.558a.067.067,0,0,1,.015-.05.053.053,0,0,1,.042-.019h3.947l.733.821a.3.3,0,0,0,.219.1h3.84a.3.3,0,0,0,.227-.1l.733-.821h3.893a.091.091,0,0,1,.071.034.114.114,0,0,1,.025.082Z" transform="translate(0 -17.865)" fill="#a3a3a3" />
                                <path id="Path_2317" data-name="Path 2317" d="M16.307,26.872h.017a.268.268,0,0,0,.192-.105.337.337,0,0,0,.069-.227l-.071-1.025H28.272L28.2,26.542a.331.331,0,0,0,.069.215.274.274,0,0,0,.207.106.292.292,0,0,0,.276-.291l.077-1.1a.557.557,0,0,0-.522-.586H16.48a.49.49,0,0,0-.367.17.642.642,0,0,0-.154.431l.075,1.077A.3.3,0,0,0,16.307,26.872Z" transform="translate(-4.202 -8.866)" fill="#a3a3a3" />
                                <path id="Path_2318" data-name="Path 2318" d="M19.015,15.423h.015a.268.268,0,0,0,.192-.105.337.337,0,0,0,.069-.227l-.063-.877H29.939l-.071.879a.34.34,0,0,0,.077.231.269.269,0,0,0,.2.1.294.294,0,0,0,.276-.291l.069-.98a.534.534,0,0,0-.5-.562H19.171a.47.47,0,0,0-.353.164.617.617,0,0,0-.148.418l.063.959A.294.294,0,0,0,19.015,15.423Z" transform="translate(-6.392)" fill="#a3a3a3" />
                                <path id="Path_2319" data-name="Path 2319" d="M44.249,56.383l.868-.976.069-.078a.352.352,0,0,0-.007-.449.266.266,0,0,0-.4-.008l-.937,1.051-.937-1.051a.267.267,0,0,0-.408,0,.352.352,0,0,0,0,.458l.935,1.053-.939,1.049a.352.352,0,0,0,0,.458.267.267,0,0,0,.408,0l.069-.075.872-.971.87.974.069.078a.266.266,0,0,0,.4-.008.352.352,0,0,0,.007-.449Z" transform="translate(-25.572 -32.316)" fill="#a3a3a3" />
                            </g>
                        </svg> <span>Archive</span></a>
                </div>
                <div class="my-products-items">
                    <div class="archived-products">
                        <div class="button-container">
                            <a class="delete-items" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20.138" viewBox="0 0 19 20.138">
                                    <g id="noun_Delete_1561486" transform="translate(-3.903 -119.25)">
                                        <g id="Group_642" data-name="Group 642" transform="translate(3.903 120)">
                                            <path id="Path_1873" data-name="Path 1873" d="M258.71,334.1v12.3a1.263,1.263,0,0,1-1.267,1.251H247.067A1.263,1.263,0,0,1,245.8,346.4V334.1" transform="translate(-242.722 -329.009)" fill="none" stroke="#e03b4b" stroke-miterlimit="10" stroke-width="1.5" />
                                            <path id="Path_1874" data-name="Path 1874" d="M137,248H118" transform="translate(-118 -244.956)" fill="none" stroke="#e03b4b" stroke-miterlimit="10" stroke-width="1.5" />
                                            <path id="Path_1875" data-name="Path 1875" d="M356,123.044V120.7a.771.771,0,0,1,.78-.7h6.071a.668.668,0,0,1,.662.7v2.344" transform="translate(-350.269 -120)" fill="none" stroke="#e03b4b" stroke-miterlimit="10" stroke-width="1.5" />
                                            <line id="Line_100" data-name="Line 100" y2="10.493" transform="translate(7.415 5.091)" fill="none" stroke="#e03b4b" stroke-miterlimit="10" stroke-width="1.5" />
                                            <line id="Line_101" data-name="Line 101" y2="10.493" transform="translate(11.65 5.091)" fill="none" stroke="#e03b4b" stroke-miterlimit="10" stroke-width="1.5" />
                                        </g>
                                    </g>
                                </svg> <span>Delete archived items</span></a>
                            <a class="restore-items" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18.001" viewBox="0 0 18 18.001">
                                    <g id="noun_restore_1856604" transform="translate(-14 -2.999)">
                                        <path id="Path_2060" data-name="Path 2060" d="M21,12A9,9,0,0,1,3.065,13.09a.75.75,0,0,1,1.488-.18A7.532,7.532,0,1,0,5.382,8.5H7.75a.75.75,0,0,1,0,1.5h-3A1.752,1.752,0,0,1,3,8.25v-3a.75.75,0,1,1,1.5,0V7.058A8.986,8.986,0,0,1,21,12Z" transform="translate(11)" fill="#00a757" />
                                    </g>
                                </svg> <span>Restore archived items</span></a>
                            <a class="toggle-archive-button" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                    <g id="noun_archive_750186" transform="translate(-10.759 -13.59)">
                                        <path id="Path_2316" data-name="Path 2316" d="M25.175,36.36h-4.17a.291.291,0,0,0-.219.1l-.733.821H16.465l-.733-.821a.291.291,0,0,0-.219-.1h-4.17a.546.546,0,0,0-.411.192.72.72,0,0,0-.173.489l.549,8.769a.626.626,0,0,0,.576.646H24.628a.614.614,0,0,0,.576-.646l.555-8.795a.689.689,0,0,0-.169-.466A.545.545,0,0,0,25.175,36.36Zm-.576,9.3a.089.089,0,0,1-.084.086H11.988a.071.071,0,0,1-.065-.069l-.541-8.558a.067.067,0,0,1,.015-.05.053.053,0,0,1,.042-.019h3.947l.733.821a.3.3,0,0,0,.219.1h3.84a.3.3,0,0,0,.227-.1l.733-.821h3.893a.091.091,0,0,1,.071.034.114.114,0,0,1,.025.082Z" transform="translate(0 -17.865)" fill="#a3a3a3" />
                                        <path id="Path_2317" data-name="Path 2317" d="M16.307,26.872h.017a.268.268,0,0,0,.192-.105.337.337,0,0,0,.069-.227l-.071-1.025H28.272L28.2,26.542a.331.331,0,0,0,.069.215.274.274,0,0,0,.207.106.292.292,0,0,0,.276-.291l.077-1.1a.557.557,0,0,0-.522-.586H16.48a.49.49,0,0,0-.367.17.642.642,0,0,0-.154.431l.075,1.077A.3.3,0,0,0,16.307,26.872Z" transform="translate(-4.202 -8.866)" fill="#a3a3a3" />
                                        <path id="Path_2318" data-name="Path 2318" d="M19.015,15.423h.015a.268.268,0,0,0,.192-.105.337.337,0,0,0,.069-.227l-.063-.877H29.939l-.071.879a.34.34,0,0,0,.077.231.269.269,0,0,0,.2.1.294.294,0,0,0,.276-.291l.069-.98a.534.534,0,0,0-.5-.562H19.171a.47.47,0,0,0-.353.164.617.617,0,0,0-.148.418l.063.959A.294.294,0,0,0,19.015,15.423Z" transform="translate(-6.392)" fill="#a3a3a3" />
                                        <path id="Path_2319" data-name="Path 2319" d="M44.249,56.383l.868-.976.069-.078a.352.352,0,0,0-.007-.449.266.266,0,0,0-.4-.008l-.937,1.051-.937-1.051a.267.267,0,0,0-.408,0,.352.352,0,0,0,0,.458l.935,1.053-.939,1.049a.352.352,0,0,0,0,.458.267.267,0,0,0,.408,0l.069-.075.872-.971.87.974.069.078a.266.266,0,0,0,.4-.008.352.352,0,0,0,.007-.449Z" transform="translate(-25.572 -32.316)" fill="#a3a3a3" />
                                    </g>
                                </svg> <span>Close</span></a>
                        </div>
                        <div class="products-container">
							@foreach ($trashed as $item)
                            <div class="product-item">
                                <a href="#" class="product-info">
                                    <div class="image-container">
                                        <img src="/img/pics/my-products-image.png">
                                    </div>
                                    <h3>{{ $item->name }}</h3>
                                </a>
                                <div class="product-panel product-panel-archived">
                                    <a href="{{ route('product.restore', $item->id) }}"><svg xmlns="http://www.w3.org/2000/svg" width="13.999" height="14" viewBox="0 0 13.999 14">
                                            <g id="noun_restore_1856604" transform="translate(-14 -2.999)">
                                                <path id="Path_2060" data-name="Path 2060" d="M17,10a7,7,0,0,1-13.948.848.583.583,0,0,1,1.157-.14,5.858,5.858,0,1,0,.644-3.43H6.694a.583.583,0,0,1,0,1.167H4.361A1.363,1.363,0,0,1,3,7.083V4.75a.583.583,0,1,1,1.167,0V6.156A6.989,6.989,0,0,1,17,10Z" transform="translate(11 0)" fill="#2b2c33" />
                                            </g>
                                        </svg> <span>Restore</span></a>
                                    <a href="{{ route('product.destroy', $item->id) }}"><svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 14 15">
                                            <g id="noun_Delete_1561486" transform="translate(-3.903 -119.5)">
                                                <g id="Group_642" data-name="Group 642" transform="translate(3.903 120)">
                                                    <path id="Path_1873" data-name="Path 1873" d="M255.313,334.1v9.236a.94.94,0,0,1-.933.94h-7.646a.94.94,0,0,1-.933-.94V334.1" transform="translate(-243.532 -330.276)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                                    <path id="Path_1874" data-name="Path 1874" d="M132,248H118" transform="translate(-118 -245.714)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                                    <path id="Path_1875" data-name="Path 1875" d="M356,122.286v-1.761a.572.572,0,0,1,.575-.525h4.473a.5.5,0,0,1,.488.525v1.761" transform="translate(-351.777 -120)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                                    <line id="Line_100" data-name="Line 100" y2="7.882" transform="translate(5.463 3.824)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                                    <line id="Line_101" data-name="Line 101" y2="7.882" transform="translate(8.585 3.824)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                                </g>
                                            </g>
                                        </svg>
                                        <span>Delete</span></a>
                                </div>
                            </div>
							@endforeach
                        </div>
                        <div class="archive-hint">
                            <p>This is your archive, where you can put all the items you don’t need, but don’t want to delete yet.</p>
                        </div>
                    </div>
                    @foreach ($products as $item)
					<div class="product-item my-item">
                        <a href="#" class="product-info">
                            <div class="image-container">
                                <img src="/img/pics/my-products-image.png">
                            </div>
                            <h3>{{ $item->name }}</h3>
                        </a>
                        <div class="product-panel">
                            <a href="{{ route('product.edit', $item->id) }}">Edit</a>
                            <a href="#" data-toggle="modal" data-target="#modal-my-product-open-{{$item->id}}">Delete</a>
							{!! Form::open(['route' => ['product.trash', $item->id], 'method' => 'delete', 'class' => 'data-form']) !!}
								{!! Form::button('Archive', ['type' => 'submit', 'title' => trans('app.delete_permanently'), 'data-toggle' => 'tooltip', 'data-placement' => 'top']) !!}
							{!! Form::close() !!}
							<!--<a href="{{ route('product.trash', $item->id) }}">Archive</a>-->
                            <a href="{{ route('product.unpublish', $item->id) }}">Unpublish</a>
                        </div>
                        <div class="deleted-item-display">
                            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 14 15">
                                <g id="noun_Delete_1561486" transform="translate(-3.903 -119.5)">
                                    <g id="Group_642" data-name="Group 642" transform="translate(3.903 120)">
                                        <path id="Path_1873" data-name="Path 1873" d="M255.313,334.1v9.236a.94.94,0,0,1-.933.94h-7.646a.94.94,0,0,1-.933-.94V334.1" transform="translate(-243.532 -330.276)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                        <path id="Path_1874" data-name="Path 1874" d="M132,248H118" transform="translate(-118 -245.714)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                        <path id="Path_1875" data-name="Path 1875" d="M356,122.286v-1.761a.572.572,0,0,1,.575-.525h4.473a.5.5,0,0,1,.488.525v1.761" transform="translate(-351.777 -120)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                        <line id="Line_100" data-name="Line 100" y2="7.882" transform="translate(5.463 3.824)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                        <line id="Line_101" data-name="Line 101" y2="7.882" transform="translate(8.585 3.824)" fill="none" stroke="#2b2c33" stroke-miterlimit="10" stroke-width="1" />
                                    </g>
                                </g>
                            </svg>
                            <span>Deleted</span>
                        </div>
                    </div>
					@endforeach
                </div>
            </div>
			@foreach ($products as $item)
			<div class="modal-my-product modal fade" id="modal-my-product-open-{{$item->id}}" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<div class="image-container">
								<img src="/img/pics/modal-image.png" alt="">
							</div>
							<div class="text-container">
								<p class="alert-text">Are you sure you want to delete this item?</p>
								<p>You will not be able to restore this product in the future.</p>
							</div>
							<div class="button-container">
								<button type="button" class="close-button" data-dismiss="modal">Close</button>
								{!! Form::open(['route' => ['product.destroy', $item->id], 'method' => 'delete', 'class' => 'data-form']) !!}
									{!! Form::button('Delete', ['type' => 'submit', 'class' => 'delete-button', 'title' => trans('app.delete_permanently'), 'data-toggle' => 'tooltip', 'data-placement' => 'top']) !!}
								{!! Form::close() !!}
							</div>
						</div>
					</div>
				</div>
			</div>
			@endforeach
			
		</div>
        
@endsection
