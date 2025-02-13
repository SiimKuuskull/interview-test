
import React, { useState, FormEvent, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';


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
    <div data-testid={'registration-form-container'} style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {error && <p data-testid={'registration-error'} style={styles.error}>{error}</p>}

        <div style={styles.inputGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            data-testid={'registration-full-name'}
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
            data-testid={'registration-email'}
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
            data-testid={'registration-password'}
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
            data-testid={'registration-confirm-password'}
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
          <div data-testid={'registration-gender-radio'} style={styles.radioContainer}>
            <label>
              <input
                data-testid={'registration-gender-male'}
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
                data-testid={'registration-gender-female'}
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
            data-testid={'registration-select-age'}
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

                <h3>Deposit Amount:</h3>
        <div data-testid={'registration-deposit-selection'}style={styles.buttonGroup}>
          <button
            data-testid={'registration-deposit-button-50'}
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
              data-testid={'registration-checkbox-newsletter'}
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
              data-testid={'registration-checkbox-terms-conditions'}
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            I accept the Terms & Conditions
          </label>
        </div>

        <button data-testid={'registration-button-submit'} type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    cursor: 'pointer',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  depositButton: {
    padding: '8px 12px',
    cursor: 'pointer',
  },
  activeDeposit: {
    backgroundColor: '#8fbc8f',
    border: '1px solid #006400',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5px',
  },
};
