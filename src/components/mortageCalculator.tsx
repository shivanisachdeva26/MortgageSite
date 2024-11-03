"use client"
import React, { useState } from 'react';

const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(2060800);
  const [downPayment, setDownPayment] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(6500);
  const [monthlyDebt, setMonthlyDebt] = useState<number>(2500);

  const calculateMonthlyPayment = (): number => {
    const P = homePrice - downPayment;
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const calculateDTI = (): number => {
    const monthlyPayment = calculateMonthlyPayment();
    const totalMonthlyDebt = monthlyDebt + monthlyPayment;
    return (totalMonthlyDebt / monthlyIncome) * 100;
  };

  const monthlyPayment = calculateMonthlyPayment().toFixed(2);
  const dti = calculateDTI().toFixed(2);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Mortgage Calculator</h2>
      
      <div>
        <label>Home Price: </label>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
        />
      </div>
      
      <div>
        <label>Down Payment: </label>
        <input
          type="number"
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
        />
      </div>
      
      <div>
        <label>Interest Rate (%): </label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          step="0.1"
        />
      </div>
      
      <div>
        <label>Loan Term (years): </label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
        />
      </div>

      <div>
        <h3>Monthly Payment: ${monthlyPayment}/mo</h3>
      </div>

      <h3>Debt-to-Income (DTI) Ratio</h3>
      
      <div>
        <label>Monthly Gross Income: </label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
        />
      </div>
      
      <div>
        <label>Monthly Debt Payments: </label>
        <input
          type="number"
          value={monthlyDebt}
          onChange={(e) => setMonthlyDebt(Number(e.target.value))}
        />
      </div>

      <div>
        <h3>DTI Ratio: {dti}%</h3>
      </div>
    </div>
  );
}

export default MortgageCalculator;