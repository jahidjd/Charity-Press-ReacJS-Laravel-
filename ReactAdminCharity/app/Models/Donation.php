<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;
    protected $table = 'donations';
    protected $fillable = [
        'name',
        'address',
        'charity_address',
        'amount',
        'project_category',
        'date',
    ];

    function category(){
        return $this->belongsTo(CausesCategory::class,'project_category','id');
    }
}
