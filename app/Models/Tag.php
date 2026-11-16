<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public static $returnable = ['id', 'title', 'description'];
    //

    public function getTagFrontPage(): Collection
    {
        return $this->where('is_active', true)->where('is_hidden', false)->where('is_front_page_mask', false)->get(static::$returnable);
    }

}
