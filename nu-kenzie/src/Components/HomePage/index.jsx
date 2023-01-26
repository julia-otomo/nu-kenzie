import logo from "../../assets/home-picture-mobile.svg";
import "../HomePage/index.css";

export function HomePage({ changeHomePage }) {
  function goToDashboard() {
    return changeHomePage("dashboard");
  }

  return (
    <div className="homePage__container">
      <div className="homePage__container--withoutPicture">
        <h1>
          <span>Nu</span> Kenzie
        </h1>

        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onClick={goToDashboard}>Iniciar</button>
      </div>

      <div className="homePage__container--picture">
        <img src={logo} />
      </div>
    </div>
  );
}
