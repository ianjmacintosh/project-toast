import React from 'react';
import useKeyBinding from '../../hooks/useKeyBinding';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useKeyBinding("Escape", () => { clearToasts() })

  return (
    <ToastContext.Provider value={{ toasts, setToasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>);

  function clearToasts() {
    setToasts([]);
  }

  function addToast({ message, variant }) {
    const newToasts = [...toasts];

    newToasts.push({
      id: crypto.randomUUID(),
      message,
      variant
    })

    setToasts(newToasts)
  }

  function removeToast(id) {
    let newToasts = [...toasts].filter((toast) => toast.id !== id);

    setToasts(newToasts)
  }
}

export default ToastProvider;
