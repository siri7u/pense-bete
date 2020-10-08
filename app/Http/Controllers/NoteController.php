<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index(){
        $res = \App\Models\Notes::All();
        return view('notes.index', ['data' => $res->toArray()]);
    }

    public function ajaxSearch(Request $request)
    {
        return response()->json(\App\Models\Notes::search($request->input("search")));
    }
}
