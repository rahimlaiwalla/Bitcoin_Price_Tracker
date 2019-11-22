import React from 'react';
import { Line } from 'react-chartjs-2';

function ChartClass(props) {
  console.log('props chart class data: ', props.priceData)
  let priceData = props.priceData
  return(
    <div>
      <Line
        data={
          {
            labels: props.monthData,
            datasets: [
              {
                label: 'Bitcoin Price Trend',
                data: priceData,
              },
            ],
          }
        }
      />
    </div>
  );
}

export default ChartClass;
