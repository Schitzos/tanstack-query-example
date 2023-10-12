'use client'
import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong inner error!</h2>
      <button
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
