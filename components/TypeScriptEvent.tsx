import { ChangeEvent, useState } from 'react';

export default function TypescriptEvents() {
  const [name, setName] = useState('');
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }
  return (
    <div>
      <input
        value={name}
        // this is no problem - the function is inline
        onChange={(event) => {
          setName(event.currentTarget.value);
        }}
      />
      <input value={name} onChange={handleChange} />
    </div>
  );
}
