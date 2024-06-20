import React from "react";
import logoImg from "../../assets/logo.PNG";
import "./styles.css";

class Navbar extends React.Component {
  
  render() {
    return (

      <div>
        <header>
          <nav id="navbar">
            <div className="nav-brand">
              <img src={logoImg} alt="" />
              <h1>Space FLight News</h1>
            </div>
            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About us</a></li>
            </ul>
          </nav>



        </header>

        <h1>Aprendendo React</h1>
        <p>Isso aqui é um paragrafo</p>
      </div>

    );
  }
}

export default Navbar;