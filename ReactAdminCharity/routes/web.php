<?php

use App\Http\Controllers\Charity;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Charity::class,'adminIndex'])->name('adminIndex');
Route::middleware('auth')->group(function(){
    Route::post('/login', [Charity::class,'login'])->name('login');
    Route::get('/dashboard', [Charity::class,'dashboard'])->name('dashboard');
    Route::get('/general', [Charity::class,'general'])->name('general');
    Route::put('/updateGeneral', [Charity::class,'updateGeneral'])->name('updateGeneral');
    Route::get('/causesCategory', [Charity::class,'causesCategory'])->name('causesCategory');
    Route::post('/saveCauesesCategory', [Charity::class,'saveCauesesCategory'])->name('saveCauesesCategory');
    Route::get('/cauesesCategoryTable', [Charity::class,'cauesesCategoryTable'])->name('cauesesCategoryTable');
    Route::get('/editCauesesCategory/{id}', [Charity::class,'editCauesesCategory'])->name('editCauesesCategory');
    Route::put('/updateCauesesCategory/{id}', [Charity::class,'updateCauesesCategory'])->name('updateCauesesCategory');
    Route::delete('/deleteCaueseCategory/{id}', [Charity::class,'deleteCaueseCategory'])->name('deleteCaueseCategory');
    Route::get('/causesForm',[Charity::class,'causesForm'])->name('causesForm');
    Route::post('/saveCauses',[Charity::class,'saveCauses'])->name('saveCauses');
    Route::get('/causesTable',[Charity::class,'causesTable'])->name('causesTable');
    Route::get('/editCaueses/{id}',[Charity::class,'editCaueses'])->name('editCaueses');
    Route::put('/updateCauses/{id}',[Charity::class,'updateCauses'])->name('updateCauses');
    Route::delete('/deleteCauese/{id}',[Charity::class,'deleteCauese'])->name('deleteCauese');
    Route::get('/awarnessAreaForm',[Charity::class,'awarnessAreaForm'])->name('awarnessAreaForm');
    Route::post('/saveAwarnessArea',[Charity::class,'saveAwarnessArea'])->name('saveAwarnessArea');
    Route::get('/awarnessAreaTable',[Charity::class,'awarnessAreaTable'])->name('awarnessAreaTable');
    Route::get('/editAwarnessArea/{id}',[Charity::class,'editAwarnessArea'])->name('editAwarnessArea');
    Route::put('/updateAwarnessArea/{id}',[Charity::class,'updateAwarnessArea'])->name('updateAwarnessArea');
    Route::delete('/deleteAwarnessArea/{id}',[Charity::class,'deleteAwarnessArea'])->name('deleteAwarnessArea');
    Route::get('/getVolunteers',[Charity::class,'getVolunteers'])->name('getVolunteers');
    Route::get('/eventForm',[Charity::class,'eventForm'])->name('eventForm');
    Route::post('/eventSave',[Charity::class,'eventSave'])->name('eventSave');
    Route::get('/eventTable',[Charity::class,'eventTable'])->name('eventTable');
    Route::get('/eventEdit/{id}',[Charity::class,'eventEdit'])->name('eventEdit');
    Route::put('/updateEvent/{id}',[Charity::class,'updateEvent'])->name('updateEvent');
    Route::delete('/deleteEvent/{id}',[Charity::class,'deleteEvent'])->name('deleteEvent');
    Route::get('/donation',[Charity::class,'donation'])->name('donation');
    Route::delete('/deleteDonation/{id}',[Charity::class,'deleteDonation'])->name('deleteDonation');


});


Auth::routes(['register'=>false]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
