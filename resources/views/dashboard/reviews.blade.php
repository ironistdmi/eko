@extends('layouts.master')

@section('content')

        <div class="d-flex fullscreen-page">
            <aside class="profile-aside">
                <h3>Dashboard</h3>
                <div class="aside-navigation">
                    <a class="" href="{{ route('account') }}">Profile</a>
                    <a class="" href="{{ route('account.products') }}">My products</a>
                    <a class="active" href="{{ route('account.reviews') }}">All reviews</a>
                    <a class="" href="{{ route('profile.edit') }}">Settings</a>
                    <hr>
                    <a href="{{ route('logout') }}">Log out</a>
                </div>
            </aside>
            <div class="my-reviews-page fullscreen-block">
                <a class="toggle-dashboard" href="#">Dashboard <br> <svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934">
                        <g id="Group_997" data-name="Group 997" transform="translate(0)">
                            <path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff" />
                        </g>
                    </svg>
                </a>
                <h2>My reviews</h2>
                <div class="my-reviews-items">
					@foreach ($reviews as $review)
                    <div class="review-item my-item">
                        <div class="review-info">
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <img src="/img/pics/review-image-1.png" alt="">
                                </div>
                                <div class="review-status status-green">
                                    <svg id="noun_Heart_1814275" xmlns="http://www.w3.org/2000/svg" width="9.073" height="8.354" viewBox="0 0 9.073 8.354">
                                        <g id="Group_15" data-name="Group 15">
                                            <path id="Path_937" data-name="Path 937" d="M13.442,966.416a2.4,2.4,0,0,0-1.761.77,2.731,2.731,0,0,0,0,3.686l3.479,3.752a.465.465,0,0,0,.679,0l3.483-3.748a2.73,2.73,0,0,0,0-3.686,2.394,2.394,0,0,0-3.519,0l-.3.323-.3-.327A2.389,2.389,0,0,0,13.442,966.416Zm0,.9a1.464,1.464,0,0,1,1.075.5l.646.694a.465.465,0,0,0,.679,0l.643-.686a1.414,1.414,0,0,1,2.154,0,1.813,1.813,0,0,1,0,2.419L15.5,973.625l-3.134-3.385a1.818,1.818,0,0,1,0-2.422A1.471,1.471,0,0,1,13.442,967.32Z" transform="translate(-10.965 -966.416)" fill="#fff" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="info-container">
                                <div class="info-title">
                                    <h3>{{$review->user->name}}</h3>
                                    <div class="review-rating">
                                        <svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                            <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                        </svg>
                                        <span>{{$review->rating}}</span>
                                    </div>
                                    <div class="post-title">
                                        <div class="post-image-container">
                                            <img src="/img/pics/my-products-image.png" alt="">
                                        </div>
                                        <p>@if ($review->node_type == 'Product')
											{{$review->products->name}}
											@else
											{{$review->shops->name}}
											@endif
										</p>
                                    </div>
                                </div>
                                <p>{{$review->comment}}</p>
                            </div>
                        </div>
                        <div class="review-panel">
                            <a href="#" data-toggle="modal" data-target="#modal-my-review-open">Delete</a>
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
					{{ $reviews->links('templates.pagination') }}
                </div>
            </div>
        </div>        

@endsection
