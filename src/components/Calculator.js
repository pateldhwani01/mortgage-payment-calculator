import React, {useState, useEffect} from 'react';
import {HeaderFigures} from './HeaderFigures';
import {CalculatorControls} from './CalculatorControls';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';

export const Calculator = () => {
	const [depositAmount, setDepositAmount] = useState(72000);
	const [purchasingHousePrice, setPurchasingHousePrice] = useState(285000);
	const [amountToBorrow, setAmountToBorrow] = useState(213000);
	const [mortgageTerm, setMortgageTerm] = useState(25);
	const [interestRate, setInterestRate] = useState(1.8);
	const [monthlyPayment, setMonthlyPayment] = useState(882);
	const [totalRepaid, setTotalRepaid] = useState(264663);
	const [totalInterestPaid, setTotalInterestPaid] = useState(51663);
	const [yearlyPayments, setYearlyPayments] = useState([{"year":0,"outstandingBalance":213000,"interestPaid":0,"interestPaidToDate":0,"principalRepaid":0,"principalRepaidToDate":0},{"year":1,"outstandingBalance":206191.44,"interestPaid":3778.01,"interestPaidToDate":3778.01,"principalRepaid":6808.56,"principalRepaidToDate":6808.56},{"year":2,"outstandingBalance":199259.31,"interestPaid":3654.44,"interestPaidToDate":7432.45,"principalRepaid":6932.13,"principalRepaidToDate":13740.69},{"year":3,"outstandingBalance":192201.36,"interestPaid":3528.63,"interestPaidToDate":10961.08,"principalRepaid":7057.95,"principalRepaidToDate":20798.64},{"year":4,"outstandingBalance":185015.32,"interestPaid":3400.53,"interestPaidToDate":14361.61,"principalRepaid":7186.04,"principalRepaidToDate":27984.68},{"year":5,"outstandingBalance":177698.86,"interestPaid":3270.11,"interestPaidToDate":17631.72,"principalRepaid":7316.46,"principalRepaidToDate":35301.14},{"year":6,"outstandingBalance":170249.6,"interestPaid":3137.32,"interestPaidToDate":20769.05,"principalRepaid":7449.25,"principalRepaidToDate":42750.4},{"year":7,"outstandingBalance":162665.16,"interestPaid":3002.12,"interestPaidToDate":23771.17,"principalRepaid":7584.45,"principalRepaidToDate":50334.84},{"year":8,"outstandingBalance":154943.05,"interestPaid":2864.47,"interestPaidToDate":26635.64,"principalRepaid":7722.1,"principalRepaidToDate":58056.95},{"year":9,"outstandingBalance":147080.8,"interestPaid":2724.32,"interestPaidToDate":29359.97,"principalRepaid":7862.25,"principalRepaidToDate":65919.2},{"year":10,"outstandingBalance":139075.86,"interestPaid":2581.63,"interestPaidToDate":31941.59,"principalRepaid":8004.95,"principalRepaidToDate":73924.14},{"year":11,"outstandingBalance":130925.63,"interestPaid":2436.34,"interestPaidToDate":34377.94,"principalRepaid":8150.23,"principalRepaidToDate":82074.37},{"year":12,"outstandingBalance":122627.48,"interestPaid":2288.42,"interestPaidToDate":36666.36,"principalRepaid":8298.15,"principalRepaidToDate":90372.52},{"year":13,"outstandingBalance":114178.72,"interestPaid":2137.82,"interestPaidToDate":38804.18,"principalRepaid":8448.76,"principalRepaidToDate":98821.28},{"year":14,"outstandingBalance":105576.63,"interestPaid":1984.48,"interestPaidToDate":40788.66,"principalRepaid":8602.09,"principalRepaidToDate":107423.37},{"year":15,"outstandingBalance":96818.41,"interestPaid":1828.36,"interestPaidToDate":42617.02,"principalRepaid":8758.22,"principalRepaidToDate":116181.59},{"year":16,"outstandingBalance":87901.24,"interestPaid":1669.4,"interestPaidToDate":44286.42,"principalRepaid":8917.17,"principalRepaidToDate":125098.76},{"year":17,"outstandingBalance":78822.23,"interestPaid":1507.56,"interestPaidToDate":45793.99,"principalRepaid":9079.01,"principalRepaidToDate":134177.77},{"year":18,"outstandingBalance":69578.45,"interestPaid":1342.79,"interestPaidToDate":47136.77,"principalRepaid":9243.79,"principalRepaidToDate":143421.55},{"year":19,"outstandingBalance":60166.89,"interestPaid":1175.02,"interestPaidToDate":48311.79,"principalRepaid":9411.56,"principalRepaidToDate":152833.11},{"year":20,"outstandingBalance":50584.52,"interestPaid":1004.21,"interestPaidToDate":49316,"principalRepaid":9582.37,"principalRepaidToDate":162415.48},{"year":21,"outstandingBalance":40828.24,"interestPaid":830.29,"interestPaidToDate":50146.29,"principalRepaid":9756.28,"principalRepaidToDate":172171.76},{"year":22,"outstandingBalance":30894.89,"interestPaid":653.22,"interestPaidToDate":50799.52,"principalRepaid":9933.35,"principalRepaidToDate":182105.11},{"year":23,"outstandingBalance":20781.26,"interestPaid":472.94,"interestPaidToDate":51272.46,"principalRepaid":10113.63,"principalRepaidToDate":192218.74},{"year":24,"outstandingBalance":10484.07,"interestPaid":289.39,"interestPaidToDate":51561.85,"principalRepaid":10297.19,"principalRepaidToDate":202515.93},{"year":25,"outstandingBalance":0,"interestPaid":102.5,"interestPaidToDate":51664.35,"principalRepaid":10484.07,"principalRepaidToDate":213000}]);

	const handleMortgageDataChange = (depositAmount, purchasingHousePrice, mortgageTerm, interestRate) => {

		//Set initial values for the whole mortgage term
		const amountToBorrow = purchasingHousePrice - depositAmount;
		const monthlyPayment = ((interestRate / 100 / 12)*amountToBorrow) / (1 - (Math.pow(( 1+ (interestRate / 100 / 12)),((0 - mortgageTerm) * 12))));
		const totalRepaid = monthlyPayment * 12 * mortgageTerm;
		const totalInterestPaid = totalRepaid - amountToBorrow;

		//Set initial values for loop to calculate yearly figures
		let yearDataObject = [{
			year: 0,
			outstandingBalance: amountToBorrow,
			interestPaid: 0,
			interestPaidToDate: 0,
			principalRepaid: 0,
			principalRepaidToDate: 0
		}];
		let outstandingBalance = amountToBorrow;
		let interestPaidToDate = 0;
		let principalRepaidToDate = 0;

		//Loop each year of the mortgage term
		for(let i = 1; i <= mortgageTerm; i++) {

			let monthInterestPaid = 0;
			let interestPaidMonthlyToYearlyIncrementer = 0;
			let monthPrincipalPaid = 0;
			let monthlyPrincipalRepaidToYearlyIncrementer = 0;

			//loop each month of the year as interest is calculated monthly
			for(let j = 0; j < 12; j++) {
				monthInterestPaid = outstandingBalance * interestRate / 100 / 12;
				interestPaidMonthlyToYearlyIncrementer = interestPaidMonthlyToYearlyIncrementer + monthInterestPaid;
				monthPrincipalPaid = monthlyPayment - monthInterestPaid;
				monthlyPrincipalRepaidToYearlyIncrementer = monthlyPrincipalRepaidToYearlyIncrementer + monthPrincipalPaid;
				outstandingBalance = outstandingBalance - monthPrincipalPaid;
			}

			interestPaidToDate = interestPaidToDate + interestPaidMonthlyToYearlyIncrementer;
			principalRepaidToDate = principalRepaidToDate + monthlyPrincipalRepaidToYearlyIncrementer;

			//There's always around £10 left at the end which forces the fraph to go into minus. This just rounds the last figure off at £0.00.
			if(i === mortgageTerm) {
				outstandingBalance = 0;
			}

			yearDataObject.push({
				year: i,
				outstandingBalance: parseFloat(outstandingBalance.toFixed(2)),
				interestPaid: parseFloat(interestPaidMonthlyToYearlyIncrementer.toFixed(2)),
				interestPaidToDate: parseFloat(interestPaidToDate.toFixed(2)),
				principalRepaid: parseFloat(monthlyPrincipalRepaidToYearlyIncrementer.toFixed(2)),
				principalRepaidToDate: parseFloat(principalRepaidToDate.toFixed(2))
			});	
		}

		setDepositAmount(depositAmount);
		setPurchasingHousePrice(purchasingHousePrice);
		setAmountToBorrow(amountToBorrow);
		setMortgageTerm(mortgageTerm);
		setInterestRate(interestRate);
		setMonthlyPayment(monthlyPayment);
		setTotalRepaid(totalRepaid);
		setTotalInterestPaid(totalInterestPaid);
		setYearlyPayments(yearDataObject);

	}

	useEffect(() => {
		handleMortgageDataChange(depositAmount, purchasingHousePrice, mortgageTerm, interestRate);
	},[depositAmount, purchasingHousePrice, mortgageTerm, interestRate]);

	return(
		<div>
			<HeaderFigures 
				amountToBorrow={amountToBorrow}
				monthlyPayment={monthlyPayment}
				totalRepaid={totalRepaid}
				totalInterestPaid={totalInterestPaid}
			/>
			<CalculatorControls 
				handleMortgageDataChange={handleMortgageDataChange} 
				depositAmount={depositAmount}
				purchasingHousePrice={purchasingHousePrice}
				mortgageTerm={mortgageTerm}
				interestRate={interestRate}
			/>
			<PaymentGraph
				mortgageTerm={mortgageTerm}
				yearlyPayments={yearlyPayments}
			/>
			<PaymentTable
				amountToBorrow={amountToBorrow}
				yearlyPayments={yearlyPayments}
			/>
		</div>
	);

}