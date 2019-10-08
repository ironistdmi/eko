        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="header-wrapper col-12">
                        <div class="header-button">
                            <button class="menu-toggle-trigger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <a href="/" class="header-logo">
                                <h1>ECOFARMER</h1>
                            </a>
                        </div>
                        <div class="header-navigation">
                            <div class="navigation-container">
                                <a href="{{ route('inCategoriesSearch') }}">@lang('app.header.search')</a>
                                
									<a href="@if (Auth::check()){{ route('account', 'wishlist') }}@else{{ route('login') }}@endif">@lang('app.header.saved')</a>
								@if (Auth::check())
									<a href="add-item.html">@lang('app.header.add_item')</a>
								@endif
                            </div>
                            <div class="search-container">
                                {!! Form::open(['route' => 'inCategoriesSearch', 'method' => 'GET', 'id' => 'search-header-form', 'class' => '', 'role' => 'search']) !!}
                                    <div class="input-field">
                                        <input type="text">
                                        <svg class="field-icon search-icon" xmlns="http://www.w3.org/2000/svg" width="12.992" height="13" viewBox="0 0 12.992 13">
                                            <g id="noun_Search_875352" transform="translate(-10.4 -10.3)">
                                                <path id="Path_938" data-name="Path 938" d="M23.176,22.07l-2.332-2.316a5.854,5.854,0,1,0-4.6,2.236,5.777,5.777,0,0,0,3.593-1.246l2.316,2.348a.7.7,0,0,0,.511.208.769.769,0,0,0,.511-.208A.713.713,0,0,0,23.176,22.07Zm-2.523-5.925a4.417,4.417,0,1,1-1.294-3.114A4.373,4.373,0,0,1,20.653,16.145Z" transform="translate(0)" fill="#cecece" />
                                            </g>
                                        </svg>
                                        <svg class="field-icon micro-icon" xmlns="http://www.w3.org/2000/svg" width="12.136" height="15.925" viewBox="0 0 12.136 15.925">
                                            <g id="noun_voice_2627272" transform="translate(0 0)">
                                                <g id="Group_16" data-name="Group 16">
                                                    <path id="Path_939" data-name="Path 939" d="M10.928,93.839a.6.6,0,0,1,1.208,0v.906A6.082,6.082,0,0,1,6.7,100.782v2.174a.6.6,0,0,1-1.208,0v-2.174A6.135,6.135,0,0,1,0,94.744v-.906a.6.6,0,0,1,1.208,0v.906a4.861,4.861,0,0,0,9.721,0Z" transform="translate(0 -87.62)" fill="#00074d" />
                                                    <path id="Path_940" data-name="Path 940" d="M48.381,0A3.35,3.35,0,0,1,51.7,3.321v3.8a3.351,3.351,0,0,1-6.7,0v-3.8A3.363,3.363,0,0,1,48.381,0Zm0,1.208a2.152,2.152,0,0,0-2.174,2.113v3.8a2.144,2.144,0,0,0,4.287,0v-3.8A2.139,2.139,0,0,0,48.381,1.208Z" transform="translate(-42.283)" fill="#00074d" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="button-wrapper">
                                        <button type="submit">@lang('app.header.find_now')</button>
                                    </div>
                                {!! Form::close() !!}
                            </div>
                        </div>
                        <div class="header-panel">
							@if (Auth::check())
                            <a class="conversation-link" href="chat.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <g id="noun_messages_1516437" transform="translate(-5 -2)">
                                        <g id="Group_1019" data-name="Group 1019" transform="translate(5 2)">
                                            <path id="Path_2126" data-name="Path 2126" d="M9.5,4h-6a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z" fill="#2b2c33" />
                                            <path id="Path_2127" data-name="Path 2127" d="M7.5,6h-4a.5.5,0,0,1,0-1h4a.5.5,0,0,1,0,1Z" fill="#2b2c33" />
                                            <g id="Group_1018" data-name="Group 1018">
                                                <path id="Path_2128" data-name="Path 2128" d="M.5,12.5a.507.507,0,0,1-.212-.047A.5.5,0,0,1,0,12V2A2,2,0,0,1,2,0h9a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H3.681L.82,12.384A.494.494,0,0,1,.5,12.5ZM2,1A1,1,0,0,0,1,2v8.933L3.18,9.117A.5.5,0,0,1,3.5,9H11a1,1,0,0,0,1-1V2a1,1,0,0,0-1-1Z" fill="#2b2c33" />
                                                <path id="Path_2129" data-name="Path 2129" d="M15.5,16a.5.5,0,0,1-.312-.109L12.824,14H6a2,2,0,0,1-2-2v-.5a.5.5,0,0,1,1,0V12a1,1,0,0,0,1,1h7a.5.5,0,0,1,.312.109L15,14.46V6a1,1,0,0,0-1-1,.5.5,0,0,1,0-1,2,2,0,0,1,2,2v9.5a.5.5,0,0,1-.283.45A.51.51,0,0,1,15.5,16Z" fill="#2b2c33" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <div class="notification-link new-notification">
                                <div class="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.928" height="15" viewBox="0 0 13.928 15">
                                        <g id="noun_notification_2184965" transform="translate(-24 -22)">
                                            <g id="Group_18" data-name="Group 18" transform="translate(24 22)">
                                                <g id="Group_17" data-name="Group 17">
                                                    <path id="Path_941" data-name="Path 941" d="M37.929,32.179a1.609,1.609,0,0,1-1.61,1.607H25.61a1.607,1.607,0,1,1,0-3.214s0-3.214,0-3.214a5.357,5.357,0,0,1,10.714,0v3.214A1.609,1.609,0,0,1,37.929,32.179Zm-1.608-.536a1.07,1.07,0,0,1-1.071-1.072V27.357a4.286,4.286,0,0,0-8.571,0v3.214a1.072,1.072,0,0,1-1.071,1.072.536.536,0,1,0,0,1.071H36.319a.536.536,0,1,0,0-1.071Zm-7.767,2.946h1.071a1.339,1.339,0,1,0,2.679,0h1.071a2.411,2.411,0,0,1-4.821,0Z" transform="translate(-24 -22)" fill="#2b2c33" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="new-notification-panel">
                                    <div class="notification-item">
                                        <div class="image-container">
                                            <div class="image-wrapper">
                                                <img src="/img/pics/avatar.png" alt="">
                                            </div>
                                        </div>
                                        <div class="text-container">
                                            <p><span class="span-big">Oleg Makarov</span> send you a message.</p>
                                            <a href="#">View</a>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="notification-item verification-notification">
                                        <div class="image-container">
                                            <div class="image-wrapper">
                                                <img src="/img/pics/verified-icon.svg" alt="">
                                            </div>
                                        </div>
                                        <div class="text-container">
                                            <p><span class="span-big">You</span> received a verification icon!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="profile-panel" href="{{ route('account') }}">
                                <img src="/img/pics/avatar.png" alt="">
                            </a>
							@else
								<a href="{{ route('login') }}" class="link-button">@lang('app.header.login')</a>
								<a href="{{ route('register') }}" class="link-button button-fill">@lang('app.header.singup')</a>
							@endif

                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="header-fixed-shadow disabled"></div>