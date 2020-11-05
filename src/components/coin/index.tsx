import React from 'react';

import './styles.css';

interface CoinProps {
  coin: string;
  oldPrice: number;
  currentPrice: number;
}

const Coin = ({ coin, oldPrice, currentPrice }: CoinProps) => {
  const classes = ['Coin'];

  if (oldPrice < currentPrice) {
    classes.push('up');
  }

  if (oldPrice > currentPrice) {
    classes.push('down');
  }
  return (
    <div className={classes.join(' ')}>
      <span>{coin}</span>
      <span>R$ {currentPrice.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
