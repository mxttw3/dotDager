'use client'
import style from "./page.module.css"
import Image from "next/image"
import nicstormLogo from "../assets/nicstormLogo.png"

export default function Home() {
  return (
    <main className={style.background}>
      <div>
        <Image
          src={nicstormLogo}
          className={style.logo}
          alt="Nicstorm Logo"
        />
      </div>
    </main>
  );
}
