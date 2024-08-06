<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Illuminate\Support\Facades\Log;

class FormSubmissionController extends Controller
{
    protected $database;

    public function __construct()
    {
        try {
            $factory = (new Factory)
                ->withServiceAccount(base_path(env('FIREBASE_CREDENTIALS')))
                ->withDatabaseUri(env('FIREBASE_DATABASE_URL'));
            $this->database = $factory->createDatabase();
        } catch (\Exception $e) {
            Log::error('Error initializing Firebase: ' . $e->getMessage());
        }
    }

    public function index()
    {
        try {
            $forms = $this->database->getReference('forms')->getValue();
            $formattedForms = [];

            if ($forms) {
                foreach ($forms as $key => $form) {
                    $formattedForms[] = array_merge(['id' => $key], $form);
                }
            }

            Log::info('Forms retrieved successfully.', ['forms' => $formattedForms]);

            return view('admin.forms.index', ['forms' => $formattedForms]);
        } catch (\Exception $e) {
            Log::error('Error retrieving forms: ' . $e->getMessage());
            return view('admin.forms.index', ['forms' => []]);
        }
    }

    public function submitForm(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date',
            'time' => 'required|in:Morgen,Mittag,Nachmittag',
            'reservationType' => 'required|string|max:255',
            'insuranceType' => 'nullable|string|max:255',
            'policyNumber' => 'nullable|string|max:255',
        ]);

        $formData = $validatedData;
        $formData['status'] = 'open'; // Default status

        try {
            $newFormRef = $this->database->getReference('forms')->push($formData);
            Log::info('Form submitted successfully.', ['form' => $formData, 'id' => $newFormRef->getKey()]);
            return response()->json(['message' => 'Form submitted successfully', 'id' => $newFormRef->getKey()], 201);
        } catch (\Exception $e) {
            Log::error('Error submitting form: ' . $e->getMessage());
            return response()->json(['message' => 'Error submitting form', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateFormStatus(Request $request, $id)
    {
        $status = $request->input('status');
        $validStatuses = ['open', 'closed'];

        if (!in_array($status, $validStatuses)) {
            return response()->json(['message' => 'Invalid status'], 400);
        }

        try {
            $this->database->getReference('forms/' . $id)->update(['status' => $status]);
            Log::info('Form status updated successfully.', ['id' => $id, 'status' => $status]);
            return redirect()->back()->with('success', 'Form status updated successfully');
        } catch (\Exception $e) {
            Log::error('Error updating form status: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error updating form status');
        }
    }

    public function getForms()
    {
        try {
            $forms = $this->database->getReference('forms')->getValue();
            $formattedForms = [];

            if ($forms) {
                foreach ($forms as $key => $form) {
                    $formattedForms[] = array_merge(['id' => $key], $form);
                }
            }

            Log::info('Forms retrieved successfully.', ['forms' => $formattedForms]);

            return response()->json($formattedForms);
        } catch (\Exception $e) {
            Log::error('Error retrieving forms: ' . $e->getMessage());
            return response()->json(['message' => 'Error retrieving forms', 'error' => $e->getMessage()], 500);
        }
    }
}
