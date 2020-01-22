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
                label: 'Bitcoin Price in USD',
                data: priceData,
              },
            ],
          }
        }
        options={
          {
            xAxisID: '$',
          }
        }
      />
    </div>
  );
}

export default ChartClass;
