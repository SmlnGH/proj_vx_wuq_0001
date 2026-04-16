import React from 'react';

export const metadata = {
  title: 'Five-Element Fortune Network',
  description: 'High-end bilingual homepage for proj_vx_wuq_0001.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Keep lang as generic; / must render HTML for homepage checks.
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
