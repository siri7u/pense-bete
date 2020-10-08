
@extends('layouts.app')

@section('content')

   <div class="container">
    <div class="input-group">
        <input type="text" class="form-control search" placeholder="Search this blog">
        <div class="input-group-append">
        <button class="btn btn-secondary" type="button">
            <i class="fa fa-search"></i>
        </button>
        </div>
    </div>

    {{-- <p class="mt-4 text-center"><a href=""> Nouvelle note <i class="fa fa-plus-square"></i> </a></p> --}}
        <div class="list-group">
        </div>
   </div>
   <script src="/js/notes.js"></script>
@endsection
