import React from 'react';
import {Line} from 'react-chartjs-2';

const graphData = {
  labels: [],
  datasets: [
    {
      label: 'Mortgage Balance',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(0,140,255,0.4)',
      borderColor: 'rgba(0,140,255,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0,140,255,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0,140,255,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
    {
      label: 'Interest Paid',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(249,31,116,0.4)',
      borderColor: 'rgba(249,31,116,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(249,31,116,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(249,31,116,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
    {
      label: 'Capital Repaid',
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
    },
  ]
};
const graphOption = {
	scales: {
       	yAxes: [{
        	ticks: {
           		callback: function(value, index, values) {
             		return value.toLocaleString('en-GB', {style:'currency', currency:'GBP'});
           		}
         	}
       	}]
    }
}

export class PaymentGraph extends React.Component {
	render() {
		graphData.labels = [];
		graphData.datasets[0].data = [];
		graphData.datasets[1].data = [];
		graphData.datasets[2].data = [];
  		for(let i = 0; i <= this.props.mortgageTerm; i++) {
			graphData.labels.push(i);
			graphData.datasets[0].data.push(this.props.yearlyPayments[i].outstandingBalance);
			graphData.datasets[1].data.push(this.props.yearlyPayments[i].interestPaidToDate);
			graphData.datasets[2].data.push(this.props.yearlyPayments[i].capitalRepaidToDate);
		}
    	return(
    		<div className="graph-container">
    			<Line 
    				data={graphData}
    				options={graphOption}
    			/>
    		</div>
    	)
  	}
}