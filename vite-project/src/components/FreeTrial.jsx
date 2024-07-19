import { useState } from 'react';
import classes from '../modules/FreeTrial.module.scss';

export default function FreeTrial() {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onClickHandler = () => {
    if (!validateEmail(value)) {
      setMessage('Please enter a valid email address');
    } else {
      setMessage('Email Recieved!');
      setValue('');
    }
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setMessage('');
  };

  return (
    <div className={classes['trial-wrapper']}>
      <h1 className={classes['main-title']}>Get early access today</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam praesentium eius reiciendis laborum <br /> aspernatur aut totam tempore nulla necessitatibus.
      </p>

      <div className={classes['get-started']}>
        <input value={value} onChange={onChangeHandler} className={classes['input']} type="email" />
        <button onClick={onClickHandler} className={classes['input']}>
          <h2>Get started for free</h2>
        </button>
      </div>

      {message && <h1 className={classes['message']} style={{ color: message === 'Email Recieved!' ? 'white' : 'red' }}>{message}</h1>}
    </div>
  );
}
