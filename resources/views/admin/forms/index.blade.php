@extends('layouts.admin')

@section('content')
<div class="container">
    <h1>Manage Forms</h1>
    <table class="table">
        <thead>
            <tr>
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
        <tbody id="formsTableBody">
            <!-- Forms will be dynamically populated here -->
        </tbody>
    </table>
</div>
<script>
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/getForms')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('formsTableBody');
            tableBody.innerHTML = '';

            Object.keys(data).forEach(key => {
                const form = data[key];
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${form.firstName}</td>
                    <td>${form.lastName}</td>
                    <td>${form.email}</td>
                    <td>${form.date}</td>
                    <td>${form.time}</td>
                    <td>${form.reservationType}</td>
                    <td>${form.insuranceType}</td>
                    <td>${form.policyNumber}</td>
                    <td>${form.status}</td>
                    <td>
                        <button onclick="updateFormStatus('${key}', 'open')">Open</button>
                        <button onclick="updateFormStatus('${key}', 'closed')">Close</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        });
});

function updateFormStatus(id, status) {
    fetch(`/api/updateFormStatus/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload(); // Refresh the page to reflect changes
    });
}
</script>
@endsection
