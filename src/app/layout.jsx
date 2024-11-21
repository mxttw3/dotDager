'use client'
import "./globals.css";
import style from "./layout.module.css";


export default function RootLayout({ children }) {

  return (
    <html>
      <body className={style.body}>
        {children}a
      </body>
    </html >
  );
}
