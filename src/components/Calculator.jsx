import React, { useState } from 'react';

import Button from './Button';
import Display from './Display';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');

    return (
        <div className="box has-background-light">
            <Display>{currentValue}</Display>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button prominent>AC</Button>
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
                    <Button>7</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>8</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>9</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>&times;</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button>4</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>5</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>6</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>&minus;</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-quarter">
                    <Button>1</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>2</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>3</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>+</Button>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-one-half">
                    <Button>0</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button>.</Button>
                </div>
                <div className="column is-one-quarter">
                    <Button operator>=</Button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
