import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [hasDecimal, setHasDecimal] = useState(false);

  const handleNumber = (number) => {
    if (display === '0' && number !== '.') {
      setDisplay(number);
    } else if (number === '.' && !hasDecimal) {
      setDisplay(display + number);
      setHasDecimal(true);
    } else if (number !== '.') {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator) => {
    setEquation(display + operator);
    setDisplay('0');
    setHasDecimal(false);
  };

  const handleEqual = () => {
    try {
      const finalEquation = equation + display;
      const result = Function('return ' + finalEquation)();
      setDisplay(Number(result.toFixed(8)).toString());
      setEquation('');
      setHasDecimal(result % 1 !== 0);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setHasDecimal(false);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setHasDecimal(false);
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="equation">{equation}</div>
        <div className="current">{display}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleNumber('7')}>7</button>
        <button onClick={() => handleNumber('8')}>8</button>
        <button onClick={() => handleNumber('9')}>9</button>
        <button onClick={() => handleOperator('+')} className="operator">+</button>
        <button onClick={() => handleNumber('4')}>4</button>
        <button onClick={() => handleNumber('5')}>5</button>
        <button onClick={() => handleNumber('6')}>6</button>
        <button onClick={() => handleOperator('-')} className="operator">-</button>
        <button onClick={() => handleNumber('1')}>1</button>
        <button onClick={() => handleNumber('2')}>2</button>
        <button onClick={() => handleNumber('3')}>3</button>
        <button onClick={() => handleOperator('*')} className="operator">×</button>
        <button onClick={() => handleNumber('0')}>0</button>
        <button onClick={() => handleNumber('.')}>.</button>
        <button onClick={handleEqual} className="equal">=</button>
        <button onClick={() => handleOperator('/')} className="operator">÷</button>
      </div>
    </div>
  );
}

export default Calculator;