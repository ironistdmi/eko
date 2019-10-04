@extends('layouts.master')

@section('content')

    <div class="main-page">
        <div class="first-screen">
            <div class="search-container">
                <h3>Find your product</h3>
                <form action="">
                    <div class="search-area">
                        <div class="input-container">
                            <div class="loop-icon">
                                <svg class="field-icon search-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 12.992 13">
                                    <g id="noun_Search_875352" transform="translate(-10.4 -10.3)">
                                        <path id="Path_938" data-name="Path 938" d="M23.176,22.07l-2.332-2.316a5.854,5.854,0,1,0-4.6,2.236,5.777,5.777,0,0,0,3.593-1.246l2.316,2.348a.7.7,0,0,0,.511.208.769.769,0,0,0,.511-.208A.713.713,0,0,0,23.176,22.07Zm-2.523-5.925a4.417,4.417,0,1,1-1.294-3.114A4.373,4.373,0,0,1,20.653,16.145Z" transform="translate(0)" fill="#cecece" />
                                    </g>
                                </svg>
                            </div>
                            <input type="text" placeholder="What are you looking for?">
                        </div>
                        <span class="filter-button"><svg xmlns="http://www.w3.org/2000/svg" width="12.135" height="10.974" viewBox="0 0 12.135 10.974">
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
                    </div>
                    <div class="filter-container">
                        <div class="filter-title">
                            <h4>Customize your search</h4>
                            <a href="#">Reset</a>
                        </div>
                        <div class="form-group-container">
                            <div class="form-group-item">
                                <label for="street-input">Price</label>
                                <input id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                            </div>
                            <div class="form-group-container form-group-item">
                                <div class="form-group-item">
                                    <label for="street-input">Price</label>
                                    <input id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                                </div>
                                <div class="form-group-container form-group-item">
                                    <div class="form-group-item">
                                        <label for="street-input">Unit</label>
                                        <input id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                                    </div>
                                    <div class="form-group-item">
                                        <label for="building-input">Currency</label>
                                        <input id="building-input" placeholder="Example: 34/A" type="text">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group-container">
                            <div class="form-group-container form-group-item">
                                <div class="form-group-item">
                                    <label for="street-input">Unit</label>
                                    <input id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                                </div>
                                <div class="form-group-item">
                                    <label for="building-input">Currency</label>
                                    <input id="building-input" placeholder="Example: 34/A" type="text">
                                </div>
                            </div>
                            <div class="form-group-item">
                                <label for="street-input">Price</label>
                                <input id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                            </div>
                        </div>
                        <button type="submit">Show results</button>
                    </div>
                </form>
            </div>
            <div class="text-container">
                <h2>One place. Millions of eco-products. </h2>
            </div>
        </div>
        <div class="product-near-container">
            <div class="product-near-wrapper">
                <h3>Products near you:</h3>
                <div class="product-near-scroll">
                    <div class="scroll-container">
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="38.942" viewBox="0 0 30 38.942">
                                    <g id="grapes" transform="translate(-58.787 -0.005)">
                                        <g id="Group_1159" data-name="Group 1159" transform="translate(58.788 4.054)">
                                            <path id="Path_2258" data-name="Path 2258" d="M68.905,53.288c-3.521.37-10.2,5.137-10.117,5.941s7.611,4.08,11.131,3.71,6.148-2.83,5.867-5.5S72.425,52.918,68.905,53.288Z" transform="translate(-58.787 -53.241)" fill="#8cc153" />
                                        </g>
                                        <path id="Path_2259" data-name="Path 2259" d="M266.082.816A.812.812,0,0,0,264.951.07a4.987,4.987,0,0,0-1.982,1.866,13.167,13.167,0,0,0-1.754,7.323l1.622,0a12.409,12.409,0,0,1,1.4-6.3,3.749,3.749,0,0,1,1.358-1.4l-.007,0A.811.811,0,0,0,266.082.816Z" transform="translate(-187.03)" fill="#a0d468" />
                                        <g id="Group_1160" data-name="Group 1160" transform="translate(70.939 30.834)">
                                            <path id="Path_2260" data-name="Path 2260" d="M226.658,409.382a4.057,4.057,0,1,0-4.056,4.057A4.057,4.057,0,0,0,226.658,409.382Z" transform="translate(-218.545 -405.326)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2261" data-name="Path 2261" d="M241.511,427.464a.811.811,0,1,1-.812-.812A.812.812,0,0,1,241.511,427.464Z" transform="translate(-167.327 -394.196)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1161" data-name="Group 1161" transform="translate(74.184 25.154)">
                                            <path id="Path_2262" data-name="Path 2262" d="M269.329,334.711a4.057,4.057,0,1,0-4.057,4.056A4.057,4.057,0,0,0,269.329,334.711Z" transform="translate(-261.216 -330.654)" fill="#9782d8" />
                                        </g>
                                        <path id="Path_2263" data-name="Path 2263" d="M284.166,352.808a.812.812,0,1,1-.812-.811A.811.811,0,0,1,284.166,352.808Z" transform="translate(-206.736 -325.22)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1162" data-name="Group 1162" transform="translate(67.694 25.154)">
                                            <path id="Path_2264" data-name="Path 2264" d="M184,334.711a4.056,4.056,0,1,0-4.056,4.056A4.056,4.056,0,0,0,184,334.711Z" transform="translate(-175.889 -330.654)" fill="#9782d8" />
                                        </g>
                                        <path id="Path_2265" data-name="Path 2265" d="M198.84,352.808a.811.811,0,1,1-.811-.811A.81.81,0,0,1,198.84,352.808Z" transform="translate(-127.901 -325.22)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1163" data-name="Group 1163" transform="translate(61.203 13.797)">
                                            <path id="Path_2266" data-name="Path 2266" d="M98.661,185.387a4.057,4.057,0,1,0-4.056,4.057A4.057,4.057,0,0,0,98.661,185.387Z" transform="translate(-90.548 -181.33)" fill="#9782d8" />
                                        </g>
                                        <path id="Path_2267" data-name="Path 2267" d="M113.513,203.476a.811.811,0,1,1-.812-.811A.811.811,0,0,1,113.513,203.476Z" transform="translate(-49.064 -187.246)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1164" data-name="Group 1164" transform="translate(80.674 13.797)">
                                            <path id="Path_2268" data-name="Path 2268" d="M354.655,185.387a4.057,4.057,0,1,0-4.056,4.057A4.057,4.057,0,0,0,354.655,185.387Z" transform="translate(-346.542 -181.33)" fill="#9782d8" />
                                        </g>
                                        <path id="Path_2269" data-name="Path 2269" d="M369.507,203.476a.811.811,0,1,1-.812-.811A.811.811,0,0,1,369.507,203.476Z" transform="translate(-285.587 -187.246)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1165" data-name="Group 1165" transform="translate(77.429 19.475)">
                                            <path id="Path_2270" data-name="Path 2270" d="M311.983,260.049a4.057,4.057,0,1,0-4.056,4.056A4.056,4.056,0,0,0,311.983,260.049Z" transform="translate(-303.87 -255.992)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2271" data-name="Path 2271" d="M326.836,278.14a.811.811,0,1,1-.812-.812A.811.811,0,0,1,326.836,278.14Z" transform="translate(-246.162 -256.23)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1166" data-name="Group 1166" transform="translate(64.449 19.475)">
                                            <path id="Path_2272" data-name="Path 2272" d="M141.331,260.049a4.057,4.057,0,1,0-4.057,4.056A4.058,4.058,0,0,0,141.331,260.049Z" transform="translate(-133.218 -255.992)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2273" data-name="Path 2273" d="M156.17,278.14a.812.812,0,1,1-.812-.812A.812.812,0,0,1,156.17,278.14Z" transform="translate(-88.476 -256.23)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1167" data-name="Group 1167" transform="translate(70.939 19.475)">
                                            <path id="Path_2274" data-name="Path 2274" d="M226.658,260.049A4.057,4.057,0,1,0,222.6,264.1,4.057,4.057,0,0,0,226.658,260.049Z" transform="translate(-218.545 -255.992)" fill="#9782d8" />
                                        </g>
                                        <path id="Path_2275" data-name="Path 2275" d="M241.511,278.14a.811.811,0,1,1-.812-.812A.812.812,0,0,1,241.511,278.14Z" transform="translate(-167.327 -256.23)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1168" data-name="Group 1168" transform="translate(67.694 13.797)">
                                            <path id="Path_2276" data-name="Path 2276" d="M184,185.387a4.056,4.056,0,1,0-4.056,4.057A4.056,4.056,0,0,0,184,185.387Z" transform="translate(-175.889 -181.33)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2277" data-name="Path 2277" d="M198.84,203.476a.811.811,0,1,1-.811-.811A.811.811,0,0,1,198.84,203.476Z" transform="translate(-127.901 -187.246)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1169" data-name="Group 1169" transform="translate(74.184 13.797)">
                                            <path id="Path_2278" data-name="Path 2278" d="M269.329,185.387a4.057,4.057,0,1,0-4.057,4.057A4.058,4.058,0,0,0,269.329,185.387Z" transform="translate(-261.216 -181.33)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2279" data-name="Path 2279" d="M284.166,203.476a.812.812,0,1,1-.812-.811A.811.811,0,0,1,284.166,203.476Z" transform="translate(-206.736 -187.246)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1170" data-name="Group 1170" transform="translate(64.449 8.118)">
                                            <path id="Path_2280" data-name="Path 2280" d="M141.331,110.724a4.056,4.056,0,1,0-4.056,4.057A4.056,4.056,0,0,0,141.331,110.724Z" transform="translate(-133.219 -106.668)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2281" data-name="Path 2281" d="M156.17,128.808a.812.812,0,1,1-.812-.812A.811.811,0,0,1,156.17,128.808Z" transform="translate(-88.476 -118.256)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1171" data-name="Group 1171" transform="translate(77.429 8.118)">
                                            <path id="Path_2282" data-name="Path 2282" d="M311.983,110.724a4.057,4.057,0,1,0-4.056,4.057A4.056,4.056,0,0,0,311.983,110.724Z" transform="translate(-303.87 -106.668)" fill="#ac92eb" />
                                        </g>
                                        <path id="Path_2283" data-name="Path 2283" d="M326.836,128.808a.811.811,0,1,1-.812-.812A.811.811,0,0,1,326.836,128.808Z" transform="translate(-246.162 -118.256)" fill="#fff" opacity="0.2" />
                                        <g id="Group_1172" data-name="Group 1172" transform="translate(70.939 8.118)">
                                            <path id="Path_2284" data-name="Path 2284" d="M226.658,110.724a4.057,4.057,0,1,0-4.057,4.057A4.056,4.056,0,0,0,226.658,110.724Z" transform="translate(-218.545 -106.668)" fill="#9782d8" />
                                        </g>
                                        <path id="Path_2285" data-name="Path 2285" d="M241.5,128.808a.812.812,0,1,1-.812-.812A.811.811,0,0,1,241.5,128.808Z" transform="translate(-167.312 -118.256)" fill="#fff" opacity="0.2" />
                                    </g>
                                </svg>
                            </div>
                            <span>Grapes</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35.066" viewBox="0 0 40 35.066">
                                    <g id="eggs" transform="translate(0 -31.579)">
                                        <g id="Group_1146" data-name="Group 1146" transform="translate(20.001 36.989)">
                                            <g id="Group_1145" data-name="Group 1145" transform="translate(0 0)">
                                                <path id="Path_2248" data-name="Path 2248" d="M270.178,102.706c4.059,2.388,5.647,7.217,3.547,10.787s-7.093,4.529-11.152,2.141-8.1-8.658-5.995-12.228S266.12,100.319,270.178,102.706Z" transform="translate(-256.003 -100.821)" fill="#ccd1d9" />
                                            </g>
                                        </g>
                                        <g id="Group_1147" data-name="Group 1147" transform="translate(25.968 36.989)" opacity="0.2">
                                            <path id="Path_2249" data-name="Path 2249" d="M340.6,102.711a15.382,15.382,0,0,0-8.207-1.86,15.152,15.152,0,0,1,6.54,1.86c4.059,2.388,5.647,7.217,3.546,10.787a7.168,7.168,0,0,1-5.6,3.413,7.437,7.437,0,0,0,7.267-3.413C346.242,109.928,344.654,105.1,340.6,102.711Z" transform="translate(-332.389 -100.826)" fill="#fff" />
                                        </g>
                                        <g id="Group_1149" data-name="Group 1149" transform="translate(14.233 31.58)">
                                            <g id="Group_1148" data-name="Group 1148" transform="translate(0 0)">
                                                <path id="Path_2250" data-name="Path 2250" d="M196.637,45.476c-2.04,4.244-6.719,6.231-10.453,4.437s-5.106-6.688-3.068-10.932,7.95-8.793,11.683-7S198.675,41.231,196.637,45.476Z" transform="translate(-182.173 -31.58)" fill="#ffa77b" />
                                            </g>
                                        </g>
                                        <g id="Group_1150" data-name="Group 1150" transform="translate(20.335 31.58)" opacity="0.2">
                                            <path id="Path_2251" data-name="Path 2251" d="M266.806,31.986a4.583,4.583,0,0,0-2.717-.333,4,4,0,0,1,1.051.333c3.733,1.794,3.876,9.25,1.837,13.495a8.767,8.767,0,0,1-6.7,5.047,8.462,8.462,0,0,0,8.362-5.047C270.682,41.236,270.539,33.78,266.806,31.986Z" transform="translate(-260.282 -31.585)" fill="#fff" />
                                        </g>
                                        <g id="Group_1152" data-name="Group 1152" transform="translate(1.671 34.763)">
                                            <g id="Group_1151" data-name="Group 1151" transform="translate(0 0)">
                                                <path id="Path_2252" data-name="Path 2252" d="M35.881,86.183c-1.986,4.269-6.64,6.314-10.4,4.566s-5.189-6.624-3.2-10.893,7.84-8.89,11.6-7.143S37.868,81.914,35.881,86.183Z" transform="translate(-21.388 -72.334)" fill="#e6e9ed" />
                                            </g>
                                        </g>
                                        <g id="Group_1153" data-name="Group 1153" transform="translate(7.781 34.764)" opacity="0.3">
                                            <path id="Path_2253" data-name="Path 2253" d="M105.976,72.718a4.557,4.557,0,0,0-2.659-.309,4,4,0,0,1,.992.309c3.755,1.747,3.99,9.2,2,13.47A8.752,8.752,0,0,1,99.6,91.33a8.443,8.443,0,0,0,8.382-5.141C109.967,81.919,109.731,74.466,105.976,72.718Z" transform="translate(-99.597 -72.34)" fill="#fff" />
                                        </g>
                                        <g id="Group_1154" data-name="Group 1154" transform="translate(0 43.314)">
                                            <path id="Path_2254" data-name="Path 2254" d="M28.767,203.451c11.627-5.076,11.231-20,11.231-20a1.667,1.667,0,0,0-1.666-1.667H1.67A1.668,1.668,0,0,0,0,183.453s-.4,14.922,11.233,20Z" transform="translate(0 -181.786)" fill="#fc6e51" />
                                        </g>
                                        <g id="Group_1155" data-name="Group 1155" transform="translate(0 43.314)" opacity="0.1">
                                            <path id="Path_2255" data-name="Path 2255" d="M1.67,183.453a1.667,1.667,0,0,1,1.666-1.667H1.67A1.668,1.668,0,0,0,0,183.453s-.4,14.922,11.233,20H12.9C1.273,198.375,1.67,183.453,1.67,183.453Z" transform="translate(0 -181.786)" />
                                        </g>
                                        <g id="Group_1157" data-name="Group 1157" transform="translate(24.964 46.752)">
                                            <g id="Group_1156" data-name="Group 1156">
                                                <path id="Path_2256" data-name="Path 2256" d="M334.529,237.153c0,4.708-3.358,8.525-7.5,8.525s-7.5-3.817-7.5-8.525,3.357-11.368,7.5-11.368S334.529,232.444,334.529,237.153Z" transform="translate(-319.53 -225.785)" fill="#ffa77b" />
                                            </g>
                                        </g>
                                        <g id="Group_1158" data-name="Group 1158" transform="translate(31.63 46.752)" opacity="0.2">
                                            <path id="Path_2257" data-name="Path 2257" d="M405.688,225.785a3.921,3.921,0,0,0-.832.091c3.749.807,6.666,6.889,6.666,11.277s-2.917,8-6.666,8.473a6.7,6.7,0,0,0,.832.053c4.142,0,7.5-3.817,7.5-8.525S409.83,225.785,405.688,225.785Z" transform="translate(-404.856 -225.785)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span>Eggs</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="26.665" viewBox="0 0 40 26.665">
                                    <g id="meat_steak" transform="translate(-0.006 -85.349)">
                                        <g id="Group_1122" data-name="Group 1122" transform="translate(0.006 90.347)">
                                            <path id="Path_2177" data-name="Path 2177" d="M40,154.868,37.875,153.3c-3.368-4.373-10.32-5.892-17.869-.643a6.89,6.89,0,0,1-1.162.643l-18.838.09V158.3c0,7.052,5,12.693,19.421,12.693,12.742,0,20.579-2.82,20.579-11.283C40.006,159.144,40,154.868,40,154.868Z" transform="translate(-0.006 -149.329)" fill="#da4453" />
                                        </g>
                                        <path id="Path_2178" data-name="Path 2178" d="M406.99,329.242v-6.135h-1.666v6.711C405.908,329.644,406.463,329.453,406.99,329.242Z" transform="translate(-373.652 -219.183)" opacity="0.1" />
                                        <path id="Path_2179" data-name="Path 2179" d="M342.992,349.412v-5.868h-1.666v6.107C341.9,349.582,342.453,349.5,342.992,349.412Z" transform="translate(-314.654 -238.024)" opacity="0.1" />
                                        <path id="Path_2180" data-name="Path 2180" d="M278.993,357.311v-5.768h-1.666v5.837C277.895,357.363,278.449,357.341,278.993,357.311Z" transform="translate(-255.655 -245.398)" opacity="0.1" />
                                        <path id="Path_2181" data-name="Path 2181" d="M215,357.4v-5.857h-1.667v5.795C213.869,357.367,214.425,357.389,215,357.4Z" transform="translate(-196.657 -245.398)" opacity="0.1" />
                                        <path id="Path_2182" data-name="Path 2182" d="M151,352.563v-5.848H149.33v5.564Q150.132,352.438,151,352.563Z" transform="translate(-137.658 -240.947)" opacity="0.1" />
                                        <path id="Path_2183" data-name="Path 2183" d="M87,329.6v-6.5H85.332v5.806A17.618,17.618,0,0,0,87,329.6Z" transform="translate(-78.66 -219.182)" opacity="0.1" />
                                        <g id="Group_1123" data-name="Group 1123" transform="translate(0.006 85.348)">
                                            <path id="Path_2184" data-name="Path 2184" d="M20.006,88.68c-5.831,4.053-20-1.41-20,5.642s5,12.694,19.421,12.694c12.742,0,20.579-2.821,20.579-11.284S30.594,81.319,20.006,88.68Z" transform="translate(-0.006 -85.348)" fill="#ed5564" />
                                        </g>
                                        <path id="Path_2185" data-name="Path 2185" d="M77.168,227.331c-1.355,0-2.5-.763-2.5-1.666S75.813,224,77.168,224s2.5.763,2.5,1.666S78.523,227.331,77.168,227.331Z" transform="translate(-68.829 -127.818)" fill="#ccd1d9" />
                                        <path id="Path_2186" data-name="Path 2186" d="M67.337,213.328c-1.841,0-3.333,1.119-3.333,2.5s1.492,2.5,3.333,2.5,3.333-1.119,3.333-2.5S69.178,213.328,67.337,213.328Zm0,3.334c-1.034,0-1.667-.539-1.667-.834s.633-.834,1.667-.834,1.667.54,1.667.834S68.371,216.662,67.337,216.662Z" transform="translate(-58.998 -117.981)" fill="#e6e9ed" />
                                        <path id="Path_2187" data-name="Path 2187" d="M140.463,285.4a38.378,38.378,0,0,0,8.447.83q2.084,0,3.989-.105l-4.694-6.375Z" transform="translate(-129.484 -179.212)" fill="#f5f7fa" />
                                        <path id="Path_2188" data-name="Path 2188" d="M130.484,152.1a45.181,45.181,0,0,1-1.8-6.694c-.535.1-1.089.164-1.657.215a46.265,46.265,0,0,0,1.88,7.01q.565,1.589,1.216,3.014a15.276,15.276,0,0,1-4.648,3.689,38.43,38.43,0,0,1-3.626,1.84,25.657,25.657,0,0,0,2.6.612,23.944,23.944,0,0,0,6.481-4.5q.473.892.981,1.7a19.379,19.379,0,0,0,2.625,3.346c.808-.029,1.594-.073,2.354-.131C133.7,159.7,131.66,155.4,130.484,152.1Z" transform="translate(-112.321 -55.366)" fill="#e6e9ed" />
                                    </g>
                                </svg>
                            </div>
                            <span>Meat</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39.999" height="26.834" viewBox="0 0 39.999 26.834">
                                    <g id="potato" transform="translate(-0.008 -84.27)">
                                        <g id="Group_1120" data-name="Group 1120" transform="translate(0.007 84.27)">
                                            <g id="Group_1119" data-name="Group 1119" transform="translate(0 0)">
                                                <path id="Path_2163" data-name="Path 2163" d="M22.634,84.476c-5.111-.635-16.789-.154-21.038,6.885a9.292,9.292,0,0,0-.5,9.495c3.761,6.685,25.06,2.777,27.527-4.213C29.8,93.3,28.942,85.258,22.634,84.476Z" transform="translate(-0.008 -84.272)" fill="#965353" />
                                            </g>
                                        </g>
                                        <g id="Group_1121" data-name="Group 1121" transform="translate(0.007 84.27)" opacity="0.1">
                                            <path id="Path_2164" data-name="Path 2164" d="M2.761,100.853a9.292,9.292,0,0,1,.5-9.495c3.265-5.408,10.914-6.945,16.6-7.079C14.114,84.142,5.193,85.4,1.6,91.359a9.292,9.292,0,0,0-.5,9.495c1.451,2.579,5.515,3.582,10.1,3.438C7.313,104.164,4.032,103.114,2.761,100.853Z" transform="translate(-0.007 -84.27)" />
                                        </g>
                                        <path id="Path_2165" data-name="Path 2165" d="M55.038,218.572a.834.834,0,1,1-.834-.835A.835.835,0,0,1,55.038,218.572Z" transform="translate(-49.193 -123.04)" fill="#7f4545" />
                                        <path id="Path_2166" data-name="Path 2166" d="M258.01,154.48a.834.834,0,1,1-.834-.835A.834.834,0,0,1,258.01,154.48Z" transform="translate(-236.307 -63.955)" fill="#7f4545" />
                                        <path id="Path_2167" data-name="Path 2167" d="M193.91,218.572a.835.835,0,1,1-.834-.835A.835.835,0,0,1,193.91,218.572Z" transform="translate(-177.215 -123.04)" fill="#7f4545" />
                                        <path id="Path_2168" data-name="Path 2168" d="M104.949,281.845a.834.834,0,0,0-.8.591,11.257,11.257,0,0,0-.178,3.914c.549.05,1.113.081,1.69.09a10.478,10.478,0,0,1,.084-3.511.846.846,0,0,0,.038-.25A.835.835,0,0,0,104.949,281.845Z" transform="translate(-95.765 -182.139)" fill="#7f4545" />
                                        <path id="Path_2169" data-name="Path 2169" d="M175.929,89.765a.835.835,0,0,0,1.669,0v0h0a14.08,14.08,0,0,1,1.284-4.506c-.613.04-1.242.1-1.879.173-.061.156-.124.319-.187.487a11.685,11.685,0,0,0-.887,3.846h0Z" transform="translate(-162.177 -0.907)" fill="#7f4545" />
                                        <path id="Path_2170" data-name="Path 2170" d="M226.9,153.146c-7.727.391-11.913,7.033-13.354,10.011-1.066,2.2-2.089,3.8-1.649,6.173s3.95,4.168,6.208,4.846c1.4.42,8.8,1.235,12.883-2.256,4.243-3.626,4.258-9.181,4.258-12.52S234.624,152.754,226.9,153.146Z" transform="translate(-195.237 -63.466)" fill="#a85d5d" />
                                        <path id="Path_2171" data-name="Path 2171" d="M342.728,357.458a.835.835,0,1,1-.835-.834A.835.835,0,0,1,342.728,357.458Z" transform="translate(-314.405 -251.076)" fill="#965353" />
                                        <path id="Path_2172" data-name="Path 2172" d="M321.368,239.945a.834.834,0,1,1-.834-.834A.834.834,0,0,1,321.368,239.945Z" transform="translate(-294.715 -142.744)" fill="#965353" />
                                        <path id="Path_2173" data-name="Path 2173" d="M406.834,282.679a.834.834,0,1,1-.835-.834A.835.835,0,0,1,406.834,282.679Z" transform="translate(-373.504 -182.139)" fill="#965353" />
                                        <path id="Path_2174" data-name="Path 2174" d="M233.274,369.983a4.641,4.641,0,0,0,1.838-1.664l.011-.02a.052.052,0,0,1,.006-.011h0a.821.821,0,0,0,.092-.378.834.834,0,0,0-1.578-.377h0a4.333,4.333,0,0,1-1.879,1.344A9.79,9.79,0,0,0,233.274,369.983Z" transform="translate(-213.648 -260.711)" fill="#965353" />
                                        <path id="Path_2175" data-name="Path 2175" d="M451.411,172.878a5.7,5.7,0,0,1-2.705,1h0a.851.851,0,0,0-.225.038.835.835,0,0,0,.279,1.63h0a7.287,7.287,0,0,0,3.619-1.311A4,4,0,0,0,451.411,172.878Z" transform="translate(-412.899 -81.685)" fill="#965353" />
                                        <path id="Path_2176" data-name="Path 2176" d="M337.732,153.134c5.831.249,6.34,3.247,6.34,6.27,0,3.339-.015,8.894-4.259,12.52-2.238,1.912-5.468,2.532-8.162,2.633,2.909.107,7.1-.305,9.832-2.633,4.243-3.626,4.258-9.181,4.258-12.52C345.741,156.114,345.14,152.854,337.732,153.134Z" transform="translate(-305.734 -63.468)" fill="#fff" opacity="0.1" />
                                    </g>
                                </svg>
                            </div>
                            <span>Potatoes</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40.001" height="31.667" viewBox="0 0 40.001 31.667">
                                    <g id="apple" transform="translate(-0.006 -53.334)">
                                        <g id="Group_1124" data-name="Group 1124" transform="translate(3.165 55.114)">
                                            <path id="Path_2189" data-name="Path 2189" d="M48.307,76.192c-2.4-.451-7.766,1.383-7.87,1.932s4.23,4.2,6.632,4.656,4.628-.657,4.969-2.477S50.709,76.643,48.307,76.192Z" transform="translate(-40.435 -76.121)" fill="#a0d468" />
                                        </g>
                                        <path id="Path_2190" data-name="Path 2190" d="M172.7,54.755a.833.833,0,0,0-1.179-1.177h0a18.787,18.787,0,0,0-2,2.464c-1.346,1.984-1.947,3.751-1.782,5.254l1.656-.181c-.244-2.239,2.3-5.348,3.3-6.36h0s0,0,0,0Z" transform="translate(-154.599)" fill="#434a54" />
                                        <path id="Path_2191" data-name="Path 2191" d="M167.957,416.235a.833.833,0,1,0,1.179,0A.834.834,0,0,0,167.957,416.235Z" transform="translate(-154.605 -334.324)" fill="#434a54" />
                                        <g id="Group_1125" data-name="Group 1125" transform="translate(0.006 58.901)">
                                            <path id="Path_2192" data-name="Path 2192" d="M13.962,125.72C5.647,122.065.006,127.809.006,135.941s7.676,15.32,13.956,12.489c6.282,2.831,13.956-4.36,13.956-12.489S22.279,122.065,13.962,125.72Z" transform="translate(-0.006 -124.596)" fill="#da4453" />
                                        </g>
                                        <g id="Group_1128" data-name="Group 1128" transform="translate(0.006 58.902)" opacity="0.1">
                                            <g id="Group_1126" data-name="Group 1126" transform="translate(14.79 23.834)">
                                                <path id="Path_2193" data-name="Path 2193" d="M190.147,429.667a7.209,7.209,0,0,1-.834.315,7.173,7.173,0,0,0,2.929.265A7.052,7.052,0,0,1,190.147,429.667Z" transform="translate(-189.313 -429.667)" />
                                            </g>
                                            <g id="Group_1127" data-name="Group 1127" transform="translate(0 0)">
                                                <path id="Path_2194" data-name="Path 2194" d="M1.673,135.945c0-6.093,3.166-10.847,8.253-11.308-6.052-.523-9.921,4.574-9.921,11.308,0,7.241,6.091,13.739,11.862,13.069C6.649,148.428,1.673,142.491,1.673,135.945Z" transform="translate(-0.006 -124.6)" />
                                            </g>
                                        </g>
                                        <g id="Group_1129" data-name="Group 1129" transform="translate(16.674 73.334)">
                                            <path id="Path_2195" data-name="Path 2195" d="M225.011,320.993a11.667,11.667,0,0,0,11.666-11.667H213.345A11.667,11.667,0,0,0,225.011,320.993Z" transform="translate(-213.345 -309.326)" fill="#ed5564" />
                                        </g>
                                        <g id="Group_1130" data-name="Group 1130" transform="translate(18.34 73.334)">
                                            <path id="Path_2196" data-name="Path 2196" d="M244.672,319.326a10,10,0,0,0,10-10h-20A10,10,0,0,0,244.672,319.326Z" transform="translate(-234.672 -309.326)" fill="#ffe7b0" />
                                        </g>
                                        <g id="Group_1131" data-name="Group 1131" transform="translate(22.626 73.334)">
                                            <path id="Path_2197" data-name="Path 2197" d="M295.363,315.16a5.833,5.833,0,0,0,5.834-5.834H289.53A5.833,5.833,0,0,0,295.363,315.16Z" transform="translate(-289.53 -309.326)" fill="#edca8c" />
                                        </g>
                                        <path id="Path_2198" data-name="Path 2198" d="M352.242,309.916a.834.834,0,0,0,1.423-.59H352A.832.832,0,0,0,352.242,309.916Z" transform="translate(-324.492 -235.992)" fill="#434a54" />
                                    </g>
                                </svg>
                            </div>
                            <span>Apples</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25.973" viewBox="0 0 40 25.973">
                                    <g id="banana" transform="translate(-0.007 -89.776)">
                                        <g id="Group_1132" data-name="Group 1132" transform="translate(0.006 94.896)">
                                            <path id="Path_2199" data-name="Path 2199" d="M35.489,156.732C20.43,171.7,2,155.42,2,155.42s-.326-.051-1.287,1.158-.668,1.494-.668,1.494c9.565,22.177,37.148,13.9,39.011,2.09l-.11-2.345-.668-2.234-.487-.269c-1.258,1.177-.626,1.288-.626,1.288Z" transform="translate(-0.006 -155.315)" fill="#f6bb42" />
                                        </g>
                                        <path id="Path_2200" data-name="Path 2200" d="M5.5,162.531a.831.831,0,0,0-.285-.684,7.661,7.661,0,0,0-.67.753,6.393,6.393,0,0,0-.386.535.833.833,0,0,0,1.34-.6Z" transform="translate(-3.83 -66.44)" fill="#434a54" />
                                        <g id="Group_1133" data-name="Group 1133" transform="translate(1.278 89.776)">
                                            <path id="Path_2201" data-name="Path 2201" d="M49.22,95.965C38.092,114.046,17.649,103.3,17.649,103.3s-.329.027-.98,1.428-.3,1.609-.3,1.609c14.5,19.315,39.373,4.8,38.413-7.119a9.814,9.814,0,0,0-.657-2.254c-.313-.413.878-5.454.878-5.454l-4.187-1.736c0,2.639-.226,5.122-.616,5.377A9.682,9.682,0,0,0,49.22,95.965Z" transform="translate(-16.275 -89.776)" fill="#ffce54" />
                                        </g>
                                        <path id="Path_2202" data-name="Path 2202" d="M17.95,271.791a.833.833,0,0,0,.715-1.5,7.741,7.741,0,0,0-.452.851A6.09,6.09,0,0,0,17.95,271.791Z" transform="translate(-16.542 -166.409)" fill="#434a54" />
                                        <path id="Path_2203" data-name="Path 2203" d="M451.127,89.777c0,2.639-.226,5.122-.616,5.377a8.543,8.543,0,0,1,3.926,1.813c-.312-.413.878-5.454.878-5.454Z" transform="translate(-415.308 -0.001)" fill="#f6bb42" />
                                        <g id="Group_1134" data-name="Group 1134" transform="translate(3.131 90.737)" opacity="0.2">
                                            <path id="Path_2204" data-name="Path 2204" d="M75.994,108.3c-.313-.413.878-5.454.878-5.454L75,102.073c-.326,1.467-.9,4.26-.676,4.562a9.762,9.762,0,0,1,.657,2.254C75.871,119.912,54.66,133.159,40,119.8c14.661,16.051,37.576,2.2,36.655-9.244A9.81,9.81,0,0,0,75.994,108.3Z" transform="translate(-39.996 -102.073)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span>Bananas</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28.334" viewBox="0 0 40 28.334">
                                    <g id="bread_1" transform="translate(-0.006 -74.664)">
                                        <g id="Group_1135" data-name="Group 1135" transform="translate(0.006 87.998)">
                                            <path id="Path_2205" data-name="Path 2205" d="M20.006,245.333c-11.045,0-20,3.556-20,10,0,0,0,5,5,5h30c5,0,5-5,5-5C40.006,248.889,31.052,245.333,20.006,245.333Z" transform="translate(-0.006 -245.333)" fill="#f4be8e" />
                                        </g>
                                        <path id="Path_2206" data-name="Path 2206" d="M416.83,426.649a.834.834,0,0,0-.834.835h1.668A.834.834,0,0,0,416.83,426.649Z" transform="translate(-383.49 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2207" data-name="Path 2207" d="M374.174,426.649a.833.833,0,0,0-.833.835h1.666A.834.834,0,0,0,374.174,426.649Z" transform="translate(-344.168 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2208" data-name="Path 2208" d="M331.5,426.649a.834.834,0,0,0-.834.835h1.666A.833.833,0,0,0,331.5,426.649Z" transform="translate(-304.83 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2209" data-name="Path 2209" d="M288.833,426.649a.834.834,0,0,0-.834.835h1.667A.834.834,0,0,0,288.833,426.649Z" transform="translate(-265.493 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2210" data-name="Path 2210" d="M246.177,426.649a.833.833,0,0,0-.833.835h1.666A.834.834,0,0,0,246.177,426.649Z" transform="translate(-226.171 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2211" data-name="Path 2211" d="M203.507,426.649a.834.834,0,0,0-.834.835h1.666A.833.833,0,0,0,203.507,426.649Z" transform="translate(-186.833 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2212" data-name="Path 2212" d="M160.836,426.649a.834.834,0,0,0-.834.835h1.668A.834.834,0,0,0,160.836,426.649Z" transform="translate(-147.496 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2213" data-name="Path 2213" d="M118.18,426.649a.833.833,0,0,0-.833.835h1.666A.834.834,0,0,0,118.18,426.649Z" transform="translate(-108.174 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2214" data-name="Path 2214" d="M75.51,426.649a.834.834,0,0,0-.834.835h1.666A.833.833,0,0,0,75.51,426.649Z" transform="translate(-68.836 -324.486)" fill="#eaad7a" />
                                        <path id="Path_2215" data-name="Path 2215" d="M144.124,255.7a.833.833,0,1,0,1.489-.746h0a4.331,4.331,0,0,1-.063-3.3c-.629.1-1.244.208-1.841.332a6.1,6.1,0,0,0,.414,3.713Z" transform="translate(-132.363 -163.168)" fill="#eaad7a" />
                                        <path id="Path_2216" data-name="Path 2216" d="M231.033,245.332q-.89,0-1.76.031a6.04,6.04,0,0,0,.182,4.509h0a.832.832,0,0,0,1.577-.374.813.813,0,0,0-.089-.372h0a4.292,4.292,0,0,1,.178-3.793Z" transform="translate(-211.027 -157.334)" fill="#eaad7a" />
                                        <path id="Path_2217" data-name="Path 2217" d="M314.531,248.411a6.052,6.052,0,0,0,.256,4.3h0a.833.833,0,1,0,1.489-.746h0a4.334,4.334,0,0,1-.045-3.342Q315.4,248.5,314.531,248.411Z" transform="translate(-289.692 -160.173)" fill="#eaad7a" />
                                        <g id="Group_1136" data-name="Group 1136" transform="translate(12.005 74.664)">
                                            <path id="Path_2218" data-name="Path 2218" d="M304.952,122.646l0,.005a1.791,1.791,0,0,1-.283-.585.783.783,0,0,1,.22-.829,2.423,2.423,0,0,0,.631-2.485,3.367,3.367,0,0,0-.577-1.113h0s0,0,0,0h0a.833.833,0,0,0-1.283,1.063h0a1.719,1.719,0,0,1,.262.521.764.764,0,0,1-.211.84,2.45,2.45,0,0,0-.631,2.5,3.481,3.481,0,0,0,.573,1.13h0a.833.833,0,0,0,1.482-.523.824.824,0,0,0-.184-.523h0Z" transform="translate(-291.3 -114.002)" fill="#e6e9ed" />
                                            <path id="Path_2219" data-name="Path 2219" d="M227.969,76.644a5.048,5.048,0,0,0-.781-1.651h0a.833.833,0,0,0-1.328,1h0a3.5,3.5,0,0,1,.51,1.118,2.069,2.069,0,0,1-.469,2,3.724,3.724,0,0,0-.82,3.572,5.081,5.081,0,0,0,.781,1.651h0a.833.833,0,0,0,1.328-1h0a3.5,3.5,0,0,1-.512-1.118,2.066,2.066,0,0,1,.47-2A3.726,3.726,0,0,0,227.969,76.644Z" transform="translate(-219.36 -74.664)" fill="#e6e9ed" />
                                            <path id="Path_2220" data-name="Path 2220" d="M156.148,118.753a3.376,3.376,0,0,0-.576-1.113h0a.833.833,0,0,0-1.283,1.063h0a1.783,1.783,0,0,1,.262.521.764.764,0,0,1-.211.84,2.453,2.453,0,0,0-.632,2.5,3.472,3.472,0,0,0,.574,1.13h0a.833.833,0,0,0,1.3-1.046h0l0,.005a1.83,1.83,0,0,1-.282-.585.779.779,0,0,1,.22-.829A2.423,2.423,0,0,0,156.148,118.753Z" transform="translate(-153.595 -114.002)" fill="#e6e9ed" />
                                        </g>
                                        <g id="Group_1137" data-name="Group 1137" transform="translate(0.006 87.998)" opacity="0.2">
                                            <path id="Path_2221" data-name="Path 2221" d="M20.006,247c10.489,0,19.093,3.208,19.933,9.05a5.162,5.162,0,0,0,.067-.715c0-6.444-8.954-10-20-10s-20,3.556-20,10a5.075,5.075,0,0,0,.068.715C.914,250.207,9.516,247,20.006,247Z" transform="translate(-0.006 -245.333)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span>Bread</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35.573" viewBox="0 0 40 35.573">
                                    <g id="cabbage_1" transform="translate(-0.004 -28.335)">
                                        <path id="Path_2222" data-name="Path 2222" d="M77.215,31.448C57.062,21.718,51.176,37.9,51.176,37.9L53.4,45.518l8.174,2.745,14.244-4.788S90.584,37.9,77.215,31.448Z" transform="translate(-47.174)" fill="#739b3a" />
                                        <path id="Path_2223" data-name="Path 2223" d="M153.244,30.728c1.6-1.124,3.174-2.032,3.563-2.253a19.217,19.217,0,0,0-3.021-.118c-.469.3-.977.64-1.49,1a22.491,22.491,0,0,0-2.751,2.225,6.256,6.256,0,0,0-1.462,1.964c-.012.026-.022.053-.032.079a2.711,2.711,0,0,0-.138.491c-.372,2.163.845,3.359,1.918,4.416a10.048,10.048,0,0,1,1.221,1.357c.238.341.182.531.161.6-.142.49-.946.966-1.311,1.118a.833.833,0,0,0,.634,1.542,4.1,4.1,0,0,0,2.277-2.189,2.305,2.305,0,0,0-.393-2.028A11.331,11.331,0,0,0,151,37.345c-1.029-1.012-1.587-1.621-1.476-2.721a16.559,16.559,0,0,1,7.551.394,6.106,6.106,0,0,1,2.3,1.274l-.006-.006,1.235-1.119c-.122-.134-2.844-3.032-9.922-2.365a.281.281,0,0,0,.027-.027A20.789,20.789,0,0,1,153.244,30.728Z" transform="translate(-136.29 -0.005)" opacity="0.1" />
                                        <path id="Path_2224" data-name="Path 2224" d="M199.432,62.677c-4.047-.56-9.05.818-10.891,3.03s-3.321,5.259-4.952,6.584a10.428,10.428,0,0,1-4.667,1.615l-.7,9.754,16.522-.876,6.1-11.194S203.478,63.238,199.432,62.677Z" transform="translate(-164.294 -31.543)" fill="#81af46" />
                                        <g id="Group_1138" data-name="Group 1138" transform="translate(23.485 34.889)" opacity="0.1">
                                            <path id="Path_2225" data-name="Path 2225" d="M301.4,124.61a.833.833,0,0,1-.4-1.566c4.3-2.318,7.158-10.187,7.186-10.266a.834.834,0,0,1,1.57.562c-.125.348-3.1,8.55-7.965,11.17A.823.823,0,0,1,301.4,124.61Z" transform="translate(-300.562 -112.226)" />
                                        </g>
                                        <path id="Path_2226" data-name="Path 2226" d="M182.47,154.773c-7.289,1.887-9.554,5.834-9.554,5.834s-3.262,16.184,13.311,11.719,13.447-25.857,10.895-24.965C192.511,148.974,189.759,152.886,182.47,154.773Z" transform="translate(-159.163 -109.702)" fill="#8cc153" />
                                        <g id="Group_1139" data-name="Group 1139" transform="translate(20.465 45.288)" opacity="0.1">
                                            <path id="Path_2227" data-name="Path 2227" d="M262.734,259.873a.834.834,0,0,1-.3-1.613c2.012-.768,5.183-2.644,8.862-7.217a40.606,40.606,0,0,0,3.612-5.276.834.834,0,0,1,1.462.8,41.727,41.727,0,0,1-3.756,5.5c-3.147,3.917-6.372,6.526-9.586,7.754A.849.849,0,0,1,262.734,259.873Z" transform="translate(-261.901 -245.335)" />
                                        </g>
                                        <path id="Path_2228" data-name="Path 2228" d="M17.064,156.617c-7.286-6.224-15.548-7.187-16.23-4.133-3.544,15.835,4.37,25.663,21.6,24.179S26.774,164.912,17.064,156.617Z" transform="translate(0 -112.902)" fill="#a0d468" />
                                        <path id="Path_2229" data-name="Path 2229" d="M75.894,249.058a26.062,26.062,0,0,1-7.977-4.936,35.668,35.668,0,0,1-5.531-6.3,39.446,39.446,0,0,1-4.241-7.763.833.833,0,1,0-1.561.581,40.3,40.3,0,0,0,4.407,8.095,37.4,37.4,0,0,0,5.8,6.619,28.926,28.926,0,0,0,5.71,4q1-.035,2.046-.125c.485-.041.945-.092,1.383-.146Z" transform="translate(-52.111 -185.458)" opacity="0.1" />
                                    </g>
                                </svg>
                            </div>
                            <span>Cabbage</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37.148" viewBox="0 0 40 37.148">
                                    <g id="cucumbers" transform="translate(-0.008 -18.257)">
                                        <g id="Group_1140" data-name="Group 1140" transform="translate(12.508 50.94)">
                                            <path id="Path_2230" data-name="Path 2230" d="M160,438.251h0a.833.833,0,1,0,1.666,0h0v-1.665H160Z" transform="translate(-160.002 -436.586)" fill="#ffce54" />
                                            <path id="Path_2231" data-name="Path 2231" d="M373.325,463.086v1.563a.833.833,0,0,0,1.666,0v-1.563Z" transform="translate(-356.659 -461.016)" fill="#ffce54" />
                                        </g>
                                        <g id="Group_1141" data-name="Group 1141" transform="translate(29.174 25.441)">
                                            <rect id="Rectangle_1174" data-name="Rectangle 1174" width="1.666" height="3.523" fill="#8cc153" />
                                        </g>
                                        <g id="Group_1142" data-name="Group 1142" transform="translate(12.508 32.63)">
                                            <rect id="Rectangle_1175" data-name="Rectangle 1175" width="1.666" height="3.524" fill="#8cc153" />
                                        </g>
                                        <g id="Group_1143" data-name="Group 1143" transform="translate(25.034 28.446)">
                                            <path id="Path_2232" data-name="Path 2232" d="M325.3,148.679c-8.167,0-4.9,25.291,0,25.291S333.469,148.679,325.3,148.679Z" transform="translate(-320.328 -148.679)" fill="#a0d468" />
                                        </g>
                                        <g id="Group_1144" data-name="Group 1144" transform="translate(9.262 35.108)">
                                            <path id="Path_2233" data-name="Path 2233" d="M122.529,233.943c-6.7,0-4.017,16.662,0,16.662S129.226,233.943,122.529,233.943Z" transform="translate(-118.451 -233.943)" fill="#a0d468" />
                                        </g>
                                        <path id="Path_2234" data-name="Path 2234" d="M230.511,20.812a4.778,4.778,0,0,0-6.226-2.095,3.91,3.91,0,0,0-1.793,5.225,3.134,3.134,0,0,0,1.883,1.62,3.85,3.85,0,0,0,2.432-.072,2.407,2.407,0,0,0,1.345-1.42,2.175,2.175,0,0,0-.173-1.851l-.007-.011-.015-.026h0a.833.833,0,1,0-1.426.862h0a.5.5,0,0,1,.056.45.8.8,0,0,1-.337.424,1.767,1.767,0,0,1-2.261-.709,2.241,2.241,0,0,1,1.028-3,2.818,2.818,0,0,1,2.236-.12,3.474,3.474,0,0,1,1.814,1.553c.631,1.091,1.133,2.821-1.8,5.234l1.06,1.285a7.833,7.833,0,0,0,2.68-3.568A4.607,4.607,0,0,0,230.511,20.812Z" transform="translate(-204.736)" fill="#8cc153" />
                                        <path id="Path_2235" data-name="Path 2235" d="M438.662,256.087a.833.833,0,1,1-.834-.833A.834.834,0,0,1,438.662,256.087Z" transform="translate(-402.848 -218.481)" fill="#8cc153" />
                                        <path id="Path_2236" data-name="Path 2236" d="M215,320.078a.833.833,0,1,1-.832-.833A.833.833,0,0,1,215,320.078Z" transform="translate(-196.655 -277.473)" fill="#8cc153" />
                                        <path id="Path_2237" data-name="Path 2237" d="M119,277.456a.833.833,0,1,1-.832-.835A.833.833,0,0,1,119,277.456Z" transform="translate(-108.157 -238.179)" fill="#8cc153" />
                                        <path id="Path_2238" data-name="Path 2238" d="M119,362.735a.833.833,0,1,1-.832-.835A.833.833,0,0,1,119,362.735Z" transform="translate(-108.157 -316.795)" fill="#8cc153" />
                                        <path id="Path_2239" data-name="Path 2239" d="M151,298.737a.833.833,0,1,1-.833-.835A.833.833,0,0,1,151,298.737Z" transform="translate(-137.656 -257.797)" fill="#8cc153" />
                                        <path id="Path_2240" data-name="Path 2240" d="M172.325,373.421a.834.834,0,1,1-.834-.833A.832.832,0,0,1,172.325,373.421Z" transform="translate(-157.318 -326.648)" fill="#8cc153" />
                                        <path id="Path_2241" data-name="Path 2241" d="M385.663,345.236a.833.833,0,1,1-.834-.835A.833.833,0,0,1,385.663,345.236Z" transform="translate(-353.989 -300.664)" fill="#8cc153" />
                                        <path id="Path_2242" data-name="Path 2242" d="M332.322,387.921a.834.834,0,1,1-.834-.833A.834.834,0,0,1,332.322,387.921Z" transform="translate(-304.814 -340.016)" fill="#8cc153" />
                                        <path id="Path_2243" data-name="Path 2243" d="M417.662,409.235a.833.833,0,1,1-.834-.835A.833.833,0,0,1,417.662,409.235Z" transform="translate(-383.488 -359.662)" fill="#8cc153" />
                                        <path id="Path_2244" data-name="Path 2244" d="M332.322,170.855a.834.834,0,1,1-.834-.833A.834.834,0,0,1,332.322,170.855Z" transform="translate(-304.814 -139.908)" fill="#8cc153" />
                                        <path id="Path_2245" data-name="Path 2245" d="M396.32,213.418a.834.834,0,1,1-.834-.834A.833.833,0,0,1,396.32,213.418Z" transform="translate(-363.812 -179.145)" fill="#8cc153" />
                                        <path id="Path_2246" data-name="Path 2246" d="M353.664,256.087a.833.833,0,1,1-.834-.833A.834.834,0,0,1,353.664,256.087Z" transform="translate(-324.49 -218.481)" fill="#8cc153" />
                                        <path id="Path_2247" data-name="Path 2247" d="M39.781,103.63h0a14.591,14.591,0,0,0-5.712-3.463,12.814,12.814,0,0,0-6.3-.432,16.952,16.952,0,0,0-7.7,3.823,15.356,15.356,0,0,1-7.076,3.459,12.882,12.882,0,0,1-5.9-.358,15.755,15.755,0,0,1-5.686-3.071h0a.832.832,0,1,0-1.133,1.219h0a17.121,17.121,0,0,0,6.284,3.429,14.932,14.932,0,0,0,4.265.635,14.168,14.168,0,0,0,2.415-.208,16.96,16.96,0,0,0,7.893-3.823,15.358,15.358,0,0,1,6.895-3.461,11.149,11.149,0,0,1,5.466.349,13.13,13.13,0,0,1,5.074,3.038h0a.832.832,0,1,0,1.213-1.139Z" transform="translate(0 -74.919)" fill="#a0d468" />
                                    </g>
                                </svg>
                            </div>
                            <span>Cucumbers</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36.695" viewBox="0 0 40 36.695">
                                    <g id="hot_pepper" transform="translate(-0.008 -21.161)">
                                        <path id="Path_2286" data-name="Path 2286" d="M152.418,51.2h10.9c4.972-2.881,9.011-9.6,2-17.058a13.961,13.961,0,0,1-3.586-12.982c-8.692,2.483-12.562,7.837-12.562,15.375a14.5,14.5,0,0,1-2.738-2.409C142.8,42.508,147.089,48.555,152.418,51.2Z" transform="translate(-133.741)" fill="#f6bb42" />
                                        <path id="Path_2287" data-name="Path 2287" d="M233.33,242.54h-5.378c-2.452-1.421-4.445-4.735-.986-8.414a6.891,6.891,0,0,0,1.77-6.406c4.288,1.226,6.2,3.867,6.2,7.586a7.137,7.137,0,0,0,1.351-1.188A6.117,6.117,0,0,1,233.33,242.54Z" transform="translate(-207.515 -190.42)" fill="#ffce54" />
                                        <g id="Group_1174" data-name="Group 1174" transform="translate(0.008 40.348)">
                                            <g id="Group_1173" data-name="Group 1173" transform="translate(0 0)">
                                                <path id="Path_2288" data-name="Path 2288" d="M5.91,272.943a.883.883,0,0,1-.168-.017,8.026,8.026,0,0,1-5.689-5.082.833.833,0,0,1,1.58-.532,6.394,6.394,0,0,0,4.445,3.982.833.833,0,0,1-.167,1.649Z" transform="translate(-0.008 -266.745)" fill="#8cc153" />
                                            </g>
                                            <path id="Path_2289" data-name="Path 2289" d="M79.255,299.837c-22.493,11.747-26.58-.1-31.233-.934-5.008-.9-6.817,5.2-4.072,7.515C64.207,323.486,80.638,306.589,79.255,299.837Z" transform="translate(-39.337 -296.308)" fill="#ed5564" />
                                            <path id="Path_2290" data-name="Path 2290" d="M43.957,317.411a3.644,3.644,0,0,1-1.207-2.167,4.051,4.051,0,0,0,1.207,3.833c20.208,17.027,36.609.251,35.315-6.532C78.1,319.977,62.657,333.167,43.957,317.411Z" transform="translate(-39.343 -308.967)" opacity="0.1" />
                                            <path id="Path_2291" data-name="Path 2291" d="M36.422,307.23c-.764.764.262,2.629.262,2.629l2.125-3.455A4.228,4.228,0,0,0,36.422,307.23Z" transform="translate(-33.317 -303.306)" fill="#a0d468" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span>Pepers</span>
                        </a>
                        <a href="#" class="product-item">
                            <div class="product-image">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36.666" viewBox="0 0 40 36.666">
                                    <g id="orange" transform="translate(-0.006 -21.344)">
                                        <g id="Group_1175" data-name="Group 1175" transform="translate(1.769 24.152)">
                                            <path id="Path_2292" data-name="Path 2292" d="M29.323,61.67c-2.219.05-6.74-1.687-6.748-2.038S27,57.341,29.223,57.29s4.041.889,4.069,2.1S31.543,61.62,29.323,61.67Z" transform="translate(-22.575 -57.288)" fill="#a0d468" />
                                        </g>
                                        <path id="Path_2293" data-name="Path 2293" d="M152.3,22.177a.833.833,0,0,0-1.4-.611h0a7.094,7.094,0,0,0-1.93,5.69l1.659-.158a5.419,5.419,0,0,1,1.407-4.313l0,0h0A.826.826,0,0,0,152.3,22.177Z" transform="translate(-137.292)" fill="#434a54" />
                                        <g id="Group_1176" data-name="Group 1176" transform="translate(0.006 26.344)">
                                            <path id="Path_2294" data-name="Path 2294" d="M25.006,97.843a12.5,12.5,0,1,1-12.5-12.5A12.5,12.5,0,0,1,25.006,97.843Z" transform="translate(-0.006 -85.343)" fill="#e9573f" />
                                        </g>
                                        <g id="Group_1177" data-name="Group 1177" transform="translate(0.006 26.344)" opacity="0.1">
                                            <path id="Path_2295" data-name="Path 2295" d="M1.673,97.843A12.5,12.5,0,0,1,13.339,85.371q-.413-.027-.833-.028a12.5,12.5,0,0,0,0,25c.28,0,.558-.011.833-.029A12.5,12.5,0,0,1,1.673,97.843Z" transform="translate(-0.006 -85.343)" />
                                        </g>
                                        <path id="Path_2296" data-name="Path 2296" d="M119.005,342.178a.833.833,0,1,1-.833-.832A.832.832,0,0,1,119.005,342.178Z" transform="translate(-108.166 -295.001)" opacity="0.1" />
                                        <path id="Path_2297" data-name="Path 2297" d="M140.333,363.492a.833.833,0,1,1-.833-.835A.833.833,0,0,1,140.333,363.492Z" transform="translate(-127.827 -314.647)" opacity="0.1" />
                                        <path id="Path_2298" data-name="Path 2298" d="M161.669,342.178a.833.833,0,1,1-.834-.832A.833.833,0,0,1,161.669,342.178Z" transform="translate(-147.496 -295.001)" opacity="0.1" />
                                        <path id="Path_2299" data-name="Path 2299" d="M214.332,204.675a11.668,11.668,0,1,1,8.25-3.417A11.59,11.59,0,0,1,214.332,204.675Z" transform="translate(-186.826 -147.498)" fill="#e6e9ed" />
                                        <path id="Path_2300" data-name="Path 2300" d="M204.5,170.669a12.5,12.5,0,1,0,12.5,12.5A12.5,12.5,0,0,0,204.5,170.669Zm7.661,20.161a10.794,10.794,0,1,1,2.322-3.445A10.79,10.79,0,0,1,212.162,190.83Z" transform="translate(-176.995 -137.659)" fill="#fc6e51" />
                                        <path id="Path_2301" data-name="Path 2301" d="M243.831,231.673A9.167,9.167,0,1,1,253,222.506,9.177,9.177,0,0,1,243.831,231.673Z" transform="translate(-216.325 -176.996)" fill="#fc6e51" />
                                        <path id="Path_2302" data-name="Path 2302" d="M234,202.669a10,10,0,1,0,10,10A10,10,0,0,0,234,202.669Zm.833,1.708a8.249,8.249,0,0,1,4.441,1.84l-4.441,4.44Zm-2.844,7.459h-6.281a8.248,8.248,0,0,1,1.84-4.441Zm-3.263-5.62a8.257,8.257,0,0,1,4.442-1.84v6.28Zm3.263,7.287-4.441,4.441a8.252,8.252,0,0,1-1.84-4.441Zm1.179,1.178v6.281a8.252,8.252,0,0,1-4.442-1.84Zm1.665,0,4.441,4.441a8.245,8.245,0,0,1-4.441,1.84Zm1.179-1.178h6.281a8.256,8.256,0,0,1-1.84,4.441Zm0-1.668,4.441-4.441a8.252,8.252,0,0,1,1.84,4.441Z" transform="translate(-206.495 -167.159)" fill="#e9573f" />
                                        <g id="Group_1178" data-name="Group 1178" transform="translate(25.838 43.845)">
                                            <path id="Path_2303" data-name="Path 2303" d="M333.989,311.011a1.667,1.667,0,1,1-1.667-1.665A1.668,1.668,0,0,1,333.989,311.011Z" transform="translate(-330.654 -309.346)" fill="#e6e9ed" />
                                        </g>
                                        <path id="Path_2304" data-name="Path 2304" d="M311.007,395.492a.833.833,0,1,1-.833-.835A.833.833,0,0,1,311.007,395.492Z" transform="translate(-285.169 -344.147)" fill="#e6e9ed" />
                                        <path id="Path_2305" data-name="Path 2305" d="M407.005,342.178a.833.833,0,1,1-.833-.832A.832.832,0,0,1,407.005,342.178Z" transform="translate(-373.667 -295.001)" fill="#e6e9ed" />
                                        <path id="Path_2306" data-name="Path 2306" d="M332.322,170.669a12.643,12.643,0,0,0-1.668.111,12.5,12.5,0,0,1,0,24.779,12.5,12.5,0,1,0,1.668-24.89Z" transform="translate(-304.816 -137.659)" fill="#fff" opacity="0.2" />
                                    </g>
                                </svg>
                            </div>
                            <span>Oranges</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-block">
            <div class="text-wrapper">
                <h2>With you from first sale to full scale</h2>
                <p>One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.</p>
            </div>
        </div>
        <div class="auth-block-container">
            <div class="text-container">
                <h3><span>Create —</span><br> your online store</h3>
                <p>Exactly the same store. Exactly the same counters. <br> Exactly the same visitors. Only online and much easier.</p>
                <a href="{{ route('register') }}">Sign Up <svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934">
                        <g id="noun_back_1971165" transform="translate(-1.681 -553)">
                            <g id="Group_997" data-name="Group 997" transform="translate(1.681 553)">
                                <path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff" />
                            </g>
                        </g>
                    </svg></a>
            </div>
            <div class="image-container">
                <img src="/img/pics/landing-page-1.png" alt="">
            </div>
        </div>
        <div class="search-block-container">
            <div class="search-wrapper">
                <div class="loop-icon">
                    <svg class="field-icon search-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 12.992 13">
                        <g id="noun_Search_875352" transform="translate(-10.4 -10.3)">
                            <path id="Path_938" data-name="Path 938" d="M23.176,22.07l-2.332-2.316a5.854,5.854,0,1,0-4.6,2.236,5.777,5.777,0,0,0,3.593-1.246l2.316,2.348a.7.7,0,0,0,.511.208.769.769,0,0,0,.511-.208A.713.713,0,0,0,23.176,22.07Zm-2.523-5.925a4.417,4.417,0,1,1-1.294-3.114A4.373,4.373,0,0,1,20.653,16.145Z" transform="translate(0)" fill="#cecece" />
                        </g>
                    </svg>
                </div>
                <input type="text" placeholder="What are you looking for?">
            </div>
        </div>
        <div class="products-slider-block">
            <div class="init-slick-slider">
                <div class="item">
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
                                </svg> German meat factory</h5>
                            <a href="profile-product.html">
                                <h3>Bull meat - high quality</h3>
                            </a>
                            <p>The freshest eggs from the best chicken producer in Germany</p>
                            <div class="price-container">
                                <div class="price-content">
                                    <span class="big-green-span">50 UAH</span>
                                    <span class="big-span">/</span>
                                    <span>1 KG</span>
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
                                    <a href="#" class="saved-link active">
                                        <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                            <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                        </svg>
                                        <span>Saved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <a class="link-button" href="#">Learn more</a>
                        <a class="link-button button-fill" href="#">Message</a>
                    </div>
                </div>
                <div class="item">
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
                                </svg> German meat factory</h5>
                            <a href="profile-product.html">
                                <h3>Bull meat - high quality</h3>
                            </a>
                            <p>The freshest eggs from the best chicken producer in Germany</p>
                            <div class="price-container">
                                <div class="price-content">
                                    <span class="big-green-span">50 UAH</span>
                                    <span class="big-span">/</span>
                                    <span>1 KG</span>
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
                                    <a href="#" class="saved-link active">
                                        <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                            <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                        </svg>
                                        <span>Saved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <a class="link-button" href="#">Learn more</a>
                        <a class="link-button button-fill" href="#">Message</a>
                    </div>
                </div>
                <div class="item">
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
                                </svg> German meat factory</h5>
                            <a href="profile-product.html">
                                <h3>Bull meat - high quality</h3>
                            </a>
                            <p>The freshest eggs from the best chicken producer in Germany</p>
                            <div class="price-container">
                                <div class="price-content">
                                    <span class="big-green-span">50 UAH</span>
                                    <span class="big-span">/</span>
                                    <span>1 KG</span>
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
                                    <a href="#" class="saved-link active">
                                        <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                            <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                        </svg>
                                        <span>Saved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <a class="link-button" href="#">Learn more</a>
                        <a class="link-button button-fill" href="#">Message</a>
                    </div>
                </div>
                <div class="item">
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
                                </svg> German meat factory</h5>
                            <a href="profile-product.html">
                                <h3>Bull meat - high quality</h3>
                            </a>
                            <p>The freshest eggs from the best chicken producer in Germany</p>
                            <div class="price-container">
                                <div class="price-content">
                                    <span class="big-green-span">50 UAH</span>
                                    <span class="big-span">/</span>
                                    <span>1 KG</span>
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
                                    <a href="#" class="saved-link active">
                                        <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                            <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                        </svg>
                                        <span>Saved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <a class="link-button" href="#">Learn more</a>
                        <a class="link-button button-fill" href="#">Message</a>
                    </div>
                </div>
                <div class="item">
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
                                </svg> German meat factory</h5>
                            <a href="profile-product.html">
                                <h3>Bull meat - high quality</h3>
                            </a>
                            <p>The freshest eggs from the best chicken producer in Germany</p>
                            <div class="price-container">
                                <div class="price-content">
                                    <span class="big-green-span">50 UAH</span>
                                    <span class="big-span">/</span>
                                    <span>1 KG</span>
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
                                    <a href="#" class="saved-link active">
                                        <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                            <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                        </svg>
                                        <span>Saved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <a class="link-button" href="#">Learn more</a>
                        <a class="link-button button-fill" href="#">Message</a>
                    </div>
                </div>
                <div class="item">
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
                                </svg> German meat factory</h5>
                            <a href="profile-product.html">
                                <h3>Bull meat - high quality</h3>
                            </a>
                            <p>The freshest eggs from the best chicken producer in Germany</p>
                            <div class="price-container">
                                <div class="price-content">
                                    <span class="big-green-span">50 UAH</span>
                                    <span class="big-span">/</span>
                                    <span>1 KG</span>
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
                                    <a href="#" class="saved-link active">
                                        <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                            <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                        </svg>
                                        <span>Saved</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <a class="link-button" href="#">Learn more</a>
                        <a class="link-button button-fill" href="#">Message</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-block">
            <div class="text-wrapper">
                <h2>Popular nearby</h2>
                <p>One platform with all the ecommerce and point of sale features you need to start, run, and grow your business.</p>
                <a class="button-link" href="{{ route('register') }}">Sign Up</a>
            </div>
        </div>
        <div class="auth-block-container big-image">
            <div class="image-container">
                <img src="/img/pics/landing-page-2.png" alt="">
            </div>
            <div class="text-container">
                <h3><span>Start —</span><br> your business journey</h3>
                <p>One platform with all the ecommerce and point of sale features you need to start, run, and grow your eco- business.</p>
                <a href="{{ route('register') }}">Sign Up <svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934">
                        <g id="noun_back_1971165" transform="translate(-1.681 -553)">
                            <g id="Group_997" data-name="Group 997" transform="translate(1.681 553)">
                                <path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff" />
                            </g>
                        </g>
                    </svg></a>
            </div>
        </div>
        <div class="text-block">
            <div class="text-wrapper">
                <h2>Popular nearby</h2>
                <p>Find your nearest sellers and products and buy the right products with ease right now</p>
            </div>
            <div class="product-items-container">
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <a href="#" class="image-container">
                        <img src="/img/pics/my-products-image.png">
                    </a>
                    <div class="product-title">
                        <a href="#">
                            <h3>Fresh eggs from thoroughbred chickens</h3>
                        </a>
                        <div class="product-desc">
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
                            <a href="#" class="product-link active">
                                <svg id="noun_Heart_2854587" xmlns="http://www.w3.org/2000/svg" width="15.136" height="13.474" viewBox="0 0 15.136 13.474">
                                    <path id="Path_2148" data-name="Path 2148" d="M19.02,11.475a3.939,3.939,0,0,0-2.815-1.129,4.892,4.892,0,0,0-3.42,1.457l-.2.2-.2-.2a4.893,4.893,0,0,0-3.42-1.457,3.869,3.869,0,0,0-3.937,4.2,4.885,4.885,0,0,0,1.45,3.162l.2.2.563.563,4.782,4.782.562.563.563-.563,4.782-4.782.563-.563.2-.2A4.432,4.432,0,0,0,19.02,11.475Zm-.89,5.672-.2.2-.563.563-4.782,4.782L7.8,17.912l-.563-.563-.2-.2A4.09,4.09,0,0,1,5.817,14.5a3.074,3.074,0,0,1,3.143-3.36,4.093,4.093,0,0,1,2.857,1.224l.2.2.562.563.563-.563.2-.2a4.093,4.093,0,0,1,2.857-1.224,3.149,3.149,0,0,1,2.253.9A3.64,3.64,0,0,1,18.13,17.147Z" transform="translate(-5.016 -10.345)" fill="#b2b2b2" />
                                </svg>
                                <span>Saved</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="auth-block-container sign-up-button">
            <div class="text-container">
                <h3>Start selling now!</h3>
                <p>Create your online-store, add positions and start earning money online. It is so easy!</p>
                <div class="button-container">
                    <a href="{{ route('login') }}">Log in</a>
                    <a class="button-link" href="{{ route('register') }}">Sign Up</a>
                </div>
            </div>
            <div class="image-container">
                <img src="/img/pics/landing-page-3.png" alt="">
            </div>
        </div>
    </div>
    <footer class="footer-main">
        <div class="foorter-wrapper">
            <a href="#">
                <h3>ECOFARMER</h3>
            </a>
            <div class="footer-container">
                <div class="link-item">
                    <h4>About Ecofarmer</h4>
                    <a href="#">License</a>
                    <a href="#">Sitemap</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div class="link-item">
                    <h4>Meet Ecofarmer</h4>
                    <a href="#">About Ecofarmer</a>
                    <a href="#">Careers</a>
                </div>
                <div class="link-item">
                    <h4>Help</h4>
                    <a href="#">Help Center</a>
                    <a href="#">Become an Affiliate</a>
                </div>
                <div class="subscribe-container">
                    <div class="socials-container">
                        <a href="#" class="social-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.109" height="15" viewBox="0 0 8.109 15">
                                <g id="facebook-logo" transform="translate(-22.077)">
                                    <path id="Path_2310" data-name="Path 2310" d="M29.881,0,27.936,0a3.416,3.416,0,0,0-3.6,3.692v1.7H22.383a.306.306,0,0,0-.306.306V8.166a.306.306,0,0,0,.306.306h1.956v6.223a.306.306,0,0,0,.306.306H27.2a.306.306,0,0,0,.306-.306V8.471h2.287a.306.306,0,0,0,.306-.306V5.7a.306.306,0,0,0-.306-.306H27.5V3.951c0-.693.165-1.046,1.069-1.046h1.31a.306.306,0,0,0,.306-.306V.309A.306.306,0,0,0,29.881,0Z" fill="#f8f8f8" />
                                </g>
                            </svg>
                        </a>
                        <a href="#" class="social-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.539" height="11" viewBox="0 0 13.539 11">
                                <g id="twitter" transform="translate(0 -48)">
                                    <g id="Group_1206" data-name="Group 1206" transform="translate(0 48)">
                                        <path id="Path_2311" data-name="Path 2311" d="M13.538,49.3a5.788,5.788,0,0,1-1.6.438,2.76,2.76,0,0,0,1.221-1.534,5.546,5.546,0,0,1-1.76.672,2.775,2.775,0,0,0-4.8,1.9,2.857,2.857,0,0,0,.064.633,7.856,7.856,0,0,1-5.721-2.9,2.776,2.776,0,0,0,.853,3.71,2.742,2.742,0,0,1-1.254-.342v.03a2.788,2.788,0,0,0,2.224,2.727,2.77,2.77,0,0,1-.728.091,2.454,2.454,0,0,1-.525-.047,2.8,2.8,0,0,0,2.593,1.933A5.577,5.577,0,0,1,.664,57.792,5.2,5.2,0,0,1,0,57.754,7.814,7.814,0,0,0,4.258,59a7.845,7.845,0,0,0,7.9-7.9c0-.123,0-.241-.01-.359A5.537,5.537,0,0,0,13.538,49.3Z" transform="translate(0 -48)" fill="#f8f8f8" />
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="#" class="social-item">
                            <svg id="instagram-logo" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                                <path id="Path_2312" data-name="Path 2312" d="M9.412,0H3.587A3.592,3.592,0,0,0,0,3.588V9.412A3.592,3.592,0,0,0,3.587,13H9.412A3.592,3.592,0,0,0,13,9.412V3.588A3.592,3.592,0,0,0,9.412,0Zm2.434,9.412a2.437,2.437,0,0,1-2.434,2.434H3.587A2.437,2.437,0,0,1,1.153,9.412V3.588A2.437,2.437,0,0,1,3.587,1.153H9.412a2.437,2.437,0,0,1,2.434,2.434V9.412Z" transform="translate(0)" fill="#f8f8f8" />
                                <path id="Path_2313" data-name="Path 2313" d="M44.318,40.97a3.35,3.35,0,1,0,3.35,3.35A3.354,3.354,0,0,0,44.318,40.97Zm0,5.546a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,44.318,46.516Z" transform="translate(-37.818 -37.82)" fill="#f8f8f8" />
                                <path id="Path_2314" data-name="Path 2314" d="M119.767,28.251a.845.845,0,1,0,.6.248A.849.849,0,0,0,119.767,28.251Z" transform="translate(-109.777 -26.079)" fill="#f8f8f8" />
                            </svg>
                        </a>
                        <a href="#" class="social-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12.422" viewBox="0 0 13 12.422">
                                <g id="linkedin-logo" transform="translate(0 -9.558)">
                                    <path id="LinkedIn" d="M13,17.174V21.98H10.214V17.5c0-1.126-.4-1.9-1.412-1.9a1.525,1.525,0,0,0-1.43,1.019,1.907,1.907,0,0,0-.092.679V21.98H4.493s.038-7.595,0-8.382H7.28v1.188l-.018.027H7.28v-.027A2.767,2.767,0,0,1,9.791,13.4C11.625,13.4,13,14.6,13,17.174ZM1.577,9.558a1.452,1.452,0,1,0-.037,2.9h.019a1.453,1.453,0,1,0,.018-2.9ZM.166,21.98H2.952V13.6H.166Z" fill="#f8f8f8" />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div class="subscribe-button">
                        <span>Subscribe to newstseller</span>
                        <a href="#">Subscribe</a>
                    </div>
                    <p>© 2019 Envato Elements Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
                </div>
            </div>
        </div>
        <div class="designer-container">
            <hr>
            <div class="designer-logo">Designed by <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="85" height="19" viewBox="0 0 85 19">
                    <defs>
                        <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 921 206">
                            <image width="921" height="206" xlink:href="data:image/png;base64,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" />
                        </pattern>
                    </defs>
                    <rect id="Image_5" data-name="Image 5" width="85" height="19" fill="url(#pattern)" />
                </svg>
            </div>
        </div>
    </footer>

@endsection
