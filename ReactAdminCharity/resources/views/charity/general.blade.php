@extends('charity.layout')
@section('body')

<div id="app" class="app">

    @include('charity.header')

    @include('charity.menu')

    <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


    <div id="content" class="app-content">

        <div class="row">
            <div class="card-body">
                <h1>General Form</h1>
                <form action="{{route('updateGeneral')}}" method="POST" enctype="multipart/form-data">
                    @csrf 
                    @method('PUT')
                    <table class="table table-bordered">
                        <input type="hidden" value="{{$general->id}}" name="id">
                        <tr>
                            <th>Logo</th>
                            <td colspan="2">
                                <input type="file" class="form-control" name="logo">
                                <img src="{{url('photo/'.$general->logo)}}" alt="" width="
                                100px">
                            </td>
                            <th>Archive Photo 1</th>
                            <td colspan="2">
                                <input type="file" name="home_mission_photo_one" class="form-control">
                                <img src="{{url('photo/archivePhoto/'.$general->home_mission_photo_one)}}" alt="" width="
                                100px">
                            </td>
                        </tr>
                        <tr>
                            
                            <th>Archive Photo 2</th>
                            <td colspan="2">
                                <input type="file" name="home_mission_photo_two" class="form-control">
                                <img src="{{url('photo/archivePhoto/'.$general->home_mission_photo_two)}}" alt="" width="
                                100px">
                            </td>
                            <th>Archive Photo 3</th>
                            <td colspan="2">
                                <input type="file" name="home_mission_photo_three" class="form-control">
                                <img src="{{url('photo/archivePhoto/'.$general->home_mission_photo_three)}}" alt="" width="
                                100px">
                            </td>
                        </tr>
                        <tr>
                            <th>Home Mission Text</th>
                            <td colspan="5">
                                <textarea name="home_mission_text" id="" cols="8" rows="3" class="form-control">{{$general->home_mission_text}}</textarea>
                            </td>
                            
                        </tr>
                        <tr>
                            <th>Home Strategy</th>
                            <td colspan="5">
                                <textarea name="home_mission_stratigy" id="" cols="8" rows="3" class="form-control">{{$general->home_mission_stratigy}}</textarea>
                            </td>
                            
                        </tr>
                        <tr>
                            <th>School</th>
                            <td><input type="text" name="school" class="form-control" value="{{$general->school}}"></td>
                            <th>Hospital</th>
                            <td><input type="text" name="hospital" class="form-control" value="{{$general->hospital}}"></td>
                            <th>Volunteers</th>
                            <td><input type="text" name="volunteers" class="form-control" value="{{$general->volunteers}}"></td>
                        </tr>
                        <tr>
                            <th>Home Big Text</th>
                            <td colspan="5">
                                <textarea name="home_big_text" id="" cols="10" rows="5" class="form-control">{{$general->home_big_text}}</textarea>
                            </td>
                            
                        </tr>
                        <tr>
                            <th>Footer Text</th>
                            <td colspan="5">
                                <textarea name="footer_text" id="" cols="8" rows="3" class="form-control">{{$general->footer_text}}</textarea>
                            </td>
                            
                        </tr>
                        <tr>
                            <td colspan="4"></td>
                            <td colspan="2"><input type="submit" class="btn btn-info form-control" value="Update" ></td>
                        </tr>
                    </table>
                </form>
                
            </div>

        </div>

    </div>


    <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>


    <div class="app-theme-panel">
        <div class="app-theme-panel-container">
            <a href="javascript:;" data-toggle="theme-panel-expand" class="app-theme-toggle-btn"><i class="bi bi-sliders"></i></a>
            <div class="app-theme-panel-content">
                <div class="small fw-bold text-white mb-1">Theme Color</div>
                <div class="card mb-3">

                    <div class="card-body p-2">

                        <div class="app-theme-list">
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-pink" data-theme-class="theme-pink" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Pink">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-red" data-theme-class="theme-red" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Red">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-warning" data-theme-class="theme-warning" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Orange">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-yellow" data-theme-class="theme-yellow" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Yellow">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-lime" data-theme-class="theme-lime" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Lime">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-green" data-theme-class="theme-green" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Green">&nbsp;</a></div>
                            <div class="app-theme-list-item active"><a href="javascript:;" class="app-theme-list-link bg-teal" data-theme-class="" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-info" data-theme-class="theme-info" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cyan">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-primary" data-theme-class="theme-primary" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Blue">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-purple" data-theme-class="theme-purple" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Purple">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-indigo" data-theme-class="theme-indigo" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Indigo">&nbsp;</a></div>
                            <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-gray-100" data-theme-class="theme-gray-200" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Gray">&nbsp;</a></div>
                        </div>

                    </div>


                    <div class="card-arrow">
                        <div class="card-arrow-top-left"></div>
                        <div class="card-arrow-top-right"></div>
                        <div class="card-arrow-bottom-left"></div>
                        <div class="card-arrow-bottom-right"></div>
                    </div>

                </div>
                <div class="small fw-bold text-white mb-1">Theme Cover</div>
                <div class="card">

                    <div class="card-body p-2">

                        <div class="app-theme-cover">
                            <div class="app-theme-cover-item active">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-1.jpg);" data-theme-cover-class="" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-2.jpg);" data-theme-cover-class="bg-cover-2" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 2">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-3.jpg);" data-theme-cover-class="bg-cover-3" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 3">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-4.jpg);" data-theme-cover-class="bg-cover-4" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 4">&nbsp;</a>
                            </div>
                            <div class="app-theme-cover-item">
                                <a href="javascript:;" class="app-theme-cover-link" style="background-image: url(assets/img/cover/cover-thumb-5.jpg);" data-theme-cover-class="bg-cover-5" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 5">&nbsp;</a>
                            </div>
                        </div>

                    </div>


                    <div class="card-arrow">
                        <div class="card-arrow-top-left"></div>
                        <div class="card-arrow-top-right"></div>
                        <div class="card-arrow-bottom-left"></div>
                        <div class="card-arrow-bottom-right"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>

@endsection

