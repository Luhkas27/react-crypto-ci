import React, { useState } from 'react';
import Chart from '../../components/chart';
import Header from '../../components/header';

import './styles.css';

const CryptoScreen = () => {
  const [coinSelected, setCoinSelected] = useState('BTC');
  return (
    <div className="App">
      <Header onSelected={(coin) => setCoinSelected(coin)} />
      <Chart coin={coinSelected} />
    </div>
  );
};

export default CryptoScreen;
