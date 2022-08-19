<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $table = 'events';
    protected $fillable = [
        'title',
        'photo',
        'photo_two',
        'short_description',
        'event_mission',
        'event_vission',
        'facilities',
        'description',
        'date'
    ];
}
