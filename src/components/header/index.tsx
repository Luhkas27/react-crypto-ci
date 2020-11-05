import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import Coin from '../coin';

import './styles.css';

interface HeaderProps {
  onSelected: (coin: string) => void;
}

interface Price {
  [key: string]: { oldPrice: number; currentPrice: number };
}

const ALL_PRICES: Price = {
  BTC: {
    oldPrice: 0,
    currentPrice: 0,
  },
  LTC: {
    oldPrice: 0,
    currentPrice: 0,
  },
};

const Header = ({ onSelected }: HeaderProps) => {
  const [prices, setPrices] = useState<Price>(ALL_PRICES);

  useEffect(() => {
    const intervals = Object.keys(ALL_PRICES).map((coin) => {
      return setInterval(() => {
        api.get(`price?fsym=${coin}&tsyms=BRL`).then((response) => {
          setPrices((prevState) => {
            if (prevState[coin].currentPrice === response.data.BRL) {
              return prevState;
            }
            return {
              ...prevState,
              [coin]: {
                oldPrice: prevState[coin].currentPrice,
                currentPrice: response.data.BRL,
              },
            };
          });
        });
      }, 5000);
    });
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="Header">
      {Object.keys(prices).map((coin) => (
        <div onClick={() => onSelected(coin)}>
          <Coin
            coin={coin}
            oldPrice={prices[coin].oldPrice}
            currentPrice={prices[coin].currentPrice}
          />
        </div>
      ))}
    </div>
  );
};

export default Header;
