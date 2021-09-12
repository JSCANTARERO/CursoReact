import React from 'react';
import './App.css';

function Helloworld(){
  return(
    <div id="hello">Hello World</div>
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
    <div>This is my component: <Helloworld/></div>
  );
}

export default App;
