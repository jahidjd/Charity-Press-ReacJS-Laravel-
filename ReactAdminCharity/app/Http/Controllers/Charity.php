<?php

namespace App\Http\Controllers;

use App\Models\AwarnessArea;
use Illuminate\Http\Request;
use Auth;
use App\Models\GeneralTable;
use App\Models\CausesCategory;
use App\Models\Causes;
use App\Models\Volunteer;
use App\Models\Event;
use App\Models\Donation;

class Charity extends Controller
{
    function __construct(){
        $this->middleware('auth')->except('adminIndex','login');
    }
    
    function login(request $r){
        $credentials = $r->only('email', 'password');
        if (Auth::attempt($credentials)) {
            
            return redirect(route('dashboard'));
        }else{
            return redirect(route('adminIndex'));
        }
    }
    function adminIndex(){
        if(Auth::user()){
            return redirect(route('dashboard'));
        }
        return view('charity.index');
    }

    function dashboard(){
        
       if(Auth::user()){
        $data = Auth::user();
        return view('charity.dashboard',compact('data'));
        
       }
     
       return redirect(route('adminIndex'));
    }
    function general(){
        if(Auth::user()){
            $data = Auth::user();
            $general = GeneralTable::first();
          
           return view('charity.general',compact('data','general'));
           }
           
           return redirect(route('adminIndex'));
    }

    // update generale table
    
    function updateGeneral(Request $request){
        //  dd($request->file('logo'));
        $general = GeneralTable::find($request->id);
        
        $array=[];
        if($request->file('logo')){
            $logo = $request->file('logo');
            $logoPath = 'photo/';
            $photoName = 'logo'.date('Ymdhis').'.'.$logo->getClientOriginalExtension();
            $logo->move($logoPath,$photoName);
            $array['logo'] =$photoName;
        }
        if($request->file('home_mission_photo_one')){
            $HmOne = $request->file('home_mission_photo_one');
            $ath = 'photo/archivePhoto/';
            $photoName = 'home_mission_photo_one'.date('Ymdhis').'.'.$HmOne->getClientOriginalExtension();
            $HmOne->move($ath,$photoName);
            $array['home_mission_photo_one'] =$photoName;
        }
        if($request->file('home_mission_photo_two')){
            $HmTwo = $request->file('home_mission_photo_two');
            $ath = 'photo/archivePhoto/';
            $photoName = 'home_mission_photo_two'.date('Ymdhis').'.'.$HmTwo->getClientOriginalExtension();
            $HmTwo->move($ath,$photoName);
            $array['home_mission_photo_two'] =$photoName;
        }
        if($request->file('home_mission_photo_three')){
            $HmThree = $request->file('home_mission_photo_three');
            $ath = 'photo/archivePhoto/';
            $photoName = 'home_mission_photo_three'.date('Ymdhis').'.'.$HmThree->getClientOriginalExtension();
            $HmThree->move($ath,$photoName);
            $array['home_mission_photo_three'] =$photoName;
        }
        $array['home_mission_text'] = $request->home_mission_text;
        $array['school'] = $request->school;
        $array['hospital'] = $request->hospital;
        $array['volunteers'] = $request->volunteers;
        $array['home_big_text'] = $request->home_big_text;
        $array['footer_text'] = $request->footer_text;
        $array['home_mission_stratigy'] = $request->home_mission_stratigy;

        $general->update($array);
        return redirect(route('general'));
    }
// causesCategory
    function causesCategory(){
        if(Auth::user()){
            $data = Auth::user();
            return view('charity.causesCategoryForm',compact('data'));
            
           }
         
           return redirect(route('adminIndex'));
    }
    function saveCauesesCategory(request $request){
        $request->validate([
            'name'=>'required',
            'title'=>'required',
            'icon'=>'required',
            'description'=>'required',
            'photo'=>'required',
        ]);

        $array=[
            'name'=>$request->name,
            'title'=>$request->title,
            'icon'=>$request->icon,
            'description'=>$request->description,
            
        ];
        $photo = $request->file('photo');
        if($photo){
            $path = 'photo/causesCategory/';
            $photoName ='causesCategory '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo']=$photoName;
        }
        $save = CausesCategory::create($array);
        if($save){
            return redirect(route('causesCategory'));
        }

        
    }

    function cauesesCategoryTable(){
        if(Auth::user()){
            $data = Auth::user();
            $categoryData = CausesCategory::get();
        return view('charity.cauesesCategoryTable',compact('categoryData','data'));
        }
        return redirect(route('adminIndex'));
    }


    function editCauesesCategory($id){
        $categoryData  = CausesCategory::find($id);
        $data = Auth::user();
        return view('charity.editCauesesCategory',compact('categoryData','data'));

    }
    function updateCauesesCategory(request  $request,$id){
       $d = CausesCategory::find($id);
        $array=[
            'name'=>$request->name,
            'title'=>$request->title,
            'icon'=>$request->icon,
            'description'=>$request->description,
            
        ];
        
        if( $request->file('photo')){
            $photo =$request->file('photo');
            $path = 'photo/causesCategory/';
            $photoName ='causesCategory '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo']=$photoName;
        }
       $re = $d->update($array);
       if($re){
        return redirect(route('cauesesCategoryTable'));
       }

    }
    function deleteCaueseCategory(request $re, $id){
        $d = CausesCategory::find($id);
        $r= $d->delete();
        if($r){
            return redirect(route('cauesesCategoryTable'));
        }
    }

    // causes 
    function causesForm(){
        if(Auth::user()){
            $data = Auth::user();
            $categoryData = CausesCategory::get();
            return view('charity.causesForm',compact('data','categoryData'));
            
           }
         
           return redirect(route('adminIndex'));
    }
    function saveCauses(request $request){
         
        $request->validate([
            'title'=>'required',
            'total_amount_need'=>'required',
            // 'causes_category_id'=>'required',
            'finished_date'=>'required',
            'posted_by'=>'required',
            'photo'=>'required'
        ]);
        $array =[
            'title'=>$request->title,
            'total_amount_need'=>$request->total_amount_need,
            'finished_date'=>$request->finished_date,
            'posted_by'=>$request->posted_by
          
            
        ];
        $array['causes_category_id']=$request->causes_category_id_;

        if($request->file('photo')){
            $photo = $request->file('photo');
            $path = 'photo/causes/';
            $photoName = 'causes '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo']= $photoName;
        }
        if($request->file('posted_by_photo')){
            $photo = $request->file('posted_by_photo');
            $path = 'photo/causes/posted_by_photo/';
            $photoName = $request->posted_by.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['posted_by_photo']= $photoName;
        }
        $result = Causes::create($array);
        if($result){
            return redirect(route('causesForm'));
        }

    }

    function causesTable(){
        if(Auth::user()){
            $data = Auth::user();
            $causesData = Causes::get();
            return view('charity.causestable',compact('data','causesData'));
        }
        return redirect(route('adminIndex'));
    }

    function deleteCauese(request $re, $id){
        $causes = Causes::find($id);
        $e= $causes->delete();
        if($e){
            return redirect(route('causesTable'));
        }
    }
    function editCaueses($id){
        $causes = Causes::find($id);
        $data = Auth::user();
        $categoryData = CausesCategory::get();
        return view('charity.updateCauses',compact('data','causes','categoryData'));
    }

    function updateCauses(request $request, $id){
        $causes = Causes::find($id);
        $array =[
            'title'=>$request->title,
            'total_amount_need'=>$request->total_amount_need,
            'finished_date'=>$request->finished_date,
            'posted_by'=>$request->posted_by
          
            
        ];
        $array['causes_category_id']=$request->causes_category_id_;

        if($request->file('photo')){
            $photo = $request->file('photo');
            $path = 'photo/causes/';
            $photoName = 'causes '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo']= $photoName;
        }
        if($request->file('posted_by_photo')){
            $photo = $request->file('posted_by_photo');
            $path = 'photo/causes/posted_by_photo/';
            $photoName = $request->posted_by.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['posted_by_photo']= $photoName;
        }
        $re = $causes->update($array);
        if($re){
            return redirect(route('causesTable'));
        }
    }

    function awarnessAreaForm(){
        $data = Auth::user();
        return view('charity.awarnessAreaForm',compact('data'));
    }
    function saveAwarnessArea(request $request){
        $request->validate([
            'title'=>'required',
            'description'=>'required',
            'photo_one'=>'required',
            'photo_two'=>'required',
            'quotation'=>'required'
        ]);
        $array = [
            'title'=>$request->title,
            'description'=>$request->description,
            'quotation'=>$request->quotation
        ];
        if($request->file('photo_one')){
            $photo = $request->file('photo_one');
            $path = 'photo/awarnessArea/';
            $photoName = 'awarnessOne '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo_one']= $photoName;
        }
        if($request->file('photo_two')){
            $photo = $request->file('photo_two');
            $path = 'photo/awarnessArea/';
            $photoName = 'awarness '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo_two']= $photoName;
        }
        $re = AwarnessArea::create($array);
        if($re){
           return redirect(route('awarnessAreaForm'));
        }
    }
    function awarnessAreaTable(){
        $data = Auth::user();
        $awarnessData = AwarnessArea::get();
        return view('charity.awarnessAreaTable',compact('awarnessData','data'));
    }

    function editAwarnessArea($id){
        $data = Auth::user();
        $awarnessData = AwarnessArea::find($id);
        return view('charity.editAwarnessArea',compact('awarnessData','data'));
    }
    function updateAwarnessArea(Request $request, $id){
        $awarnessData = AwarnessArea::find($id);
        $array = [
            'title'=>$request->title,
            'description'=>$request->description,
            'quotation'=>$request->quotation
        ];
        if($request->file('photo_one')){
            $photo = $request->file('photo_one');
            $path = 'photo/awarnessArea/';
            $photoName = 'awarnessOne '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo_one']= $photoName;
        }
        if($request->file('photo_two')){
            $photo = $request->file('photo_two');
            $path = 'photo/awarnessArea/';
            $photoName = 'awarness '.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo_two']= $photoName;
        }
         $re =  $awarnessData->update($array);
         if($re){
            return redirect(route('awarnessAreaTable'));
         }

    }
    function deleteAwarnessArea(request $re, $id){
        $awarnessData = AwarnessArea::find($id);
        $re = $awarnessData->delete();
        if($re){
            return redirect(route('awarnessAreaTable'));
         }
    }
    function getVolunteers(){
        if(Auth::user()){
            $data = Auth::user();
            $volunteer = Volunteer::get();
            return view('charity.volunteer',compact('data','volunteer'));
        }
        return redirect(route('adminIndex'));
    }
    function eventForm(){
        if(Auth::user()){
            $data = Auth::user();
            
            return view('charity.eventForm',compact('data'));
        }
        return redirect(route('adminIndex')); 
    }
    function eventSave(Request $request){
        $request->validate([
            'title'=>'required',
            'photo'=>'required',
            'photo_two'=>'required',
            'short_description'=>'required',
            'event_mission'=>'required',
            'event_vission'=>'required',
            'facilities'=>'required',
            'description'=>'required',
            'date'=>'required',
        ]);

        $array=[
            'title'=>$request->title,
            'short_description'=>$request->short_description,
            'event_mission'=>$request->event_mission,
            'event_vission'=>$request->event_vission,
            'facilities'=>$request->facilities,
            'description'=>$request->description,
            'date'=>$request->date,
            
        ];
        if($request->file('photo')){
            $photo = $request->file('photo');
            $path= 'photo/events/';
            $photoName = 'Events_cover_'.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo']=$photoName;
        }
        if($request->file('photo_two')){
            $photo = $request->file('photo_two');
            $path= 'photo/events/';
            $photoName = 'Events_big_'.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo_two']=$photoName;
        }
        $result = Event::create($array);
        if($result){
            return redirect(route('eventForm'));
        }
    }

    function eventTable(){
        if(Auth::user()){
            $data = Auth::user();
            $event = Event::get();
            return view('charity.eventTable',compact('data','event'));
        }
        return redirect(route('adminIndex'));
    }
    function eventEdit($id){
        if(Auth::user()){
            $data = Auth::user();
            $event = Event::find($id);
            return view('charity.eventEdit',compact('data','event'));
        }
        return redirect(route('adminIndex'));
    }
    function updateEvent(Request $request, $id){
        $event = Event::find($id);
        $array=[
            'title'=>$request->title,
            'short_description'=>$request->short_description,
            'event_mission'=>$request->event_mission,
            'event_vission'=>$request->event_vission,
            'facilities'=>$request->facilities,
            'description'=>$request->description,
            'date'=>$request->date,
            
        ];
        if($request->file('photo')){
            $photo = $request->file('photo');
            $path= 'photo/events/';
            $photoName = 'Events_cover_'.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo']=$photoName;
        }
        if($request->file('photo_two')){
            $photo = $request->file('photo_two');
            $path= 'photo/events/';
            $photoName = 'Events_big_'.date('Ymdhis').'.'.$photo->getClientOriginalExtension();
            $photo->move($path,$photoName);
            $array['photo_two']=$photoName;
        }
        $result = $event->update($array);
        if($result){
            return redirect(route('eventTable'));
        }
    }
    function deleteEvent($id){
        $event = Event::find($id);
        $result = $event->delete();
        if($result){
            return redirect(route('eventTable'));
        }

    }
    function donation(){
        if(Auth::user()){
            $data = Auth::user();
            $donation = Donation::get();
            return view('charity.donation',compact('data','donation'));
        }
        return redirect(route('adminIndex'));
    }
    function deleteDonation($id){
        $donation = Donation::find($id);
        $result = $donation->delete();
        if($result){
          return redirect(route('donation')); 
        }
    }

}
