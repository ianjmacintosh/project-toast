import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {
        toasts.map(({ id, variant: currentVariant, message: currentMessage }) => {
          return (
            <li key={id} className={styles.toastWrapper}>
              <Toast
                id={id}
                variant={currentVariant}
                clearToast={() => removeToast(id)}
              >
                {currentMessage}
              </Toast>
            </li>)
        })
      }
    </ol>
  );
}

export default ToastShelf;
