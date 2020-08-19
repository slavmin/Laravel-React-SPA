<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cart', 'full_name', 'address', 'delivery_cost',
    ];

    protected $casts = [
        'cart' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
