import React from 'react';
import './App.css';

//Los parametros props nos permiten recibir valores u objetos y debe colocarse entre llaves
/* function Helloworld(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
} */

//La clase hello world se combierte en un componente porque esta heredando de react
//Al no estar dentro de una funcion no podemos recibir el parametro props asi que
//agregamos this para usarlo como propiedad
class Helloworld extends React.Component{

  //La funcion del state es almacenar datos sobre el componente en donde se encuentra
  state = {
    show: true
  }

  //Podemos crear metodos dentro de la clase y llamarlos
  toggleShow = () => {
    this.setState({show: !this.state.show}) 
    //Agregrando un signo de admiracion le decimos que si la propiedad esta en true
    //que la cambie a false y viceversa.
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    }
    else{
      return <h1>
        There is no elements
        <button onClick={this.toggleShow}>
          Toggle Show
        </button>
        </h1>
    }
  }
}

//Creando un componente a traves de una funcion flecha
//const App = () => <div>This is my component <Helloworld/></div>

//Creando un componente mediante una clase
/*class App extends React.Component{
  render(){
    return <div>This is my component <Helloworld/></div>
  }
}*/

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello User" subtitle="lorem ispum"/> 
      <Helloworld mytext="This is a props test" subtitle="component 2"/>
      <Helloworld mytext="Hello Jorge" subtitle="component 3"/>
    </div>
  );
}

export default App;
