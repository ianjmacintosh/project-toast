import React from 'react';
const RadiosContext = React.createContext();

export function Radios({ children, id, name, value, onChange: callback }) {
  const data = { name, callback, value };

  return (<RadiosContext.Provider value={data}>{children}</RadiosContext.Provider>);
}

export function RadioOption({ group, value, children }) {
  const id = React.useId();
  const { name, callback, value: controlledValue } = React.useContext(RadiosContext);

  return (<label htmlFor={id}>
    <input
      type="radio"
      value={value}
      name={name}
      id={id}
      onChange={callback}
      checked={controlledValue === value}
    />
    {children}
  </label>)
}
