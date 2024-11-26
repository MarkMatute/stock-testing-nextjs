import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "!Stocks",
  description: "Stocks new dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          <div className="w-64 bg-gray-800 text-white">
            <div className="p-4">
              <a className="text-2xl font-bold">!Stocks</a>
            </div>
            <ul className="menu p-4">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="navbar bg-base-100">
              <div className="flex-1">
                <a className="btn btn-ghost text-xl">Welcome!</a>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a>Link</a>
                  </li>
                  <li>
                    <details>
                      <summary>Parent</summary>
                      <ul className="bg-base-100 rounded-t-none p-2">
                        <li>
                          <a>Link 1</a>
                        </li>
                        <li>
                          <a>Link 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1 p-6 bg-gray-100">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
