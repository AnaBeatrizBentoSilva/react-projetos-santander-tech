import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1img from "./assets/img/article1.png";
import article2img from "./assets/img/article2.png";
import article3img from "./assets/img/article3.png";
import { Counter } from "./components/Counter/Counter";
import { Form } from "./components/Form/Form"

//Componente em classe é uma classe que herda a classe Componente do React, e retorna HTML dentro do método render
class App extends React.Component {
  //Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnall={article1img}/>
          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnall={article2img}/>
          <Article title="36 Days of Malayalam type" provider="Spaceflight Now" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnall={article3img}/>
          <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnall={article1img}/>
        </section>
        <Counter />
        <Form />
      </>
    );
  }
}

export default App;
