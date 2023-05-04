'use client';
import ErrorMessage from '@/global-components/ErrorMessage';
import { useEffect } from 'react';

function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <html>
      <body>
        <div>
          <ErrorMessage href="/" reset={() => reset()} />
        </div>
      </body>
    </html>
  );
}

export default GlobalError;
