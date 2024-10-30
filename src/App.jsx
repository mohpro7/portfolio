import React from 'react';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import './style.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      {/* Tu pourras ajouter d'autres sections ici plus tard */}
    </div>
  );
};

export default App;
