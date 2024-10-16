import React from 'react';

import BigCoin from './BigCoin';

function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);

  const handleCoinClick = () => {
    setNumOfCoins(prevCoins => prevCoins + 2);
  };

  return (
    <div className="wrapper">
      <main>
        <BigCoin handleCoinClick={handleCoinClick}/>
      </main>
      <footer>
        Your coin balance:
        <strong>${numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;