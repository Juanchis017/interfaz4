import './App.css';
import React from "react";
import ItemMenu from './componentes/ItemMenu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Menú superior */}
        <ItemMenu />
        </div>
        
      )

  }
}

export default App;
