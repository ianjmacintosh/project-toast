import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)

    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  })

  return (
    <ToastContext.Provider value={{ toasts, setToasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>);

  function handleKeyPress({ key }) {
    if (key === "Escape") clearToasts()
  }

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
