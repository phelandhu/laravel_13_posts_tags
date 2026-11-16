<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;
    //

    public function getTagFrontPage(): Collection
    {
        return $this->where('is_active', true)->where('is_hidden', false)->where('is_front_page_mask', false)->get();
    }

}
