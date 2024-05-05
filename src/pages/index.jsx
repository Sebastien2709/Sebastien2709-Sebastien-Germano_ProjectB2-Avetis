import Link from "next/link";

const HomePage = () => (
  <div className="container">
    <div className="content">
      <h1 className="title">
        Bienvenue sur notre plateforme révolutionnaire de référencement pour
        boutiques !{" "}
      </h1>
      <p className="description">
        Vous êtes sur le point de découvrir un univers où les adresses prennent
        vie, où chaque boutique devient une destination incontournable pour une
        clientèle qui ne l'aurait peut-être jamais trouvée autrement. Notre
        mission est simple : connecter les boutiques avec une nouvelle clientèle
        avide de découvertes et d'expériences uniques. <br />
        En entrant dans notre site, vous rejoignez une communauté dynamique où
        vous pouvez non seulement découvrir de nouvelles adresses, mais aussi
        partager les vôtres avec le monde.
      </p>
      <div className="button-container">
        <button className="button">
          <Link href="/todos">Commencer !</Link>
        </button>
      </div>
    </div>
    <style jsx>{`
      .container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        max-width: 80%;
        text-align: center;
      }

      .title {
        font-size: 2.5em;
        margin-bottom: 20px;
      }

      .description {
        font-size: 1.2em;
        line-height: 1.6;
        margin-bottom: 30px;
      }

      .button-container {
        display: flex;
        justify-content: center;
      }

      .button {
        padding: 10px 20px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .button:hover {
        background-color: #45a049;
      }

      @media (max-width: 768px) {
        .title {
          font-size: 2em;
        }
        .description {
          font-size: 1em;
        }
      }

      @media (max-width: 480px) {
        .title {
          font-size: 1.5em;
        }
        .description {
          font-size: 0.9em;
        }
      }
    `}</style>
  </div>
);

export default HomePage;
