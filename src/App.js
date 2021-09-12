import React from 'react';
import './App.css';

//Los parametros props nos permiten recibir valores u objetos y debe colocarse entre llaves
function Helloworld(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
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
