<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AwarnessArea extends Model
{
    use HasFactory;
    protected $table = 'awarness_areas';
    protected $fillable =[
        'title',
        'description',
        'photo_one',
        'photo_two',
        'quotation'
    ];
}
