import React from 'react';

export const EmailForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Need more time to think?</h3>
      <p>Email this piece to yourself or drop a hint.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: '10px' }} />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px' }}>Submit</button>
      </form>
    </div>
  );
};
