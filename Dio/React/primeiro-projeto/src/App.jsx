import React from "react";
import Navbar from "./components/navbar/navbar";


//Componente é uma classe que herda a classe component do React e retorna HTML dentro do método render.

class App extends React.Component {

  render() {
    return <Navbar />;
  }
}

export default App;
