interface StyleProps {
  [key: string]: React.CSSProperties;
}

 export const styles: StyleProps = {
  body: {
    backgroundColor: '#1b1f38',
    color: '#ffffff',
  },
  container: {
    width: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#38395b',
    color: '#ffffff',
    fontFamily: 'Poppins sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    color: '#ffffff',
    fontFamily: 'Poppins sans-serif',
    fontSize:'13px',
    fontWeight:'bold',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  input: {
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#353b5b',
    color: '#ffffff', 
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#c5e900',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '10px',
  },
  depositButton: {
    padding: '8px 12px',
    cursor: 'pointer',
    backgroundColor: '#1c203b',
    color: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    transition: 'background 0.1s ease, border 0.1s ease',
  },
  activeDeposit: {
    backgroundColor: '#353b5b',
    border: '1px solid #c5e900',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5px',
    gap: '10px',
  },
};

export default styles;
