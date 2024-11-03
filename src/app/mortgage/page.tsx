
"use client";
import React, { useState } from 'react';

export default function MortgageCalcPage() {
  const [loanAmount, setLoanAmount] = useState<number>(200000); // Default Loan Amount
  const [interestRate, setInterestRate] = useState<number>(5);  // Default Interest Rate
  const [loanTerm, setLoanTerm] = useState<number>(30); // Default Loan Term in years
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const calculatedPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    setMonthlyPayment(calculatedPayment);
  };

  return (
    <>
    <div className="flex flex-col mb-40 min-h-screen bg-gray-50 p-6 ">
     

      <div className="w-full bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-5xl font-bold mb-6">Mortgage Calculator</h2>
      <p className='text-gray-400 max-w-3xl mb-7'>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
        <div className="space-y-6">
          {/* Home Price Slider */}
          <div className="flex flex-col">
            <label htmlFor="loanAmount" className="text-gray-700 font-medium">Home Price</label>
            {/* Enforcing consistent formatting */}
            <p className="text-gray-700 mt-1 text-4xl">${loanAmount.toLocaleString('en-US')}</p>
            <input
              type="range"
              id="loanAmount"
              min="50000"
              max="1000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mt-1"
            />
            
          </div>

          {/* Interest Rate Slider */}
          <div className="flex flex-col">
            <label htmlFor="interestRate" className="text-gray-700 font-medium">Interest Rate (%)</label>
            <p className="text-gray-700 mt-1 text-4xl">{interestRate}%</p>
            <input
              type="range"
              id="interestRate"
              min="1"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-1"
            />
           
          </div>

          {/* Loan Term (years) */}
          <div className="flex flex-col">
            <label htmlFor="loanTerm" className="text-gray-700 font-medium">Loan Term (years)</label>
            <input
              type="number"
              id="loanTerm"
              className="p-3 border border-gray-300 rounded mt-1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              placeholder="Enter loan term"
            />
          </div>

          <button
            onClick={calculateMortgage}
            className="w-full mt-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
          >
            Calculate Payment
          </button>
        </div>

        {monthlyPayment !== null && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-700">Estimated Monthly Payment</h3>
            <p className="text-3xl font-bold text-blue-800 mt-2">${monthlyPayment.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
    {/* Footer Section */}
    <div className="footer-section flex justify-between ">
    <div className='flex flex-col text-left'>
      <p className='font-semibold text-3xl '>Want to continue with your pre-approval?</p>
      <p className='font-medium text-xl mt-2 '>You’ll be able to pick up right where you left off.</p>
      </div>
      <div className="footer-buttons">
          <button className="not-right-now m-1 mx-2">Not right now</button>
          <button className="yes-continue m-1 mx-2 ">Yes, continue</button>
      </div>
  </div>
  </>
  );
}
