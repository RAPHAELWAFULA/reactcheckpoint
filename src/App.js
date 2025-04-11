import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Don't forget to import bootstrap CSS
import PlayersList from './playersList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Players Card</h1>
      <PlayersList />
    </div>
  );
}
export default App;