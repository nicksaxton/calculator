import React, { useState } from 'react';

import Button from './Button';
import Display from './Display';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');

    const handleClearClick = () => {
        setCurrentValue('0');
    };

    const handleDecimalClick = () => {
        if (currentValue.indexOf('.') === -1) {
            setCurrentValue(currentValue + '.');
        }
    };

    const handleNumberClick = (number) => {
        if (currentValue === '0') {
            setCurrentValue(number.toString());
        } else {
            setCurrentValue(currentValue + number.toString());
        }
    };

    return (
        <div className="box has-background-light">
            <Display>{currentValue}</Display>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button prominent onClick={handleClearClick}>
                        AC
                    </Button>
                </div>
                <div className="column is-one-quarter">
                    <Button prominent>&plusmn;</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button prominent>%</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>&divide;</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>7</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>8</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>9</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>&times;</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>4</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>5</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>6</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>&minus;</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>1</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>2</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleNumberClick}>3</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>+</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-half">
                    <Button onClick={handleNumberClick}>0</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button onClick={handleDecimalClick}>.</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>=</Button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
