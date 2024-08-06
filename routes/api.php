<?php
use App\Http\Controllers\FormSubmissionController;

Route::post('/submit-form', [FormSubmissionController::class, 'submitForm']);
Route::patch('/update-form-status/{id}', [FormSubmissionController::class, 'updateFormStatus']);
Route::get('/forms', [FormSubmissionController::class, 'getForms']);
