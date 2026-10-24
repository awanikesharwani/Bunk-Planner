import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? ' Light' : 'Dark'}
    </button>
  );
}

export default ThemeToggle;