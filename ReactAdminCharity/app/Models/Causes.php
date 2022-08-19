<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Causes extends Model
{
    use HasFactory;
    protected $table = 'causes';
    protected $fillable = [
        'causes_category_id',
        'title',
        'total_amount_need',
        'total_funded',
        'finished_date',
        'photo',
        'posted_by',
        'posted_by_photo',
    ];

    function causesCategory(){
      return  $this->belongsTo(CausesCategory::class,'causes_category_id','id');
    }
}
