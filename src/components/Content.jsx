
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Content() {
  return (
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>
  );
}
