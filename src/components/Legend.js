import React from 'react';
import '../styles/App.css';

export function Legend(props) {
  return (
    <div className="LegendRow">
      <div className="LegendSection">
        <div className="CarColorSquare">
        </div>
        <div className="LegendTitle"><h3>- Car</h3></div>
      </div>
      <div className="LegendSection">
        <div className="GasColorSquare">
        </div>
        <div className="LegendTitle"><h3>- Gas</h3></div>
      </div>
      <div className="LegendSection">
        <div className="RentColorSquare">
        </div>
        <div className="LegendTitle"><h3>- Rent</h3></div>
      </div>
      <div className="LegendSection">
        <div className="FoodColorSquare">
        </div>
        <div className="LegendTitle"><h3>- Food</h3></div>
      </div>
      <div className="LegendSection">
        <div className="RepairsColorSquare">
        </div>
        <div className="LegendTitle"><h3>- Repairs</h3></div>
      </div>
      <div className="LegendSection">
        <div className="UtilitiesColorSquare">
        </div>
        <div className="LegendTitle"><h3>- Utilities</h3></div>
      </div>
    </div>
  );
}