import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {
        toasts.map(({ id, variant: currentVariant, message: currentMessage }) => {
          return (
            <li className={styles.toastWrapper}>
              {/* <Toast variant="notice">Example notice toast</Toast> */}
              <Toast
                key={id}
                id={id}
                variant={currentVariant}
                clearToast={() => {
                  removeToast(id)
                }}
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
