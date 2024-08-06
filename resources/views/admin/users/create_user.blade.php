@extends('layouts.admin')

@section('content')
<div class="container">
    <h1>Create User</h1>
    <form action="{{ route('admin.users.store_user') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" required>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="user_type">User Type</label>
            <select class="form-control" id="user_type" name="user_type">
                <option value="patient">Patient</option>
                <option value="employee">Employee</option>
            </select>
        </div>
        <div class="form-group">
            <label for="team_key">Team</label>
            <select class="form-control" id="team_key" name="team_key">
                @foreach($teams as $team)
                    <option value="{{ $team->key }}">{{ $team->name }}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Create User</button>
    </form>
</div>
@endsection
