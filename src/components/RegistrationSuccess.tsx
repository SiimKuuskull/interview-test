// src/components/RegistrationSuccess.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

interface RegistrationData {
  fullName: string;
  email: string;
  password: string;
  subscribeNewsletter: boolean;
  acceptTerms: boolean;
  gender: string;
  age: number;
  selectedDeposit: number;
}

const RegistrationSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

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
    <div style={styles.container}>
      <h2>Registration Successful!</h2>
      <p><strong>Full Name:</strong> {fullName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
      <p><strong>Subscribed to Newsletter:</strong> {subscribeNewsletter ? 'Yes' : 'No'}</p>
      <p><strong>Accepted Terms & Conditions:</strong> {acceptTerms ? 'Yes' : 'No'}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Age:</strong> {age}</p>

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
