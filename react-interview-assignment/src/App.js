import React from 'react';
import './App.css';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <Table api='https://jsonplaceholder.typicode.com/users'/>
    </div>
  );
}

export default App;
