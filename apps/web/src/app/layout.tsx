import React from "react";

export const metadata = {
  title: "Five-Element Fortune Network",
  description: "Minimal homepage for proj_vx_wuq_0001",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
