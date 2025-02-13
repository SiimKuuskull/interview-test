
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './RegistrationForm.css'


type Gender = 'male' | 'female';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();


  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

 
  const [gender, setGender] = useState<Gender>('male');


  const [age, setAge] = useState<number>(21);


  const [error, setError] = useState<string>('');


  const ages = Array.from({ length: 99 - 18 + 1 }, (_, i) => i + 18);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!fullName || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    /* TODO: Enable when live: if (!acceptTerms) {
      setError('You must accept the Terms & Conditions');
      return;
    } */

    setError('');

    navigate('/registration-success', {
      state: {
        fullName,
        email: 'vika.kalin@gmail.com',
        password,
        subscribeNewsletter,
        acceptTerms,
        gender,
        age,
        selectedDeposit,
      },
    });
  };
  
   const [selectedDeposit, setSelectedDeposit] = useState<number | null>(null);

   const handleSelectDeposit = (amount: number) => {
     setSelectedDeposit(amount);
   };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <div style={styles.inputGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Gender</label>
          <div style={styles.radioContainer}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label style={{ marginLeft: '20px' }}>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              Female
            </label>
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="age">Age</label>
          <select
            id="age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={styles.input}
          >
            {ages.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        <div data-testid={'registration-deposit-selection'}style={styles.buttonGroup}>
          <button
            type="button"
            style={{
              ...styles.depositButton,
              ...(selectedDeposit === 50 ? styles.activeDeposit : {}),
            }}
            onClick={() => handleSelectDeposit(50)}
          >
            €50
          </button>
          <button
            type="button"
            style={{
              ...styles.depositButton,
              ...(selectedDeposit === 100 ? styles.activeDeposit : {}),
            }}
            onClick={() => handleSelectDeposit(100)}
          >
            €100
          </button>
          <button
            type="button"
            style={{
              ...styles.depositButton,
              ...(selectedDeposit === 150 ? styles.activeDeposit : {}),
            }}
            onClick={() => handleSelectDeposit(150)}
          >
            €150
          </button>

        </div>

        <div style={styles.inputGroup}>
          <label>
            <input
              type="checkbox"
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
            Subscribe to our newsletter
          </label>
        </div>

        <div style={styles.inputGroup}>
          <label>
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            I accept the Terms & Conditions
          </label>
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <button  type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;