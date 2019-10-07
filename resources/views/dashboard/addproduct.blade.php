@extends('layouts.master')

@section('content')

 <div class="d-flex fullscreen-page">
            <div class="add-item-page fullscreen-block">
                <div class="title-block">
                    <div class="register-links">
                        <a class="active" href="#">1. Information</a>
                        <a href="#">2. Review</a>
                    </div>
                    <h2>Let’s add a product</h2>
                </div>
                <hr>
                <div class="form-block">
                    <form action="">
                        <label for="product-name-input">Product Name</label>
                        <input id="product-name-input" placeholder="Example: Fresh tomatoes" type="text">
                        <label for="short-description-input">Short Description</label>
                        <input class="count-description login-password" id="short-description-input" placeholder="Example: Fresh tomatoes" type="text">
                        <div class="button-container">
                            <span><span class="count-description-number">0</span> symbols</span>
                        </div>
                        <label for="description-input" class="title-tooltip tooltip-relative">
                            <span>Product Descrisption</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.486" height="15" viewBox="0 0 12.486 15">
                                <g id="noun_Info_2397918" transform="translate(-105.498 -41.5)">
                                    <g id="Group_1005" data-name="Group 1005" transform="translate(105.498 41.5)">
                                        <path id="Path_2100" data-name="Path 2100" d="M105.595,49.765c-.076-1.847-.142-3.744-.057-5.594l6.2-2.671,6.2,2.671c.085,1.85.019,3.747-.057,5.594-.125,3.021-3.645,5.523-6.146,6.735C109.24,55.288,105.719,52.787,105.595,49.765Zm6.974-1.34v3.769a.828.828,0,0,1-1.656,0V48.425A.828.828,0,0,1,112.569,48.425Zm-.828-3.441a.871.871,0,1,1-.871.871A.871.871,0,0,1,111.741,44.985ZM106.7,49.722c.115,2.793,4.019,5.008,5.037,5.54,1.018-.531,4.922-2.747,5.037-5.54.107-2.593.1-4.159.083-4.806l-5.12-2.2-5.12,2.2C106.607,45.563,106.6,47.129,106.7,49.722Z" transform="translate(-105.498 -41.5)" fill="#00a757" />
                                    </g>
                                </g>
                            </svg>
                            <div class="tooltip-container">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata </p>
                            </div>
                        </label>
                        <textarea class="count-description" id="description-input" maxlength="250" rows="5"></textarea>
                        <div class="button-container">
                            <span><span class="count-description-number">0</span> symbols</span>
                        </div>
                        <div class="form-group-container">
                            <div class="form-group-item">
                                <label for="subcategory-input">Select a subcategory</label>
                                <select class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="subcategory-input">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div class="form-group-item">
                                <label for="category-input">Select a category</label>
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
                                <label for="price-input">Price</label>
                                <input id="price-input" placeholder="Example: Poltaskiy Shlyah" type="text">
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
                        <label for="drag-n-drop">Add some photos</label>
                        <div class="drag-n-drop-container" id="drag-n-drop">
                            <div class="drag-n-drop-slick"></div>
                            <div class="drag-n-drop-input">
                                <label for="drag-n-drop-file">or browse files</label>
                                <input id="drag-n-drop-file" type="file">
                            </div>
                            <div class="drag-n-drop-paceholder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="49" viewBox="0 0 46 49">
                                    <g id="noun_Photo_2139977" transform="translate(-12 -11)">
                                        <g id="Group_1008" data-name="Group 1008">
                                            <g id="Group_1007" data-name="Group 1007" transform="translate(16.148 17.552)">
                                                <g id="noun_vegetables_1422990">
                                                    <path id="Path_2106" data-name="Path 2106" d="M33.427,13.5a2.858,2.858,0,0,0-.874,3.817l5.224,9.007a.967.967,0,0,0,1.1.445h0a.967.967,0,0,0,.7-.963L39.224,15.37a2.858,2.858,0,0,0-2.888-2.761,4.444,4.444,0,0,0,.233-1.739,5.629,5.629,0,0,0-1.832-3.359.424.424,0,0,0-.7.382s.2,1.438.36,3.176c0,.144.025.3.038.424l-.2-.394c-.785-1.556-1.37-2.871-1.374-2.884a.424.424,0,0,0-.793.047,5.666,5.666,0,0,0,.225,3.817A4.461,4.461,0,0,0,33.427,13.5Zm4.122.356a2,2,0,0,1,.848,1.561l.03.916-1.518.424a.424.424,0,1,0,.233.814l1.31-.377.3,8.642a.119.119,0,0,1-.221.064l-2.12-3.7,1.107-.318a.424.424,0,1,0-.233-.814l-1.221.352a.424.424,0,0,0-.081.042l-.92-1.5.9-.259a.435.435,0,1,0-.242-.835l-1.107.318L33.52,17.291l.8-.229a.424.424,0,1,0-.233-.814l-.967.276a2.01,2.01,0,0,1,1.349-2.591L35.8,13.55a2.027,2.027,0,0,1,.56-.081,2,2,0,0,1,1.187.386Zm-1.828-2.9a3.846,3.846,0,0,1-.331,1.84h0c-.038-.615-.089-1.221-.14-1.8-.059-.666-.127-1.272-.187-1.8a3.91,3.91,0,0,1,.657,1.764Zm-2.256.53c.263.522.543,1.06.848,1.6h0a3.846,3.846,0,0,1-1.272-1.387,3.91,3.91,0,0,1-.369-1.84C32.893,10.336,33.177,10.9,33.465,11.477Z" transform="translate(-20.292 -5.656)" fill="#cecece" />
                                                    <path id="Path_2107" data-name="Path 2107" d="M19.426,16.691A23.748,23.748,0,0,0,21.207,19.7l.288.424a.424.424,0,0,0,.7-.483l-.288-.424a22.932,22.932,0,0,1-1.59-2.646c.356-.539,1.785-2.879,1.166-5.131h0c-.691-2.51-3.634-3.817-3.757-3.872a.424.424,0,0,0-.513.165c-.081.11-1.938,2.739-1.247,5.25C16.534,15.041,18.645,16.292,19.426,16.691ZM17.7,8.511a5.938,5.938,0,0,1,2.968,3.159h0a5.624,5.624,0,0,1-.793,3.995,22.9,22.9,0,0,1-1.374-3.893l-.123-.488a.424.424,0,0,0-.823.208l.114.483a23.747,23.747,0,0,0,1.12,3.325,5.062,5.062,0,0,1-2.014-2.57A5.876,5.876,0,0,1,17.7,8.511Z" transform="translate(-11.062 -5.73)" fill="#cecece" />
                                                    <path id="Path_2108" data-name="Path 2108" d="M12.931,46.871a1.209,1.209,0,0,1-2.12-.208.424.424,0,0,0-.785.322,2.057,2.057,0,0,0,3.613.352.425.425,0,1,0-.708-.471Z" transform="translate(-7.714 -28.111)" fill="#cecece" />
                                                    <path id="Path_2109" data-name="Path 2109" d="M32.88,49.218a1.628,1.628,0,1,0,1.628-1.628A1.628,1.628,0,0,0,32.88,49.218Zm2.409,0a.78.78,0,1,1-.78-.78A.78.78,0,0,1,35.289,49.218Z" transform="translate(-20.895 -28.797)" fill="#cecece" />
                                                    <path id="Path_2110" data-name="Path 2110" d="M80,21.347a1.628,1.628,0,1,0-1.628-1.628A1.628,1.628,0,0,0,80,21.347Zm0-2.409a.773.773,0,1,1-.553.226A.78.78,0,0,1,80,18.938Z" transform="translate(-47.094 -11.807)" fill="#cecece" />
                                                    <path id="Path_2111" data-name="Path 2111" d="M51.738,14.7a1.628,1.628,0,1,0-1.628-1.628A1.628,1.628,0,0,0,51.738,14.7Zm0-2.409a.78.78,0,1,1-.78.78A.78.78,0,0,1,51.738,12.288Z" transform="translate(-30.818 -7.977)" fill="#cecece" />
                                                    <path id="Path_2112" data-name="Path 2112" d="M8.918,27.957A1.628,1.628,0,1,0,7.29,26.328,1.628,1.628,0,0,0,8.918,27.957Zm0-2.409a.78.78,0,1,1-.78.78A.78.78,0,0,1,8.918,25.548Z" transform="translate(-6.156 -15.614)" fill="#cecece" />
                                                    <path id="Path_2113" data-name="Path 2113" d="M23.471,68.87a.426.426,0,0,0-.738.424q.2.352.424.687a.425.425,0,0,0,.708-.471Q23.662,69.2,23.471,68.87Z" transform="translate(-15.018 -40.93)" fill="#cecece" />
                                                    <path id="Path_2114" data-name="Path 2114" d="M30.322,76.092c-.276-.14-.551-.293-.818-.45s-.632-.4-.929-.611a11.845,11.845,0,0,1-1.438-1.226l-.161-.157a2.992,2.992,0,0,1-.263-.284.424.424,0,0,0-.649.547,3.681,3.681,0,0,0,.322.348l.148.148a12.692,12.692,0,0,0,1.544,1.315c.318.229.649.449.992.653s.572.331.848.479A.424.424,0,1,0,30.3,76.1Z" transform="translate(-16.912 -43.555)" fill="#cecece" />
                                                    <path id="Path_2115" data-name="Path 2115" d="M42.292,23.852a1.158,1.158,0,0,0-1.76.331L39.3,26.422a3.036,3.036,0,0,0-1.671-.144,3.248,3.248,0,0,0-1.62.929l-1.823,1.862A27.033,27.033,0,0,1,27.7,33.936l-1.989,1.073a6.912,6.912,0,0,0-3.036,3.168c-.064.14-.114.288-.17.424h-6.95a.424.424,0,0,0,.212-.5L14.38,33.614a2.057,2.057,0,1,0-1.332-3.85c-.034,0-.059.042-.093.059a2.651,2.651,0,0,0-.119-.28,2.616,2.616,0,0,0-4.953,1.03,2.621,2.621,0,0,0-2.812,4.016A2.625,2.625,0,0,0,9.736,37l1.2,1.6H9.02a.424.424,0,0,0-.424.424c0,7.739,6.1,13.146,14.842,13.146S38.28,46.764,38.28,39.025a.424.424,0,0,0-.424-.424h-.475l3.893-7.654a3.176,3.176,0,0,0-.14-3.041l1.429-2.612a1.162,1.162,0,0,0-.271-1.442ZM9.923,35.861h0a.418.418,0,0,0-.772.17,1.777,1.777,0,1,1-3.223-1.247v-.03a.585.585,0,0,0,.055-.157.424.424,0,0,0-.089-.31h0A1.777,1.777,0,0,1,8.1,31.574a.424.424,0,0,0,.225.047h.089a.424.424,0,0,0,.322-.5,1.777,1.777,0,1,1,3.507-.5.424.424,0,0,0,.161.3h0a.425.425,0,0,0,.068.034l.055.03A.424.424,0,0,0,13,30.853a1.222,1.222,0,1,1,.865,1.934.416.416,0,0,0-.42.606h0l1.429,4.584-.814.424-1.527-3.028a.425.425,0,0,0-.759.382L13.188,38.6h-1.2ZM23.438,51.322h0c-7.188,0-12.349-3.643-13.663-9.329H37.1C35.786,47.68,30.626,51.322,23.438,51.322ZM37.262,41.145H9.613a13.277,13.277,0,0,1-.17-1.7H37.432a13.282,13.282,0,0,1-.17,1.7ZM23.438,38.6a.093.093,0,0,1,.03-.081,6.06,6.06,0,0,1,2.663-2.752L28.1,34.7a27.89,27.89,0,0,0,6.692-5.034l.611-.623.721.068a1.064,1.064,0,0,1,.848.645,1.908,1.908,0,0,0,1.365,1.132h.068a1.064,1.064,0,0,1,.721.6l.424.924h0L36.431,38.6ZM41.821,24.887l-1.548,2.824a.4.4,0,0,0,0,.059.424.424,0,0,0-.025.085.984.984,0,0,0,0,.161.424.424,0,0,0,.034.085.4.4,0,0,0,.025.055,2.366,2.366,0,0,1,.221,2.413l-.45.886-.148-.322a1.917,1.917,0,0,0-1.336-1.069h-.068a1.06,1.06,0,0,1-.759-.628,1.921,1.921,0,0,0-1.531-1.158H36.16l.445-.458a2.4,2.4,0,0,1,1.192-.7,2.328,2.328,0,0,1,1.505.229.424.424,0,0,0,.068,0,.424.424,0,0,0,.081,0,.424.424,0,0,0,.081,0,.25.25,0,0,0,.148-.051.748.748,0,0,0,.17-.161L41.257,24.6a.31.31,0,0,1,.471-.089A.314.314,0,0,1,41.821,24.887Z" transform="translate(-4.617 -14.969)" fill="#cecece" />
                                                    <path id="Path_2116" data-name="Path 2116" d="M72.352,41.149c-.649.572-1.336,1.115-2.04,1.624a.424.424,0,1,0,.5.687c.725-.522,1.433-1.086,2.12-1.675a.424.424,0,1,0-.56-.636Z" transform="translate(-42.344 -25.019)" fill="#cecece" />
                                                    <path id="Path_2117" data-name="Path 2117" d="M57.91,49.447,55.917,50.5a7.239,7.239,0,0,0-2.069,1.662.424.424,0,1,0,.64.556,6.4,6.4,0,0,1,1.823-1.45L58.3,50.2a.424.424,0,0,0-.4-.746Z" transform="translate(-32.906 -29.839)" fill="#cecece" />
                                                    <path id="Path_2118" data-name="Path 2118" d="M58.239,19.2a.424.424,0,0,0,.547.123c.492-.267,4.8-2.672,5.309-4.923a3.172,3.172,0,0,0-.708-2.943,4.326,4.326,0,0,0-1.353-.967,3.94,3.94,0,0,0,2.048-1.332h0a4.689,4.689,0,0,0,.56-3.265.424.424,0,0,0-.466-.339,5.055,5.055,0,0,0-.924.2,6.42,6.42,0,0,0-.967-2.307.424.424,0,0,0-.551-.123,5.5,5.5,0,0,0-2.544,3.147,5.064,5.064,0,0,0,.632,3.392,4.792,4.792,0,0,0-2.392.25,3.172,3.172,0,0,0-1.9,2.37C55.025,14.734,57.891,18.754,58.239,19.2ZM63.374,8.67h0a3.363,3.363,0,0,1-1.938,1.107,3.346,3.346,0,0,1,.488-2.18A3.367,3.367,0,0,1,63.862,6.49a3.346,3.346,0,0,1-.488,2.18ZM60.02,6.66a4.467,4.467,0,0,1,1.794-2.37,5.369,5.369,0,0,1,.636,1.8,3.431,3.431,0,0,0-1.213,1,3.961,3.961,0,0,0-.666,2.392A4.362,4.362,0,0,1,60.02,6.66Zm-3.664,6.009a2.328,2.328,0,0,1,1.4-1.76,3.477,3.477,0,0,1,1.332-.237,5.984,5.984,0,0,1,1.306.157,4.448,4.448,0,0,1,2.345,1.2,2.328,2.328,0,0,1,.509,2.188C62.9,15.684,60.1,17.575,58.684,18.4,57.764,17.058,56.03,14.136,56.356,12.669Z" transform="translate(-33.905 -3.273)" fill="#cecece" />
                                                    <path id="Path_2119" data-name="Path 2119" d="M61.249,26.709a4.559,4.559,0,0,1-.56-2.544,2.506,2.506,0,0,1,.5-1.06.425.425,0,0,0-.653-.543,3.337,3.337,0,0,0-.67,1.416,5.22,5.22,0,0,0,.615,3.074.425.425,0,0,0,.776-.348Z" transform="translate(-36.402 -14.294)" fill="#cecece" />
                                                </g>
                                            </g>
                                            <g id="Rectangle_1022" data-name="Rectangle 1022" transform="translate(12 11)" fill="none" stroke="#cecece" stroke-width="1">
                                                <rect width="46" height="49" rx="5" stroke="none" />
                                                <rect x="0.5" y="0.5" width="45" height="48" rx="4.5" fill="none" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <p>Drag&Drop Photos here</p>
                            </div>
                        </div>
                        <label for="tags-input" class="title-tooltip tooltip-relative">
                            <span>Add tags</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.486" height="15" viewBox="0 0 12.486 15">
                                <g id="noun_Info_2397918" transform="translate(-105.498 -41.5)">
                                    <g id="Group_1005" data-name="Group 1005" transform="translate(105.498 41.5)">
                                        <path id="Path_2100" data-name="Path 2100" d="M105.595,49.765c-.076-1.847-.142-3.744-.057-5.594l6.2-2.671,6.2,2.671c.085,1.85.019,3.747-.057,5.594-.125,3.021-3.645,5.523-6.146,6.735C109.24,55.288,105.719,52.787,105.595,49.765Zm6.974-1.34v3.769a.828.828,0,0,1-1.656,0V48.425A.828.828,0,0,1,112.569,48.425Zm-.828-3.441a.871.871,0,1,1-.871.871A.871.871,0,0,1,111.741,44.985ZM106.7,49.722c.115,2.793,4.019,5.008,5.037,5.54,1.018-.531,4.922-2.747,5.037-5.54.107-2.593.1-4.159.083-4.806l-5.12-2.2-5.12,2.2C106.607,45.563,106.6,47.129,106.7,49.722Z" transform="translate(-105.498 -41.5)" fill="#00a757" />
                                    </g>
                                </g>
                            </svg>
                            <div class="tooltip-container">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata </p>
                            </div>
                        </label>
                        <textarea id="tags-input" rows="4" placeholder="Write tags using coma (,) to separate them" style="resize: none"></textarea>
                        <button class="submit-button disabled" type="submit">Hold on, please</button>
                        <p class="terms-of-use">By clicking «Continue» I agree to Ecofarmer’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </form>
                </div>
            </div>
        </div>
       

@endsection
