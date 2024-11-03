
import React from 'react';

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {children}
    </div>
  );
}