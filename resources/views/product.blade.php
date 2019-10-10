@extends('layouts.master')

@section('content')                    
					<div class="profile-info">
                        <div class="profile-image">
                            <img src="/img/pics/avatar.png">
                        </div>
                        <div class="profile-info-wrapper">
                            <div class="profile-about verified">
                                <h2>{{ $item->shop->name }}</h2>
                                <p>{{ $item->shop->description }}</p>
                            </div>
                            <div class="profile-contact">
                                <div class="contact-item"><span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                                            <g id="noun_profile_1594259" transform="translate(-32 -28)">
                                                <g id="Group_996" data-name="Group 996" transform="translate(32 28)">
                                                    <g id="Group_995" data-name="Group 995" transform="translate(0 0)">
                                                        <path id="Path_2077" data-name="Path 2077" d="M44,41.364a.667.667,0,0,1-1.333,0,4.672,4.672,0,0,0-9.333,0,.667.667,0,0,1-1.333,0,6.006,6.006,0,0,1,12,0ZM38,35a3.5,3.5,0,1,1,3.667-3.5A3.586,3.586,0,0,1,38,35Zm0-1.273A2.23,2.23,0,1,0,35.667,31.5,2.282,2.282,0,0,0,38,33.727Z" transform="translate(-32 -28)" fill="#cecece" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg></span>
                                    <p>{{ $item->shop->owner->name}}</p>
                                </div>
                                <div class="contact-item"><span><svg xmlns="http://www.w3.org/2000/svg" width="8.182" height="14.282" viewBox="0 0 8.182 14.282">
                                            <g id="Group_993" data-name="Group 993" transform="translate(-69.25 -18.427)">
                                                <line id="Line_40" data-name="Line 40" y1="6.1" transform="translate(73.427 25.859)" fill="none" stroke="#cecece" stroke-linecap="round" stroke-width="1.5" />
                                                <circle id="Ellipse_194" data-name="Ellipse 194" cx="3.341" cy="3.341" r="3.341" transform="translate(70 19.177)" fill="none" stroke="#cecece" stroke-linecap="round" stroke-width="1.5" />
                                            </g>
                                        </svg>
                                    </span>
                                    <p>{{ $item->shop->owner->address->city }},{{ $item->shop->owner->address->country }}</p>
                                </div>
                                <div class="contact-item"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13.066" viewBox="0 0 13 13.066">
                                            <g id="noun_Phone_1538695" transform="translate(0.035 -0.017)">
                                                <g id="Layer_2" data-name="Layer 2" transform="translate(-0.035 0.017)">
                                                    <g id="Layer_1" data-name="Layer 1" transform="translate(0)">
                                                        <path id="Path_2078" data-name="Path 2078" d="M9.672,13.083c-.239-.04-.479-.071-.716-.122a9.314,9.314,0,0,1-2.514-1.03A13.435,13.435,0,0,1,3.13,9.338a13.268,13.268,0,0,1-2.755-4.3A5.592,5.592,0,0,1-.029,3.2,2.213,2.213,0,0,1,.578,1.511c.366-.375.72-.763,1.113-1.1A1.276,1.276,0,0,1,3.549.431c.62.582,1.22,1.194,1.8,1.816a1.234,1.234,0,0,1,0,1.678c-.307.349-.646.666-.971,1-.03.028-.061.052-.115.1A9.455,9.455,0,0,0,7.987,8.741l.774-.782a1.953,1.953,0,0,1,.7-.523,1.169,1.169,0,0,1,1.274.227q.974.927,1.9,1.906a1.244,1.244,0,0,1,.033,1.661c-.39.46-.822.9-1.26,1.317a1.941,1.941,0,0,1-1.129.5.856.856,0,0,0-.089.026Zm.193-.786a1.493,1.493,0,0,0,1.159-.457c.293-.307.592-.606.889-.91a1.459,1.459,0,0,0,.108-.122.533.533,0,0,0-.016-.767c-.239-.258-.491-.5-.739-.751-.322-.322-.641-.646-.967-.964a.523.523,0,0,0-.761-.021c-.049.04-.092.085-.138.131-.31.308-.617.62-.929.925a.591.591,0,0,1-.741.124c-.19-.1-.378-.192-.561-.3A9.661,9.661,0,0,1,5.005,7.382,7.8,7.8,0,0,1,3.573,5.346a.662.662,0,0,1,.174-.917c.319-.31.66-.64.976-.974a.5.5,0,0,0,.012-.73C4.7,2.68,4.657,2.638,4.617,2.6L3.087,1.06a.582.582,0,0,0-.946,0c-.328.326-.636.613-.934.939a1.743,1.743,0,0,0-.349.523A2.22,2.22,0,0,0,.842,3.8a7.756,7.756,0,0,0,.68,1.873A12.794,12.794,0,0,0,3.5,8.553,12.485,12.485,0,0,0,8.5,12a4.553,4.553,0,0,0,1.366.288Z" transform="translate(0.035 -0.017)" fill="#cecece" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <p>{{ $item->shop->owner->address->phone }}</p>
                                </div>
                                <div class="contact-item"><span><svg xmlns="http://www.w3.org/2000/svg" width="16.696" height="12" viewBox="0 0 16.696 12">
                                            <g id="noun_Email_1703147" transform="translate(-38 -46)">
                                                <g id="Group_994" data-name="Group 994" transform="translate(38 46)">
                                                    <path id="Path_2076" data-name="Path 2076" d="M33.3,979.362a1.313,1.313,0,0,0-1.3,1.3v9.391a1.313,1.313,0,0,0,1.3,1.3H47.391a1.313,1.313,0,0,0,1.3-1.3v-9.391a1.313,1.313,0,0,0-1.3-1.3Zm0,1.043H47.391a.25.25,0,0,1,.261.261v9.391a.25.25,0,0,1-.261.261H33.3a.25.25,0,0,1-.261-.261v-9.391A.25.25,0,0,1,33.3,980.406Zm2.03,1.557a.522.522,0,0,0-.31.9l2.625,2.609-2.609,2.372a.522.522,0,1,0,.7.774l2.649-2.413.791.783a1.657,1.657,0,0,0,2.323,0l.791-.783,2.658,2.413a.522.522,0,1,0,.7-.774l-2.617-2.38,2.633-2.6a.522.522,0,1,0-.734-.742l-4.174,4.125a.7.7,0,0,1-.848,0l-4.158-4.125A.521.521,0,0,0,35.334,981.963Z" transform="translate(-32 -979.362)" fill="#cecece" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <p>{{ $item->shop->owner->email }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="profile-button">
                            <a class="link-button" href="#">Edit Profile</a>
                        </div>
                    </div>
                    <div class="product-container">
                        <a class="products-button" href="#" onclick="window.history.go(-1); return false;"> <svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934">
                                <g id="Group_997" data-name="Group 997" transform="translate(0)">
                                    <path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff" />
                                </g>
                            </svg> All products</a>
                        <div class="product-info-block">
                            <div class="slider-block">
                                <div class="slick-container">
                                    <div class="slider-for">
                                        <a data-fancybox="gallery" href="img/pics/product-slider-main.png" class="item"><img src="/img/pics/product-slider-main.png" alt=""></a>
                                        <a data-fancybox="gallery" href="img/pics/product-slider-2.png" class="item"><img src="/img/pics/product-slider-2.png" alt=""></a>
                                        <a data-fancybox="gallery" href="img/pics/product-slider-1.png" class="item"><img src="/img/pics/product-slider-1.png" alt=""></a>
                                        <a data-fancybox="gallery" href="img/pics/product-slider-main.png" class="item"><img src="/img/pics/product-slider-main.png" alt=""></a>
                                        <a data-fancybox="gallery" href="img/pics/product-slider-main.png" class="item"><img src="/img/pics/product-slider-main.png" alt=""></a>
                                    </div>
                                    <div class="slider-nav">
                                        <div class="item"><img src="/img/pics/product-slider-main.png" alt=""></div>
                                        <div class="item"><img src="/img/pics/product-slider-2.png" alt=""></div>
                                        <div class="item"><img src="/img/pics/product-slider-1.png" alt=""></div>
                                        <div class="item"><img src="/img/pics/product-slider-2.png" alt=""></div>
                                        <div class="item"><img src="/img/pics/product-slider-1.png" alt=""></div>
                                    </div>
                                </div>
                            </div>
                            <div class="info-block">
                                <div class="title-container">
                                    <div class="title-info">
                                        <h2>{{ $item->name }}</h2>
                                        <a href="{{ route('wishlist.add', $item->id) }}">
                                            <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                                <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                            </svg>
                                            <span>Save</span>
                                        </a>
                                    </div>
                                    <div class="title-review">
                                        <div class="review-rating">
                                            <svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                            </svg>
                                            <span>4.9</span>
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
                                    </div>
                                    <p>{!! $item->product->short_description !!}</p>
                                </div>
                                <div class="price-container">
                                    <div class="price-content">
                                        <span class="big-green-span">50 UAH</span>
                                        <span class="big-span">/</span>
                                        <span>1 KG</span>
                                    </div>
                                    <div class="tags-container">
                                        <div class="tag-category">
                                            <p>Category</p>
                                            <div class="tag-item">
                                                <span>Food</span>
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="8.342" height="8.342" viewBox="0 0 8.342 8.342">
                                                        <g id="Group_926" data-name="Group 926" transform="translate(0.731 0.731)">
                                                            <path id="Path_2074" data-name="Path 2074" d="M-5721.075,6344.8l6.552,6.552" transform="translate(5721.238 -6344.639)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1" />
                                                            <path id="Path_2075" data-name="Path 2075" d="M0,0,6.651,6.651" transform="matrix(0.035, 0.999, -0.999, 0.035, 6.647, 0)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-width="1" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="tag-category">
                                            <p>Subcategory</p>
                                            <div class="tag-item">
                                                <span>Vegetables</span>
                                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="8.342" height="8.342" viewBox="0 0 8.342 8.342">
                                                        <g id="Group_926" data-name="Group 926" transform="translate(0.731 0.731)">
                                                            <path id="Path_2074" data-name="Path 2074" d="M-5721.075,6344.8l6.552,6.552" transform="translate(5721.238 -6344.639)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1" />
                                                            <path id="Path_2075" data-name="Path 2075" d="M0,0,6.651,6.651" transform="matrix(0.035, 0.999, -0.999, 0.035, 6.647, 0)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-width="1" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="button-container">
                                        <a class="button-fill link-button" href="#">Edit</a>
                                        <a class="link-button" href="#" data-toggle="modal" data-target="#modal-product-post-open">Unpublish</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="description-block">
                            <hr>
                            <div class="detail-container">
                                <h4>Detailed Product Description</h4>
                                <p>{!! $item->product->description !!}</p>
                            </div>
                            <div class="map-container">
                                <h4>Detailed Product Description</h4>
                                <div class="map-item" data-lat="50.50837379376932" data-lng="30.43659461958009">
                                    <div id="map" class="product-map"></div>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="review-block">
                            <h4>Reviews</h4>
                            <div class="review-item">
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
                                            <h3>Oleg Markov</h3>
                                            <div class="review-rating">
                                                <svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                    <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                </svg>
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                        <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="review-item">
                                <div class="review-info">
                                    <div class="image-container">
                                        <div class="image-wrapper">
                                            <img src="/img/pics/review-image-2.png" alt="">
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
                                            <h3>Oleg Markov</h3>
                                            <div class="review-rating">
                                                <svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                    <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                </svg>
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="review-item">
                                <div class="review-info">
                                    <div class="image-container">
                                        <div class="image-wrapper">
                                            <img src="/img/pics/review-image-3.png" alt="">
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
                                            <h3>Oleg Markov</h3>
                                            <div class="review-rating">
                                                <svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                    <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                </svg>
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                        <p>Super! </p>
                                    </div>
                                </div>
                            </div>
                            <div class="review-item">
                                <div class="review-info">
                                    <div class="image-container">
                                        <div class="image-wrapper">
                                            <img src="/img/pics/review-image-4.png" alt="">
                                        </div>
                                        <div class="review-status status-red">
                                            <svg id="Group_1080" data-name="Group 1080" xmlns="http://www.w3.org/2000/svg" width="8.783" height="8.283" viewBox="0 0 8.783 8.283">
                                                <path id="Path_2136" data-name="Path 2136" d="M10.647,967.749a4.33,4.33,0,0,1,.8-2.648.588.588,0,0,0,.41.169h1.774a.6.6,0,0,0,.591-.591v-3.547a.6.6,0,0,0-.591-.591H11.854a.589.589,0,0,0-.425.185,2.143,2.143,0,0,0-.231-.166,1.509,1.509,0,0,0-.637-.194c-.519-.054-1.338-.014-3.24-.021a.3.3,0,0,0-.188.068,1.769,1.769,0,0,0-.647.958.3.3,0,0,0-.086.071,1.519,1.519,0,0,0-.351,1.14.292.292,0,0,0-.043.043,1.474,1.474,0,0,0-.317,1.315,1.143,1.143,0,0,0-.246.822.977.977,0,0,0,.579.782.3.3,0,0,0,.117.025H8.565a4.053,4.053,0,0,0,.311,2.461,1.119,1.119,0,0,0,.785.585A.877.877,0,0,0,10.647,967.749Zm-1.256-.015a3.874,3.874,0,0,1-.2-2.408.309.309,0,0,0-.289-.351H6.225a.36.36,0,0,1-.194-.283.564.564,0,0,1,.157-.406H7.222a.3.3,0,1,0,0-.591H6.243A.9.9,0,0,1,6.4,963.1h.825a.3.3,0,1,0,0-.591H6.637a.9.9,0,0,1,.154-.591h.431a.3.3,0,1,0,0-.591h-.1a1.2,1.2,0,0,1,.326-.394c1.794.006,2.65-.023,3.055.019a.818.818,0,0,1,.394.114,4.131,4.131,0,0,1,.366.28v3a5.26,5.26,0,0,0-1.207,3.378C9.963,968.23,9.522,968.019,9.39,967.734Zm4.237-3.055H11.854c.007-1.175,0-2.364,0-3.548h1.774Z" transform="translate(-5.436 -960.336)" fill="#fff" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="info-container">
                                        <div class="info-title">
                                            <h3>Oleg Markov</h3>
                                            <div class="review-rating">
                                                <svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                    <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                </svg>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <p>Not as good as they say about it! Quality is bad. They need to check their proceses of creating tomatoes! </p>
                                    </div>
                                </div>
                            </div>
                            <div class="button-container">
                                <a href="#">See more (23)</a>
                            </div>
                            <div class="feedback-container">
                                <h3>Post a feedback</h3>
                                <form action="">
                                    <div class="feedback-form disabled">
                                        <div class="disabled-text">Write it here</div>
                                        <div class="stars-container">
                                            <span>How much stars?</span>
                                            <div class="stars-items">
                                                <input id="stars-review-1" type="radio" name="review-stars">
                                                <input id="stars-review-2" type="radio" name="review-stars">
                                                <input id="stars-review-3" type="radio" name="review-stars">
                                                <input id="stars-review-4" type="radio" name="review-stars">
                                                <input id="stars-review-5" type="radio" name="review-stars">
                                                <label for="stars-review-1"><svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                        <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                    </svg></label>
                                                <label for="stars-review-2"><svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                        <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                    </svg></label>
                                                <label for="stars-review-3"><svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                        <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                    </svg></label>
                                                <label for="stars-review-4"><svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                        <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                    </svg></label>
                                                <label for="stars-review-5"><svg id="Group" xmlns="http://www.w3.org/2000/svg" height="9.904" viewBox="0 0 10.366 9.904">
                                                        <path id="Path_922" data-name="Path 922" d="M9.973,5.735a.716.716,0,0,0,.206.773l1.829,1.777a.315.315,0,0,1,.077.232l-.464,2.5a.671.671,0,0,0,.18.618.782.782,0,0,0,.953.18L15,10.629a.193.193,0,0,1,.232,0l2.241,1.185a.778.778,0,0,0,1.133-.8l-.438-2.5a.415.415,0,0,1,.077-.232l1.829-1.777a.8.8,0,0,0,.206-.773.747.747,0,0,0-.618-.515l-2.55-.386a.194.194,0,0,1-.18-.129L15.795,2.438a.771.771,0,0,0-1.391,0L13.3,4.7a.194.194,0,0,1-.18.129l-2.524.361A.783.783,0,0,0,9.973,5.735Z" transform="translate(-9.94 -2)" fill="#efba0b" />
                                                    </svg></label>
                                            </div>
                                            <span id="stars-count"></span>
                                            <hr>
                                        </div>
                                        <textarea rows="10" placeholder="Write your feedback here"></textarea>
                                    </div>
                                    <button type="submit">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
@endsection
