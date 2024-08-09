@extends('admin.layouts.master')

@section('content')
    <div class="page-wrapper default-version">
        @include('admin.partials.sidenav')
        @include('admin.partials.topnav')

        <div class="body-wrapper">
            <div class="bodywrapper__inner">
                @include('admin.partials.breadcrumb')

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="text-2xl font-bold mb-4">Forms Management</h1>
                                @if (session('success'))
                                    <div class="alert alert-success">
                                        {{ session('success') }}
                                    </div>
                                @endif
                                @if (session('error'))
                                    <div class="alert alert-danger">
                                        {{ session('error') }}
                                    </div>
                                @endif
                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Reservation Type</th>
                                                <th>Insurance Type</th>
                                                <th>Policy Number</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($forms as $form)
                                                <tr>
                                                    <td>{{ $loop->iteration }}</td>
                                                    <td>{{ isset($form['firstName']) ? $form['firstName'] : 'N/A' }}</td>
                                                    <td>{{ isset($form['lastName']) ? $form['lastName'] : 'N/A' }}</td>
                                                    <td>{{ isset($form['email']) ? $form['email'] : 'N/A' }}</td>
                                                    <td>{{ isset($form['date']) ? $form['date'] : 'N/A' }}</td>
                                                    <td>{{ isset($form['time']) ? $form['time'] : 'N/A' }}</td>
                                                    <td>{{ isset($form['reservationType']) ? $form['reservationType'] : 'N/A' }}
                                                    </td>
                                                    <td>{{ isset($form['insuranceType']) ? $form['insuranceType'] : 'N/A' }}
                                                    </td>
                                                    <td>{{ isset($form['policyNumber']) ? $form['policyNumber'] : 'N/A' }}
                                                    <td>{{ isset($form['status']) ? $form['status'] : 'N/A' }}
                                                    </td>
                                                    <td>
                                                        <form action="{{ route('admin.update-form-status', $form['id']) }}"
                                                            method="POST">
                                                            @csrf
                                                            @method('PATCH')
                                                            <select name="status" onchange="this.form.submit()">
                                                                <option value="open"
                                                                    {{ isset($form['status']) && $form['status'] == 'open' ? 'selected' : '' }}>
                                                                    Open</option>
                                                                <option value="closed"
                                                                    {{ isset($form['status']) && $form['status'] == 'closed' ? 'selected' : '' }}>
                                                                    Closed</option>
                                                            </select>
                                                        </form>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                </div>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div><!-- bodywrapper__inner end -->
        </div><!-- body-wrapper end -->
    </div>
@endsection
