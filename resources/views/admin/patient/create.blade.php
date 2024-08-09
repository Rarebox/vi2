@extends('admin.layouts.app')
@section('panel')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <form action="{{ route('admin.patient.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('POST')
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <label for="name" class="font-weight-bold">@lang('Surname') <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="name" maxlength="40"
                                        value="{{ old('name') }}" name="name" placeholder="@lang('Enter Surname')" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <label for="name" class="font-weight-bold">@lang('Name') <span
                                            class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="username" maxlength="40"
                                        value="{{ old('name') }}" name="username" placeholder="@lang('Enter Name')"
                                        required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <label for="email" class="font-weight-bold">@lang('Email') <span
                                            class="text-danger">*</span></label>
                                    <input type="email" class="form-control" id="email" name="email"
                                        value="{{ old('email') }}" placeholder="@lang('Enter Email')" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="form-group">
                                    <label for="password" class="font-weight-bold">@lang('Password') <span
                                            class="text-danger">*</span></label>
                                    <input type="password" class="form-control" id="password" name="password"
                                        placeholder="@lang('Enter Password')" required>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn--primary btn-block">@lang('Create Patient')</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
