@extends('layouts.master')

@section('content')
<div class="d-flex fullscreen-page">
            <div class="search-page fullscreen-block">
                <div class="search-container">
                    <h2>ECOFARMER</h2>
                    <form action="">
                        <div class="search-area">
                            <div class="search-form-container">
                                <div class="input-container">
                                    <div class="loop-icon">
                                        <svg class="field-icon search-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 12.992 13">
                                            <g id="noun_Search_875352" transform="translate(-10.4 -10.3)">
                                                <path id="Path_938" data-name="Path 938" d="M23.176,22.07l-2.332-2.316a5.854,5.854,0,1,0-4.6,2.236,5.777,5.777,0,0,0,3.593-1.246l2.316,2.348a.7.7,0,0,0,.511.208.769.769,0,0,0,.511-.208A.713.713,0,0,0,23.176,22.07Zm-2.523-5.925a4.417,4.417,0,1,1-1.294-3.114A4.373,4.373,0,0,1,20.653,16.145Z" transform="translate(0)" fill="#cecece" />
                                            </g>
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="What are you looking for?">
                                    <div class="search-result disabled">
                                        <div class="result-items-container">
                                            <div class="result-item">
                                                <div class="result-info">
                                                    <a href="#" class="image-container">
                                                        <img src="/img/pics/my-products-image.png">
                                                    </a>
                                                    <div class="result-title">
                                                        <a href="#">
                                                            <h3>Fresh eggs from thoroughbred chickens</h3>
                                                        </a>
                                                        <div class="result-desc">
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
                                                            <a href="#" class="result-link active">
                                                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                                                </svg>
                                                                <span>Saved</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="result-panel">
                                                    <a href="#">Learn more</a>
                                                    <a class="link-green" href="#">Message</a>
                                                </div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-info">
                                                    <a href="#" class="image-container">
                                                        <img src="/img/pics/my-products-image.png">
                                                    </a>
                                                    <div class="result-title">
                                                        <a href="#">
                                                            <h3>Fresh eggs from thoroughbred chickens</h3>
                                                        </a>
                                                        <div class="result-desc">
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
                                                            <a href="#" class="result-link active">
                                                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                                                </svg>
                                                                <span>Saved</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="result-panel">
                                                    <a href="#">Learn more</a>
                                                    <a class="link-green" href="#">Message</a>
                                                </div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-info">
                                                    <a href="#" class="image-container">
                                                        <img src="/img/pics/my-products-image.png">
                                                    </a>
                                                    <div class="result-title">
                                                        <a href="#">
                                                            <h3>Fresh eggs from thoroughbred chickens</h3>
                                                        </a>
                                                        <div class="result-desc">
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
                                                            <a href="#" class="result-link active">
                                                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                                                </svg>
                                                                <span>Saved</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="result-panel">
                                                    <a href="#">Learn more</a>
                                                    <a class="link-green" href="#">Message</a>
                                                </div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-info">
                                                    <a href="#" class="image-container">
                                                        <img src="/img/pics/my-products-image.png">
                                                    </a>
                                                    <div class="result-title">
                                                        <a href="#">
                                                            <h3>Fresh eggs from thoroughbred chickens</h3>
                                                        </a>
                                                        <div class="result-desc">
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
                                                            <a href="#" class="result-link active">
                                                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                                                </svg>
                                                                <span>Saved</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="result-panel">
                                                    <a href="#">Learn more</a>
                                                    <a class="link-green" href="#">Message</a>
                                                </div>
                                            </div>
                                            <div class="result-item">
                                                <div class="result-info">
                                                    <a href="#" class="image-container">
                                                        <img src="/img/pics/my-products-image.png">
                                                    </a>
                                                    <div class="result-title">
                                                        <a href="#">
                                                            <h3>Fresh eggs from thoroughbred chickens</h3>
                                                        </a>
                                                        <div class="result-desc">
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
                                                            <a href="#" class="result-link active">
                                                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                                                </svg>
                                                                <span>Saved</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="result-panel">
                                                    <a href="#">Learn more</a>
                                                    <a class="link-green" href="#">Message</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Find now</button>
                            </div>
                            <span id="filter-toggle" class="filter-button"><svg xmlns="http://www.w3.org/2000/svg" width="12.135" height="10.974" viewBox="0 0 12.135 10.974">
                                    <g id="noun_sorting_1058871" transform="translate(-2 -4)">
                                        <g id="Group_34" data-name="Group 34" transform="translate(2 4)">
                                            <g id="Group_33" data-name="Group 33">
                                                <g id="Group_32" data-name="Group 32">
                                                    <path id="Path_953" data-name="Path 953" d="M12.972,13.1V4.549a.549.549,0,0,0-1.1,0V13.1l-.229-.229a.549.549,0,0,0-.776.776l1.164,1.164a.547.547,0,0,0,.776,0l1.164-1.164a.549.549,0,0,0-.776-.776ZM2,4.549A.549.549,0,0,1,2.546,4H9.683a.549.549,0,0,1,0,1.1H2.546A.546.546,0,0,1,2,4.549ZM2,7.84a.548.548,0,0,1,.548-.549H8.584a.549.549,0,0,1,0,1.1H2.548A.547.547,0,0,1,2,7.84Zm0,3.292a.547.547,0,0,1,.546-.549H7.488a.549.549,0,0,1,0,1.1H2.546A.546.546,0,0,1,2,11.132Zm0,3.292a.548.548,0,0,1,.547-.549H5.842a.549.549,0,0,1,0,1.1H2.547A.546.546,0,0,1,2,14.423Z" transform="translate(-2 -4)" fill="#9d9d9d" fill-rule="evenodd" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg> Filter</span>
                            <div class="background-fixed-shadow disabled"></div>
                            <div id="filter-content-toggle" class="filter-container disabled">
                                <div class="filter-title">
                                    <h4>Customize your search</h4>
                                    <div class="title-button">
                                        <input type="reset" value="Reset">
                                        <a class="close-filter" href="#">Close</a>
                                    </div>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group-item">
                                        <label for="radius-input">Radius</label>
                                        <select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="radius-input">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div class="form-group-container form-group-item">
                                        <div class="form-group-item">
                                            <label for="price-input">Price</label>
                                            <input id="price-input" placeholder="Example: 4,500" type="text">
                                        </div>
                                        <div class="form-group-container form-group-item">
                                            <div class="form-group-item">
                                                <label for="unit-input">Unit</label>
                                                <select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="unit-input">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                            <div class="form-group-item">
                                                <label for="currency-input">Currency</label>
                                                <select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="currency-input">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group-container">
                                    <div class="form-group-container form-group-item">
                                        <div class="form-group-item">
                                            <label for="subcategory-input">Subcategory</label>
                                            <select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="subcategory-input">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                        <div class="form-group-item">
                                            <label for="category-input">Category</label>
                                            <select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="category-input">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group-item">
                                        <label for="rating-input">Rating</label>
                                        <div class="range-container">
                                            <input id="rating-input" type="range" min="1" max="5" value="1">
                                            <div class="range-value"><span>1</span></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Accept</button>
                            </div>
                        </div>
                    </form>
                    <div class="hint-content">
                        <p>The largest online agricultural marketplace in Germany, which brings together sellers and buyers.</p>
                    </div>
                </div>
            </div>
        </div>
        
@endsection
