import React from 'react';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Delete Your Account</h1>
        <p className="text-lg mb-6">
          To delete your Stellar account, please open the app and follow these steps:
        </p>
        <ul className="text-left list-disc list-inside mb-6 text-gray-700">
          <li>Open the Stellar app</li>
          <li>Go to <strong>Settings</strong></li>
          <li>Select <strong>Delete Account</strong></li>
          <li>Confirm your decision</li>
        </ul>
        <p className="text-sm text-gray-500">
          If you no longer have access to the app or need assistance, please contact us at
          <a href="mailto:support@stellarapp.com" className="text-blue-500 underline ml-1">support@stellarapp.com</a>
        </p>
      </div>
    </div>
  );
}

