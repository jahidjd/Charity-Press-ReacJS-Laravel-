<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CausesCategory extends Model
{
    use HasFactory;
    protected $table = 'causes_categories';
    protected $fillable =[
        'name',
        'title',
        'icon',
        'photo',
        'description'
    ];
    function causes(){
       return  $this->hasMany(Causes::class,'id','causes_category_id');
    }
    function project(){
        return $this->hasMany(Donation::class,'id','project_category');
    }
}
