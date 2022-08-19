@extends('charity.layout')
@section('body')

<div id="app" class="app">

@include('charity.header')

        @include('charity.menu')

<button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


<div id="content" class="app-content">

    <div class="row">

        <div class="col-xl-12 col-lg-12">

            <div class="card mb-3">

                <div class="card-body"> 
                    <h1>Add Event</h1>
                    <a href="{{route('eventTable')}}" class="btn" style="color: white">Event List</a>
                    <form action="{{route('eventSave')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <table class="table table-bordered">
                            <tr>
                                <th>Title</th>
                                <th>
                                    <input type="text" name="title" class="form-control" value="{{old('title')}}" placeholder="Title">
                                    @error('title')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </th>
                                <th>Photo One</th>
                                <td>
                                    <input type="file" name="photo" class="form-control">
                                    @error('photo')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                            </tr>
                            <tr>
                                <th>Photo Two</th>
                                <td>
                                    <input type="file" name="photo_two" class="form-control">
                                    @error('photo_two')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                                <td>Date</td>
                                <th>
                                    <input type="date" name="date" class="form-control" value="{{old('date')}}">
                                    @error('date')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </th>
                            </tr>
                            <tr>
                                <th>Short Description</th>
                                <td colspan="3">
                                    <textarea name="short_description" id="" cols="10" rows="3" class="form-control" placeholder="Short Description">{{old('short_description')}}</textarea>
                                    @error('short_description')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                            </tr>
                            <tr>
                                <th>Event Mission</th>
                                <td colspan="3">
                                    <textarea name="event_mission" id="" cols="10" rows="3" class="form-control" placeholder="Event Mission">{{old('event_mission')}}</textarea>
                                    @error('event_mission')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                            </tr>
                            <tr>
                                <th>Event Vission</th>
                                <td colspan="3">
                                    <textarea name="event_vission" id="" cols="10" rows="3" class="form-control" placeholder="Event Vission">{{old('event_vission')}}</textarea>
                                    @error('event_vission')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                            </tr>
                            <tr>
                                <th>Event Facilities</th>
                                <td colspan="3">
                                    <textarea name="facilities" id="" cols="10" rows="3" class="form-control" placeholder="Event Facilities ">{{old('facilities')}}</textarea>
                                    @error('facilities')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                            </tr>
                            <tr>
                                <th>Event Description</th>
                                <td colspan="3">
                                    <textarea name="description" id="" cols="15" rows="5" class="form-control" placeholder="Event Description">{{old('description')}}</textarea>
                                    @error('description')
                                        <span style="color: red">{{$message}}</span>
                                    @enderror
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td><input type="submit" class="btn btn-info form-control"></td>
                            </tr>
                        </table>
                    </form>
                </div>
              
            </div>

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
{{--   --}}