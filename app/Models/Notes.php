<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    use HasFactory;

    public static function search(string $search) {
        $columns = ["id", "text", "created_at", "updated_at"];

        if (empty(trim($search))) {
            return static::select($columns)->get();
        }
        else {
            $fuzzySearch = implode("%", str_split($search)); // e.g. test -> t%e%s%t
            $fuzzySearch = "%$fuzzySearch%"; // test -> %t%e%s%t%s%

            return static::select($columns)->where("text", "like", $fuzzySearch)->get();
        }
    }
}
