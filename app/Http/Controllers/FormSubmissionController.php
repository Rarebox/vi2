<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FormSubmissionController extends Controller
{
    public function index()
    {
        try {
            $forms = file_get_contents('https://us-central1-vita--crm.cloudfunctions.net/getForms');
            $forms = json_decode($forms, true);
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

    public function updateFormStatus(Request $request, $id)
    {
        $status = $request->input('status');
        $validStatuses = ['open', 'closed'];

        if (!in_array($status, $validStatuses)) {
            return response()->json(['message' => 'Invalid status'], 400);
        }

        try {
            $url = 'https://us-central1-vita--crm.cloudfunctions.net/updateFormStatus';
            $data = json_encode(['id' => $id, 'status' => $status]);

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Content-Length: ' . strlen($data)
            ]);

            $result = curl_exec($ch);
            curl_close($ch);

            if ($result) {
                Log::info('Form status updated successfully.', ['id' => $id, 'status' => $status]);
                return redirect()->back()->with('success', 'Form status updated successfully');
            } else {
                throw new \Exception('Failed to update form status.');
            }
        } catch (\Exception $e) {
            Log::error('Error updating form status: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error updating form status');
        }
    }
}

