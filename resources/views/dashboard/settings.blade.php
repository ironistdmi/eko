@extends('layouts.master')

@section('content')

<div class="d-flex fullscreen-page">
            <aside class="profile-aside">
                <h3>Dashboard</h3>
                <div class="aside-navigation">
                    <a class="" href="{{ route('account') }}">Profile</a>
                    <a class="" href="{{ route('account.products') }}">My products</a>
                    <a class="" href="{{ route('account.reviews') }}">All reviews</a>
                    <a class="active" href="{{ route('profile.edit') }}">Settings</a>
                    <hr>
                    <a href="{{ route('logout') }}">Log out</a>
                </div>
            </aside>
            <div class="settings-page fullscreen-block">
                <a class="toggle-dashboard" href="#">Dashboard <br> <svg xmlns="http://www.w3.org/2000/svg" width="33.312" height="13.934" viewBox="0 0 33.312 13.934">
                        <g id="Group_997" data-name="Group 997" transform="translate(0)">
                            <path id="Path_2079" data-name="Path 2079" d="M180.414,565.632l.428.428-.865.875L173,559.967,179.977,553l.865.875-5.471,5.48h30.941v1.234H175.371Z" transform="translate(-173 -553)" fill="#fff" />
                        </g>
                    </svg>
                </a>
                <h2>Settings</h2>
                <div class="settings-container">
                    <div class="settings-wrapper">
                        <form action="{{ route('profile.edit.submit') }}" method='POST' id="settings_profile">
                            {{ csrf_field() }}
                            <label for="storeName-input">Store name</label>
                            <input name="store_name" value="{{ $shop->name }}" id="storeName-input" placeholder="Store name" type="text">
                            <button class="change-button" type="submit">Change</button>
                        
                            <label for="sellerName-input">Full name of seller</label>
                            <input name="name" value="{{$user->name}}" id="sellerName-input" placeholder="Seller name" type="text">
                            <button class="change-button" type="submit">Change</button>
                        
                            <label for="description-input" class="title-tooltip tooltip-relative">
                                <span>Store Descrisption</span>
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
                            <textarea name="description" class="count-description" id="description-input" maxlength="250" rows="5">
                                {{$shop->description}}
                            </textarea>
                            <div class="button-container">
                                <span><span class="count-description-number">0</span> symbols</span>
                                <button class="change-button" type="submit">Change</button>
                            </div>
                        <div class="form-group-container">
                            <div class="form-group-item col-6 pl-0">
                                <label for="country-input" class="d-block">Country</label>
                                <select name="country_id" class="bs-custom-select w-100" title="Choose country" id="country-input">
                                    @foreach($countries as $key => $val)
                                    @php $selected = ($key==$address->country_id)?'selected':''; @endphp 
                                    <option value="{{ $key }}" {{ $selected }}>{{ $val }}</option>
                                    @endforeach
                                </select>                                
                                <button class="change-button" type="submit">Change</button>
                            </div>
                            <div class="form-group-item col-6 pr-0">
                                <label for="city-input">City</label>
                                <input type="text" name="city" value="{{$address->city}}" placeholder="you city">
                                <button class="change-button" type="submit">Change</button>
                            </div>
                        </div>
                        <div class="form-group-container mt-5">
                            <div class="form-group-item col-6 pl-0">
                                <label for="street-input">Street</label>
                                <input name="address_line_1" value="{{$address->address_line_1}}" id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                                <button class="change-button" type="submit">Change</button>
                            </div>
                            <div class="form-group-item col-6 pr-0">
                                <label for="building-input">Building</label>
                                <input name="address_line_2" value="{{$address->address_line_2}}" id="building-input" placeholder="Example: 34/A" type="text">
                                <button class="change-button" type="submit">Change</button>
                            </div>
                        </div>

                            <label for="email-input">Email</label>
                            <input name="email" value="{{$user->email}}" id="email-input" placeholder="Example: email@mail.com" type="text">
                            <button class="change-button" type="submit">Change</button>

                            <label for="phone-input">Phone number</label>
                            <div class="form-wrapper">
                                <input name="phone_code" value="{{$address->phone_code}}" type="text" class="form-control country-code-anchor" id="countryCode" value="" placeholder="" tabindex="-1">
                                <input name="phone" value="{{$address->phone}}" id="phone-input" placeholder="66-997-8629" type="text">
                            </div>
                            <button class="change-button" type="submit">Change</button>

                        <div class="checkbox-container">
                            <div class="checkbox-item">
                                <input name="to_chat" value="0" type="hidden">
                                <input name="to_chat" value="1" id="checkbox-chat" type="checkbox">
                                <label for="checkbox-chat"></label>
                                <span>I’m ready to chat</span>
                            </div>
                            <div class="checkbox-item">
                                <input name="to_call" value="0" type="hidden">
                                <input name="to_call" value="1" id="checkbox-call" type="checkbox">
                                <label for="checkbox-call"></label>
                                <span>I’m ready to have calls</span>
                            </div>
                        </div>
                        <h2>Additional Information</h2>
                        <div class="checkbox-container tooltip-relative">
                            <div class="checkbox-item">
                                <input name="bio" value="0" type="hidden">
                                <input name="bio" value="1" id="checkbox-bio" type="checkbox">
                                <label for="checkbox-bio"></label>
                                <span class="title-tooltip"><span>Create bio-materials</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.486" height="15" viewBox="0 0 12.486 15">
                                        <g id="noun_Info_2397918" transform="translate(-105.498 -41.5)">
                                            <g id="Group_1005" data-name="Group 1005" transform="translate(105.498 41.5)">
                                                <path id="Path_2100" data-name="Path 2100" d="M105.595,49.765c-.076-1.847-.142-3.744-.057-5.594l6.2-2.671,6.2,2.671c.085,1.85.019,3.747-.057,5.594-.125,3.021-3.645,5.523-6.146,6.735C109.24,55.288,105.719,52.787,105.595,49.765Zm6.974-1.34v3.769a.828.828,0,0,1-1.656,0V48.425A.828.828,0,0,1,112.569,48.425Zm-.828-3.441a.871.871,0,1,1-.871.871A.871.871,0,0,1,111.741,44.985ZM106.7,49.722c.115,2.793,4.019,5.008,5.037,5.54,1.018-.531,4.922-2.747,5.037-5.54.107-2.593.1-4.159.083-4.806l-5.12-2.2-5.12,2.2C106.607,45.563,106.6,47.129,106.7,49.722Z" transform="translate(-105.498 -41.5)" fill="#00a757" />
                                            </g>
                                        </g>
                                    </svg>
                                    <div class="tooltip-container tooltip-top">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata </p>
                                    </div>
                                </span>
                            </div>
                        </div>
                      </form>
                    </div>
                    <div class="change-success">Information Saved</div>
                </div>
            </div>
        </div>
        

@endsection
