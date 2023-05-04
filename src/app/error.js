'use client';
import ErrorMessage from '@/global-components/ErrorMessage';
import { useEffect } from 'react';

function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <ErrorMessage href="/" reset={() => reset()} />
    </div>
  );
}

export default Error;
