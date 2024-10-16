import React from 'react';
import './BigCoin.css';

function BigCoin({ handleCoinClick }) {
  return (
    <div className="coin-wrapper">
      {/* Clicking the coin increments the coin count by 2 */}
      <button
        className="coin"
        onClick={handleCoinClick}
      >
        <span className="visually-hidden">Add 2 coins</span>
        <img
          className="coin-image"
          alt=""
          src="https://sandpack-bundler.vercel.app/img/toonie.png"
        />
      </button>
    </div>
  );
}

export default BigCoin;
