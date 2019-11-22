import React from 'react';
import Axios from 'axios';
import ChartClass from './ChartClass.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: [],
      monthData: [],
    };
    this.getPrices = this.getPrices.bind(this);
  }


  componentDidMount() {
    this.getPrices();
  }

  getPrices() {
    Axios.get('/getPrices')
      .then((response) => {
        // console.log(response.data);
        let price = [];
        let month = [];
        for(var key in response.data) {
          month.push(key);
          price.push(response.data[key]);
        }
        this.setState({ priceData: price, monthData: month }, () => {
          console.log('state data: ', this.state);
        });
      })
      .catch(error => {
        console.log(error);
      })
  };


  render() {
    return (
      <div>
        <h1>Bitcoin Historical Price Data</h1>
        <div id="myChart">
          <ChartClass priceData={this.state.priceData} monthData={this.state.monthData} />
        </div>
      </div>
    );
  }
}

export default App;
