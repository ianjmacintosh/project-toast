import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';
import VisuallyHidden from '../VisuallyHidden';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {
        toasts.map(({ id, variant: currentVariant, message: currentMessage }) => {
          return (
            <li key={id} className={styles.toastWrapper}>
              <Toast
                id={id}
                variant={currentVariant}
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
