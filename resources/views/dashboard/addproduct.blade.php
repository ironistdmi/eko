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
                @if ($errors->any())
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-danger" role="alert">
                                <ul>                         
                                  @foreach($errors->all() as $error)                         
                                        <li> {{{ $error }}}</li>                         
                                  @endforeach    
                                </ul>
                            </div>
                        </div>
                    </div>
                @endif
                <hr>
                <div class="form-block">
                    <form action="{{ route('product.add.submit') }}" id="productForm" method="POST" enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <label for="product-name-input">Product Name</label>
                        <input name="name" id="product-name-input" placeholder="Example: Fresh tomatoes" type="text" required>
                        <label for="short-description-input">Short Description</label>
                        <input name="short_desc" class="count-description login-password" id="short-description-input" placeholder="Example: Fresh tomatoes" type="text" required>
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
                        <textarea name="description" class="count-description" id="description-input" maxlength="250" rows="5" required></textarea>
                        <div class="button-container">
                            <span><span class="count-description-number">0</span> symbols</span>
                        </div>
                        <div class="form-group-container">
                            <div class="form-group-item">
                                <label for="subcategory-input">Select a subcategory</label>
                                <select name="category_sub_id" class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="subcategory-input">
                                    <option value="0">1</option>
                                    <option value="0">2</option>
                                    <option value="0">3</option>
                                    <option value="0">4</option>
                                </select>
                            </div>
                            <div class="form-group-item">
                                <label for="category-input">Select a category</label>
                                <select name="category_id" class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="category-input">
                                    @foreach($categories as $item)
                                    <option
                                        value="{{$item->id}}"
                                        @if ($loop->first)
                                        selected
                                        @endif
                                        >
                                        {{$item->name}}
                                    </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group-container">
                            <div class="form-group-item">
                                <label for="price-input">Price</label>
                                <input name="price" id="price-input" placeholder="Example: 1000.00" type="text" required>
                            </div>
                            <div class="form-group-container form-group-item">
                                <div class="form-group-item">
                                    <label for="unit-input">Unit</label>
                                    <select name="unit" class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="unit-input">
                                        <option value="Kg." selected>Kg.</option>
                                        <option value="Pc.">Pc.</option>
                                    </select>
                                </div>
                                <div class="form-group-item">
                                    <label for="currency-input">Currency</label>
                                    <select name="currency_id" class="bs-custom-select" data-dropup-auto="false" title="Select" data-size="5" id="currency-input">
                                        @foreach($currencies as $item)
                                        <option
                                            value="{{$item->id}}"
                                            @if ($loop->first)
                                            selected
                                            @endif
                                            >
                                            {{$item->iso_code}}
                                        </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
						  <label for="dropzone-input">
							{{ trans('app.product.add_photos') }}
							<i class="fa fa-question-circle" data-toggle="tooltip" data-placement="top" title="{{ trans('help.product_images') }}"></i>
						  </label>
							<div class="drag-n-drop-container">
								<div class="file-loading">
								  <input id="dropzone-input" name="images[]" type="file" accept="image/*" multiple>
								</div>	
							</div>
                        {{--<label for="drag-n-drop">Add some photos</label>
                        <div class="drag-n-drop-container" id="drag-n-drop">
                            <div class="drag-n-drop-slick"></div>
                            <div class="drag-n-drop-input">
                                <label for="drag-n-drop-file">or browse files</label>
                                <input name="images[]" id="drag-n-drop-file" type="file" multiple>
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
                        </div> --}}
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
                        <textarea name="tags" id="tags-input" rows="4" placeholder="Write tags using coma (,) to separate them" style="resize: none"></textarea>
                        <button class="submit-button" type="submit" >Hold on, please</button>
                        <p class="terms-of-use">By clicking «Continue» I agree to Ecofarmer’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </form>
                </div>
            </div>
        </div>

@endsection

@section('scripts')
<link href="/css/fileinput.css" rel="stylesheet">
<script src="/js/fileinput.js"></script>
{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.5/js/locales/LANG.js"></script> --}}

<!-- page script -->
<style>
.krajee-default.file-preview-frame .kv-file-content {
    width: 213px;
    height: 130px;
}
.krajee-default.file-preview-frame .file-thumbnail-footer {
    height: 25px;
}
.krajee-default.file-preview-frame, .krajee-default.file-preview-frame:not(.file-preview-error):hover {
	box-shadow:none;
}
.file-footer-buttons button svg {
	width:12px;
}
.file-footer-buttons .btn-default {
    background-color: #f4f4f4;
    color: #444;
    border-color: #ddd;
}
</style>
<script type="text/javascript">
	$( document ).ready(function () {
	    var formData = new FormData();

	    var footerTemplate = '<div class="file-thumbnail-footer">\n' +
	            '    {actions}\n' +
	            '</div>';

	    var actionsTemplate = '<div class="file-actions">\n' +
	            '    <div class="file-footer-buttons">\n' +
	            '       {download} {zoom} {other} {delete}' +
	            '    </div>\n' +
	            '    {drag}\n' +
	            '    <div class="clearfix"></div>\n' +
	            '</div>';

	    var deleteTemplate = '<button type="button" class="kv-file-remove btn btn-kv btn-default btn-flat btn-xs" data-toggle="tooltip" data-placement="top" title="{{ trans('app.icon.remove') }}" {dataUrl}{dataKey}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></button>\n';

	    var downloadTemplate = '<a class="kv-file-download btn btn-default btn-flat btn-xs" data-toggle="tooltip" data-placement="top" title="{{ trans('app.icon.download') }}" href="{downloadUrl}" download="" target="_blank"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg></a>\n';

	    var zoomTemplate = '<button type="button" class="kv-file-zoom btn btn-default btn-flat btn-xs"  data-toggle="tooltip" data-placement="top" title="{{ trans('app.icon.preview') }}"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search-plus" class="svg-inline--fa fa-search-plus fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"></path></svg></button>';

	    var dragTemplate = '<span class="file-drag-handle {dragClass}" data-toggle="tooltip" data-placement="top" title="{{ trans('app.icon.move') }}"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt" class="svg-inline--fa fa-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"></path></svg></span>';

	    var initialPreview = [<?=isset($preview) ? $preview['urls'] : '';?>];

	    var initialPreviewConfig = [<?=isset($preview) ? $preview['configs'] : '';?>];

	    $("#dropzone-input").fileinput({
	        uploadUrl: "{{ route('image.upload') }}",
	        uploadExtraData: function () {
	            var extra = {};
	            extra['model_id'] = formData.get('model_id');
	            extra['model_name'] = formData.get('model_name');
	            return extra;
	        },
	        uploadAsync: false,
	        showUpload: false,
	        dropZoneEnabled: true,
	        browseOnZoneClick: true,
	        dropZoneTitle: '<div class="drag-n-drop-paceholder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 49" width="46" height="49"><g id="noun_Photo_2139977" transform="translate(-12 -11)"><g id="Group_1008" data-name="Group 1008"><g id="Group_1007" transform="translate(16.148 17.552)" data-name="Group 1007"><g id="noun_vegetables_1422990"><path id="Path_2106" fill="#cecece" transform="translate(-20.292 -5.656)" d="M 33.427 13.5 a 2.858 2.858 0 0 0 -0.874 3.817 l 5.224 9.007 a 0.967 0.967 0 0 0 1.1 0.445 h 0 a 0.967 0.967 0 0 0 0.7 -0.963 L 39.224 15.37 a 2.858 2.858 0 0 0 -2.888 -2.761 a 4.444 4.444 0 0 0 0.233 -1.739 a 5.629 5.629 0 0 0 -1.832 -3.359 a 0.424 0.424 0 0 0 -0.7 0.382 s 0.2 1.438 0.36 3.176 c 0 0.144 0.025 0.3 0.038 0.424 l -0.2 -0.394 c -0.785 -1.556 -1.37 -2.871 -1.374 -2.884 a 0.424 0.424 0 0 0 -0.793 0.047 a 5.666 5.666 0 0 0 0.225 3.817 A 4.461 4.461 0 0 0 33.427 13.5 Z m 4.122 0.356 a 2 2 0 0 1 0.848 1.561 l 0.03 0.916 l -1.518 0.424 a 0.424 0.424 0 1 0 0.233 0.814 l 1.31 -0.377 l 0.3 8.642 a 0.119 0.119 0 0 1 -0.221 0.064 l -2.12 -3.7 l 1.107 -0.318 a 0.424 0.424 0 1 0 -0.233 -0.814 l -1.221 0.352 a 0.424 0.424 0 0 0 -0.081 0.042 l -0.92 -1.5 l 0.9 -0.259 a 0.435 0.435 0 1 0 -0.242 -0.835 l -1.107 0.318 L 33.52 17.291 l 0.8 -0.229 a 0.424 0.424 0 1 0 -0.233 -0.814 l -0.967 0.276 a 2.01 2.01 0 0 1 1.349 -2.591 L 35.8 13.55 a 2.027 2.027 0 0 1 0.56 -0.081 a 2 2 0 0 1 1.187 0.386 Z m -1.828 -2.9 a 3.846 3.846 0 0 1 -0.331 1.84 h 0 c -0.038 -0.615 -0.089 -1.221 -0.14 -1.8 c -0.059 -0.666 -0.127 -1.272 -0.187 -1.8 a 3.91 3.91 0 0 1 0.657 1.764 Z m -2.256 0.53 c 0.263 0.522 0.543 1.06 0.848 1.6 h 0 a 3.846 3.846 0 0 1 -1.272 -1.387 a 3.91 3.91 0 0 1 -0.369 -1.84 C 32.893 10.336 33.177 10.9 33.465 11.477 Z" data-name="Path 2106" /><path id="Path_2107" fill="#cecece" transform="translate(-11.062 -5.73)" d="M 19.426 16.691 A 23.748 23.748 0 0 0 21.207 19.7 l 0.288 0.424 a 0.424 0.424 0 0 0 0.7 -0.483 l -0.288 -0.424 a 22.932 22.932 0 0 1 -1.59 -2.646 c 0.356 -0.539 1.785 -2.879 1.166 -5.131 h 0 c -0.691 -2.51 -3.634 -3.817 -3.757 -3.872 a 0.424 0.424 0 0 0 -0.513 0.165 c -0.081 0.11 -1.938 2.739 -1.247 5.25 C 16.534 15.041 18.645 16.292 19.426 16.691 Z M 17.7 8.511 a 5.938 5.938 0 0 1 2.968 3.159 h 0 a 5.624 5.624 0 0 1 -0.793 3.995 a 22.9 22.9 0 0 1 -1.374 -3.893 l -0.123 -0.488 a 0.424 0.424 0 0 0 -0.823 0.208 l 0.114 0.483 a 23.747 23.747 0 0 0 1.12 3.325 a 5.062 5.062 0 0 1 -2.014 -2.57 A 5.876 5.876 0 0 1 17.7 8.511 Z" data-name="Path 2107" /><path id="Path_2108" fill="#cecece" transform="translate(-7.714 -28.111)" d="M 12.931 46.871 a 1.209 1.209 0 0 1 -2.12 -0.208 a 0.424 0.424 0 0 0 -0.785 0.322 a 2.057 2.057 0 0 0 3.613 0.352 a 0.425 0.425 0 1 0 -0.708 -0.471 Z" data-name="Path 2108" /><path id="Path_2109" fill="#cecece" transform="translate(-20.895 -28.797)" d="M 32.88 49.218 a 1.628 1.628 0 1 0 1.628 -1.628 A 1.628 1.628 0 0 0 32.88 49.218 Z m 2.409 0 a 0.78 0.78 0 1 1 -0.78 -0.78 A 0.78 0.78 0 0 1 35.289 49.218 Z" data-name="Path 2109" /><path id="Path_2110" fill="#cecece" transform="translate(-47.094 -11.807)" d="M 80 21.347 a 1.628 1.628 0 1 0 -1.628 -1.628 A 1.628 1.628 0 0 0 80 21.347 Z m 0 -2.409 a 0.773 0.773 0 1 1 -0.553 0.226 A 0.78 0.78 0 0 1 80 18.938 Z" data-name="Path 2110" /><path id="Path_2111" fill="#cecece" transform="translate(-30.818 -7.977)" d="M 51.738 14.7 a 1.628 1.628 0 1 0 -1.628 -1.628 A 1.628 1.628 0 0 0 51.738 14.7 Z m 0 -2.409 a 0.78 0.78 0 1 1 -0.78 0.78 A 0.78 0.78 0 0 1 51.738 12.288 Z" data-name="Path 2111" /><path id="Path_2112" fill="#cecece" transform="translate(-6.156 -15.614)" d="M 8.918 27.957 A 1.628 1.628 0 1 0 7.29 26.328 A 1.628 1.628 0 0 0 8.918 27.957 Z m 0 -2.409 a 0.78 0.78 0 1 1 -0.78 0.78 A 0.78 0.78 0 0 1 8.918 25.548 Z" data-name="Path 2112" /><path id="Path_2113" fill="#cecece" transform="translate(-15.018 -40.93)" d="M 23.471 68.87 a 0.426 0.426 0 0 0 -0.738 0.424 q 0.2 0.352 0.424 0.687 a 0.425 0.425 0 0 0 0.708 -0.471 Q 23.662 69.2 23.471 68.87 Z" data-name="Path 2113" /><path id="Path_2114" fill="#cecece" transform="translate(-16.912 -43.555)" d="M 30.322 76.092 c -0.276 -0.14 -0.551 -0.293 -0.818 -0.45 s -0.632 -0.4 -0.929 -0.611 a 11.845 11.845 0 0 1 -1.438 -1.226 l -0.161 -0.157 a 2.992 2.992 0 0 1 -0.263 -0.284 a 0.424 0.424 0 0 0 -0.649 0.547 a 3.681 3.681 0 0 0 0.322 0.348 l 0.148 0.148 a 12.692 12.692 0 0 0 1.544 1.315 c 0.318 0.229 0.649 0.449 0.992 0.653 s 0.572 0.331 0.848 0.479 A 0.424 0.424 0 1 0 30.3 76.1 Z" data-name="Path 2114" /><path id="Path_2115" fill="#cecece" transform="translate(-4.617 -14.969)" d="M 42.292 23.852 a 1.158 1.158 0 0 0 -1.76 0.331 L 39.3 26.422 a 3.036 3.036 0 0 0 -1.671 -0.144 a 3.248 3.248 0 0 0 -1.62 0.929 l -1.823 1.862 A 27.033 27.033 0 0 1 27.7 33.936 l -1.989 1.073 a 6.912 6.912 0 0 0 -3.036 3.168 c -0.064 0.14 -0.114 0.288 -0.17 0.424 h -6.95 a 0.424 0.424 0 0 0 0.212 -0.5 L 14.38 33.614 a 2.057 2.057 0 1 0 -1.332 -3.85 c -0.034 0 -0.059 0.042 -0.093 0.059 a 2.651 2.651 0 0 0 -0.119 -0.28 a 2.616 2.616 0 0 0 -4.953 1.03 a 2.621 2.621 0 0 0 -2.812 4.016 A 2.625 2.625 0 0 0 9.736 37 l 1.2 1.6 H 9.02 a 0.424 0.424 0 0 0 -0.424 0.424 c 0 7.739 6.1 13.146 14.842 13.146 S 38.28 46.764 38.28 39.025 a 0.424 0.424 0 0 0 -0.424 -0.424 h -0.475 l 3.893 -7.654 a 3.176 3.176 0 0 0 -0.14 -3.041 l 1.429 -2.612 a 1.162 1.162 0 0 0 -0.271 -1.442 Z M 9.923 35.861 h 0 a 0.418 0.418 0 0 0 -0.772 0.17 a 1.777 1.777 0 1 1 -3.223 -1.247 v -0.03 a 0.585 0.585 0 0 0 0.055 -0.157 a 0.424 0.424 0 0 0 -0.089 -0.31 h 0 A 1.777 1.777 0 0 1 8.1 31.574 a 0.424 0.424 0 0 0 0.225 0.047 h 0.089 a 0.424 0.424 0 0 0 0.322 -0.5 a 1.777 1.777 0 1 1 3.507 -0.5 a 0.424 0.424 0 0 0 0.161 0.3 h 0 a 0.425 0.425 0 0 0 0.068 0.034 l 0.055 0.03 A 0.424 0.424 0 0 0 13 30.853 a 1.222 1.222 0 1 1 0.865 1.934 a 0.416 0.416 0 0 0 -0.42 0.606 h 0 l 1.429 4.584 l -0.814 0.424 l -1.527 -3.028 a 0.425 0.425 0 0 0 -0.759 0.382 L 13.188 38.6 h -1.2 Z M 23.438 51.322 h 0 c -7.188 0 -12.349 -3.643 -13.663 -9.329 H 37.1 C 35.786 47.68 30.626 51.322 23.438 51.322 Z M 37.262 41.145 H 9.613 a 13.277 13.277 0 0 1 -0.17 -1.7 H 37.432 a 13.282 13.282 0 0 1 -0.17 1.7 Z M 23.438 38.6 a 0.093 0.093 0 0 1 0.03 -0.081 a 6.06 6.06 0 0 1 2.663 -2.752 L 28.1 34.7 a 27.89 27.89 0 0 0 6.692 -5.034 l 0.611 -0.623 l 0.721 0.068 a 1.064 1.064 0 0 1 0.848 0.645 a 1.908 1.908 0 0 0 1.365 1.132 h 0.068 a 1.064 1.064 0 0 1 0.721 0.6 l 0.424 0.924 h 0 L 36.431 38.6 Z M 41.821 24.887 l -1.548 2.824 a 0.4 0.4 0 0 0 0 0.059 a 0.424 0.424 0 0 0 -0.025 0.085 a 0.984 0.984 0 0 0 0 0.161 a 0.424 0.424 0 0 0 0.034 0.085 a 0.4 0.4 0 0 0 0.025 0.055 a 2.366 2.366 0 0 1 0.221 2.413 l -0.45 0.886 l -0.148 -0.322 a 1.917 1.917 0 0 0 -1.336 -1.069 h -0.068 a 1.06 1.06 0 0 1 -0.759 -0.628 a 1.921 1.921 0 0 0 -1.531 -1.158 H 36.16 l 0.445 -0.458 a 2.4 2.4 0 0 1 1.192 -0.7 a 2.328 2.328 0 0 1 1.505 0.229 a 0.424 0.424 0 0 0 0.068 0 a 0.424 0.424 0 0 0 0.081 0 a 0.424 0.424 0 0 0 0.081 0 a 0.25 0.25 0 0 0 0.148 -0.051 a 0.748 0.748 0 0 0 0.17 -0.161 L 41.257 24.6 a 0.31 0.31 0 0 1 0.471 -0.089 A 0.314 0.314 0 0 1 41.821 24.887 Z" data-name="Path 2115" /><path id="Path_2116" fill="#cecece" transform="translate(-42.344 -25.019)" d="M 72.352 41.149 c -0.649 0.572 -1.336 1.115 -2.04 1.624 a 0.424 0.424 0 1 0 0.5 0.687 c 0.725 -0.522 1.433 -1.086 2.12 -1.675 a 0.424 0.424 0 1 0 -0.56 -0.636 Z" data-name="Path 2116" /><path id="Path_2117" fill="#cecece" transform="translate(-32.906 -29.839)" d="M 57.91 49.447 L 55.917 50.5 a 7.239 7.239 0 0 0 -2.069 1.662 a 0.424 0.424 0 1 0 0.64 0.556 a 6.4 6.4 0 0 1 1.823 -1.45 L 58.3 50.2 a 0.424 0.424 0 0 0 -0.4 -0.746 Z" data-name="Path 2117" /><path id="Path_2118" fill="#cecece" transform="translate(-33.905 -3.273)" d="M 58.239 19.2 a 0.424 0.424 0 0 0 0.547 0.123 c 0.492 -0.267 4.8 -2.672 5.309 -4.923 a 3.172 3.172 0 0 0 -0.708 -2.943 a 4.326 4.326 0 0 0 -1.353 -0.967 a 3.94 3.94 0 0 0 2.048 -1.332 h 0 a 4.689 4.689 0 0 0 0.56 -3.265 a 0.424 0.424 0 0 0 -0.466 -0.339 a 5.055 5.055 0 0 0 -0.924 0.2 a 6.42 6.42 0 0 0 -0.967 -2.307 a 0.424 0.424 0 0 0 -0.551 -0.123 a 5.5 5.5 0 0 0 -2.544 3.147 a 5.064 5.064 0 0 0 0.632 3.392 a 4.792 4.792 0 0 0 -2.392 0.25 a 3.172 3.172 0 0 0 -1.9 2.37 C 55.025 14.734 57.891 18.754 58.239 19.2 Z M 63.374 8.67 h 0 a 3.363 3.363 0 0 1 -1.938 1.107 a 3.346 3.346 0 0 1 0.488 -2.18 A 3.367 3.367 0 0 1 63.862 6.49 a 3.346 3.346 0 0 1 -0.488 2.18 Z M 60.02 6.66 a 4.467 4.467 0 0 1 1.794 -2.37 a 5.369 5.369 0 0 1 0.636 1.8 a 3.431 3.431 0 0 0 -1.213 1 a 3.961 3.961 0 0 0 -0.666 2.392 A 4.362 4.362 0 0 1 60.02 6.66 Z m -3.664 6.009 a 2.328 2.328 0 0 1 1.4 -1.76 a 3.477 3.477 0 0 1 1.332 -0.237 a 5.984 5.984 0 0 1 1.306 0.157 a 4.448 4.448 0 0 1 2.345 1.2 a 2.328 2.328 0 0 1 0.509 2.188 C 62.9 15.684 60.1 17.575 58.684 18.4 C 57.764 17.058 56.03 14.136 56.356 12.669 Z" data-name="Path 2118" /><path id="Path_2119" fill="#cecece" transform="translate(-36.402 -14.294)" d="M 61.249 26.709 a 4.559 4.559 0 0 1 -0.56 -2.544 a 2.506 2.506 0 0 1 0.5 -1.06 a 0.425 0.425 0 0 0 -0.653 -0.543 a 3.337 3.337 0 0 0 -0.67 1.416 a 5.22 5.22 0 0 0 0.615 3.074 a 0.425 0.425 0 0 0 0.776 -0.348 Z" data-name="Path 2119" /></g></g><g id="Rectangle_1022" fill="none" stroke="#cecece" stroke-width="1" transform="translate(12 11)" data-name="Rectangle 1022"><rect stroke="none" width="46" height="49" rx="5" /><rect fill="none" x="0.5" y="0.5" width="45" height="48" rx="4.5" /></g></g></g></svg><p>{{ trans("app.product.drag_n_drop_here") }}</p></div>',
	        showClose: false,
	        showRemove: false,
	        showCaption: false,
	        validateInitialCount: true,
	        maxFilePreviewSize: 25600,
	        maxFileCount: 20,
	        allowedFileExtensions: ['jpg', 'jpeg', 'gif', 'png'],
	        dragSettings: {
	    		animation: 300,
				onUpdate: function (evt) {
					console.log(evt);
				},
	        },
	        initialPreview: initialPreview,
	        overwriteInitial: false,
	        initialPreviewAsData: true,
	        initialPreviewFileType: 'image',
	        initialPreviewDownloadUrl: "{{ url('download/{key}') }}",
	        initialPreviewConfig: initialPreviewConfig,
	        layoutTemplates: { footer: footerTemplate, actions: actionsTemplate, actionDelete: deleteTemplate, actionDownload: downloadTemplate, actionZoom: zoomTemplate, actionDrag: dragTemplate },
	    }).on('filebeforedelete', function() {
	      return new Promise(function(resolve, reject) {
	            $.confirm({
	                title: "{{ trans('app.confirmation') }}",
	                content: "{{ trans('app.are_you_sure') }}",
	                type: 'red',
	                buttons: {
			            'confirm': {
			                text: '{{ trans('app.proceed') }}',
			                keys: ['enter'],
			                btnClass: 'btn-red',
			                action: function () {
	                            resolve();
			                }
			            },
			            'cancel': {
			                text: '{{ trans('app.cancel') }}',
			                action: function () {
		                    	notie.alert(2, "{{ trans('messages.canceled') }}", 3);
			                }
			            },
	                }
	            });
	        });
	    }).on('filedeleted', function() {
	        setTimeout(function() {
	          notie.alert(1, "{{ trans('messages.file_deleted') }}", 3);
	        }, 900);
	    }).on('filesorted', function(event, params) {
	    	var sortUrl = "{{ route('image.sort') }}";
	    	var max = Math.max(params.oldIndex, params.newIndex);
	    	var min = Math.min(params.oldIndex, params.newIndex);
	    	var order = {};
	    	var stack = params.stack;
			for(k in stack){
				if (k >= min && k <= max)
					order[stack[k].key] = k;
			};

		   	$.post(sortUrl, order, function(theResponse, status){
				notie.alert(1, "{{ trans('responses.reordered') }}", 2);
		    });
		});
	    $('div.btn.btn-primary.btn-file').hide();

	    $('#productForm').on('submit', function(event) {
	      	$(this).find(":submit").prop("disabled", true);

			var action = $(this).attr('action');
			var data = $("#productForm").serializeArray();

			$.each(data, function(key,input){
				formData.append(input.name, input.value);
			});

			if($("#uploadBtn").val()){
				var file = $("#uploadBtn")[0].files[0];
				formData.append("image", file);
			}

			$.ajax({
				url: action,
				type: "POST",
				datatype: "json",
				data: formData,
				processData: false,  // tell jQuery not to process the data
				contentType: false,   // tell jQuery not to set contentType
			})
			.done(function(result){
				formData.append('model_id', result.id);
				formData.append('model_name', result.model);

				$('#dropzone-input').fileinput('upload');

				window.location.href = result.redirect;
			})
			.fail(function(xhr){
		      	$("#productForm").find(":submit").removeAttr("disabled");
				var err = '';
				if (401 === xhr.status){
				  window.location = "{{ route('login') }}";
				}
				else if( 422 === xhr.status ) {
				  notie.alert(3, "{{ trans('responses.form_validation_failed') }}", 3);
				  var response = xhr.responseJSON;

				  $.each(response.errors,function(key,input){
				    err += input + '<br/>';
				  });
				}
				else{
				  err += "{{ trans('responses.error') }}";
				}

				var msg = '<div class="alert alert-danger alert-dismissible">' +
				            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
				            '<h4><i class="icon fa fa-warning"></i>{{ trans('app.error') }}</h4>' +
				            '<p id="global-alert-msg">' + err + '</p>' +
				          '</div>';
				$("section.content").prepend(msg);
			});

			return false;
	    });
	});
</script>
@endsection
