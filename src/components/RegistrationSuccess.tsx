// src/components/RegistrationSuccess.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

interface RegistrationData {
  fullName: string;
  email: string;
  password: string;  // Display for demo only
  subscribeNewsletter: boolean;
  acceptTerms: boolean;
  gender: string;
  age: number;
  selectedDeposit: number;
}

const RegistrationSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // In a real-world scenario, you might handle state not existing 
  // (e.g., user directly visited /registration-success).
  // We'll assume state is properly passed.
  const {
    fullName,
    email,
    password,
    subscribeNewsletter,
    acceptTerms,
    gender,
    age,
    selectedDeposit
  } = (state as RegistrationData) || {};

  // Optional: If no state found, you could redirect the user back to the form.
  if (!fullName || !email) {
    return (
      <div style={styles.container}>
        <h2>No registration data found!</h2>
        <button style={styles.button} onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div data-testid={'registration-success-container'} style={styles.container}>
      <h2 >Registration Successful!</h2>
      <p data-testid={'registration-success-full-name'}><strong>Full Name:</strong> {fullName}</p>
      <p data-testid={'registration-success-email'}><strong>Email:</strong> {email}</p>
      <p data-testid={'registration-success-password'}><strong>Password (demo only):</strong> {password}</p>
      <p data-testid={'registration-success-newsletter'}><strong>Subscribed to Newsletter:</strong> {subscribeNewsletter ? 'Yes' : 'No'}</p>
      <p data-testid={'registration-success-terms-conditions'}><strong>Accepted Terms & Conditions:</strong> {acceptTerms ? 'Yes' : 'No'}</p>
      <p data-testid={'registration-success-gender'}><strong>Gender:</strong> {gender}</p>
      <p data-testid={'registration-success-age'}><strong>Age:</strong> {age}</p>

      <h3>
        {selectedDeposit
          ? `Deposit: €${selectedDeposit}`
          : 'No deposit made'}
      </h3>

      <button style={styles.button} onClick={() => navigate('/')}>
        Return to Registration
      </button>
    </div>
  );
};

export default RegistrationSuccess;

// --- STYLES ---
const styles: { [key: string]: CSSProperties } = {
  container: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
  },
  button: {
    padding: '10px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};
