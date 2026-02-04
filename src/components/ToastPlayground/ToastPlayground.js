import React from 'react';

import Button from '../Button';
import { Radios, RadioOption } from '../Radios';
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([])
  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState("notice")

  const handleSubmit = (event) => {
    event.preventDefault();

    addToast({ message, variant })
  }

  const addToast = ({ message, variant }) => {
    const newToasts = [...toasts];

    newToasts.push({
      id: crypto.randomUUID(),
      message,
      variant
    })


    setMessage("")
    setVariant("notice")

    setToasts(newToasts)
  }

  const removeToast = (id) => {
    let newToasts = [...toasts].filter((toast) => toast.id !== id);

    setToasts(newToasts)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} removeToast={removeToast} />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value)
                }} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Radios
                name="variant"
                value={variant}
                onChange={(event) => {
                  setVariant(event.target.value)
                }}>
                {VARIANT_OPTIONS.map((variant) => <RadioOption value={variant} key={variant} remove={removeToast}>{variant}</RadioOption>)}
              </Radios>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
