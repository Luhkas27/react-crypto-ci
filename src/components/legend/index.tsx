import React from 'react';

import './styles.css';

interface LegendProps {
  legend: string;
}

const Legend = ({ legend }: LegendProps) => {
  return <div className="Legend">{legend}</div>;
};

export default Legend;
