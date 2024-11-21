import style from "./about.module.css"

export default function contact() {
  return (
    <main className={style.background}>
      <div className={style.container1}>

      </div>

      <div className={style.container2}>
        <div className={style.title}>
          <h1>ABOUT </h1>
        </div>

        <div className={style.textCube}>
          <p className={style.text}>Nic is on a constant journey of redefinition as he expands his inter-disciplinary role as a music producer. By supporting, teaching and learning with countless creatives, Nicolas has fostered a deep connection with the creative process. Nic aims to act as the catalyst for you to realise your best ideas yet and to help you focus on what’s important: Your Sound.</p>
          <br />
          <p className={style.text}>Having worked in a multitude of different fields in the music industry, Nic offers a wide range of experience and expertise in all things music. Be it composition, implementation, production, mixing or mastering, Nic provides confident support and guidance for your next projects sonic needs.</p>
          <br />
          <p className={style.text}>If you are interested in working with Nic and his diverse network of collaborators, please feel free to reach out using the contact form below to enquire about his availability.
          </p>
          <p className={style.text2}>…and what’s</p>
          <p className={style.text3}>your sound?</p>
        </div>
      </div>
    </main>
  );
}
