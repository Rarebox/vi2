<?php
use App\Http\Controllers\FormSubmissionController;

// routes/web.php

Route::get('/admin/forms', [FormSubmissionController::class, 'index'])->name('admin.forms');
Route::post('/admin/submit-form', [FormSubmissionController::class, 'submitForm']);
Route::patch('/admin/update-form-status/{id}', [FormSubmissionController::class, 'updateFormStatus'])->name('admin.update-form-status');

