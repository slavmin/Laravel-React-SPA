import React from 'react';

export default function FullPageSpinner() {
  const containerStyle = {
    minHeight: '50vh',
  };
  const spinnerStyle = {
    width: '3rem',
    height: '3rem',
  };

  return (
    <div className="col-12 d-flex align-items-center justify-content-center" style={containerStyle}>
      <div className="spinner-grow text-secondary" style={spinnerStyle} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
