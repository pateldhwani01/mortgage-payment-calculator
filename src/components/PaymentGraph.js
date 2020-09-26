import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Mortgage Balance',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }
  ]
};

export class PaymentGraph extends React.Component {
	render() {
		data.labels = [];
		data.datasets[0].data = [];
  		for (let i = 0; i < this.props.mortgageTerm; i++) {
			data.labels.push(i);
			data.datasets[0].data.push(this.props.yearlyPayments[i].outstandingBalance);
		}
    	return (
    		<div className="graph-container">
    			<Line 
    				data={data}
    			/>
    		</div>
    	)
  	}
}