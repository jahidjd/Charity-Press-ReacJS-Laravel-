<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GeneralTable;
use App\Models\CausesCategory;
use App\Models\Causes;
use App\Models\AwarnessArea;
use App\Models\Volunteer;
use App\Models\Donation;
use App\Models\Event;


class ApiController extends Controller
{
    function generalList(){
        $general = GeneralTable::first();
        return response()->json([
            'status'=>'success',
            'data' =>$general
        ]);
    }
    function causesCategory(){
        $causesCategory = CausesCategory::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$causesCategory
        ]);
    }
    function causesData(){
        $causesData = Causes::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$causesData
        ]);
    }
    function awarnessArea(){
        $awarnessArea = AwarnessArea::orderBy('id','DESC')->get();
        return response()->json([
            'status'=>'success',
            'data'=>$awarnessArea
        ]);
    }
    function submitVolunteer(Request $request){
    //    return response()->json([
    //     var_dump($request->cv)
    // ]);
        $array = [
            'name' =>$request->name,
            'email' =>$request->email,
            'branch' =>$request->branch,
            'message' =>$request->message,
        ];
        if($request->file('cv')){
            $cv = $request->file('cv');
            $path = 'photo/volunteerCv/';
            $fileName = $request->name.date('Ymdhis').'.'.$cv->getClientOriginalExtension();
            $cv->move($path,$fileName);
            $array['cv']=$fileName;
        }
        $result = Volunteer::create($array);
        if($result){
            return response()->json([
                'result'=>'success',
                'data'=>$result
            ]);
        }
    }

    function addDonation(Request $request){
       $donation = Donation::create($request->all());
       if($donation){
        return response()->json([
            'status'=>'success',
            'data'=>$donation
        ]);
       }
    }
    function event(){
        $event = Event::get();
        if($event){
            return response()->json([
                'status'=>'success',
                'data'=>$event
            ]);
        }
    }
}
