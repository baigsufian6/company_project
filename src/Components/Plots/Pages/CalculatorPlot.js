import React, { useState, useEffect } from 'react';
import './CalculatorPlot.css';
import Footer from '../FooterPlot';

const Calculator = () => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const [plotPrice, setPlotPrice] = useState(0);
  const [dimension, setDimension] = useState(0);
  const [srValue, setSRValue] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [cornerPlotPrice, setCornerPlotPrice] = useState(0);
  const [registrationFee, setRegistrationFee] = useState(0);
  const [emi5Years, setEMI5Years] = useState(0);
  const [emi10Years, setEMI10Years] = useState(0);
  const [emi15Years, setEMI15Years] = useState(0);
  const [facing, setFacing] = useState('one-facing'); // State for Plot Facing

  const calculateValues = () => {
    const totalPrice = plotPrice * dimension;
    const loanAmt = (srValue * dimension * 0.8).toFixed(2);
    const registration = ((srValue * dimension * 0.066) + 40000).toFixed(2);

    // Down Payment Calculation: total price minus loan amount
    const downPaymentAmount = (totalPrice - loanAmt).toFixed(2);

    // Corner Plot Price Calculation: only if the plot is two-facing
    let cornerPlotAmt = 0;
    if (facing === 'two-facing') {
      cornerPlotAmt = (srValue * dimension * 0.1).toFixed(2);
    }

    // EMI Calculation formula: EMI = [P * r * (1+r)^n] / [(1+r)^n-1]
    const interestRate = 0.09 / 12; // Example 9% annual interest rate
    const emi5 = (loanAmt * interestRate * Math.pow(1 + interestRate, 60)) / (Math.pow(1 + interestRate, 60) - 1);
    const emi10 = (loanAmt * interestRate * Math.pow(1 + interestRate, 120)) / (Math.pow(1 + interestRate, 120) - 1);
    const emi15 = (loanAmt * interestRate * Math.pow(1 + interestRate, 180)) / (Math.pow(1 + interestRate, 180) - 1);

    setLoanAmount(loanAmt);
    setRegistrationFee(registration);
    setDownPayment(downPaymentAmount);
    setCornerPlotPrice(cornerPlotAmt);
    setEMI5Years(emi5.toFixed(2));
    setEMI10Years(emi10.toFixed(2));
    setEMI15Years(emi15.toFixed(2));
  };

  return (
    <>
      <div className="calculator-container">
        <h2>Plot Price and Loan Calculator</h2>
        <div className="calculator-form">
          <label>
            Plot Facing:
            <select value={facing} onChange={(e) => setFacing(e.target.value)}>
              <option value="one-facing">One-Facing</option>
              <option value="two-facing">Two-Facing</option>
            </select>
          </label>
          <label>
            Plot Price per Unit:
            <input
              type="number"
              value={plotPrice}
              onChange={(e) => setPlotPrice(parseFloat(e.target.value) || 0)}
              min="0"
            />
          </label>
          <label>
            Dimension (in square feet):
            <input
              type="number"
              value={dimension}
              onChange={(e) => setDimension(parseFloat(e.target.value) || 0)}
              min="0"
            />
          </label>
          <label>
            SR Value:
            <input
              type="number"
              value={srValue}
              onChange={(e) => setSRValue(parseFloat(e.target.value) || 0)}
              min="0"
            />
          </label>
          <button onClick={calculateValues} className='alra-btn'>Calculate</button>
        </div>
        
        <h3>Results:</h3>
        <div className="result-row">
          <div className="result-item">
            <strong>Total Plot Price:</strong> ₹ {(plotPrice * dimension).toFixed(2)}
          </div>
          <div className="result-item">
            <strong>Loan Amount:</strong> ₹ {loanAmount}
          </div>
          <div className="result-item">
            <strong>Down Payment:</strong> ₹ {downPayment}
          </div>
          {facing === 'two-facing' && (
            <div className="result-item">
              <strong>Corner Plot Price (10% on SR value):</strong> ₹ {cornerPlotPrice}
            </div>
          )}
          <div className="result-item">
            <strong>Registration Fee:</strong> ₹ {registrationFee}
          </div>
        </div>
        <div className="result-row">
          <div className="result-item">
            <strong>EMI for 5 Years:</strong> ₹ {emi5Years} per month
          </div>
          <div className="result-item">
            <strong>EMI for 10 Years:</strong> ₹ {emi10Years} per month
          </div>
          <div className="result-item">
            <strong>EMI for 15 Years:</strong> ₹ {emi15Years} per month
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;