<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralTable extends Model
{
    use HasFactory;
    protected $table = 'general_tables';
    protected $fillable = [
        'logo',
        'home_mission_text',
        'home_mission_photo_one',
        'home_mission_photo_two',
        'home_mission_photo_three',
        'home_mission_stratigy',
        'school',
        'hospital',
        'volunteers',
        'home_big_text',
        'footer_text'
    ];
}
