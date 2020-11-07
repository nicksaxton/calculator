import React from 'react';

import Calculator from './Calculator';

const App = () => {
    return (
        <div className="container">
            <div className="columns is-centered is-vcentered is-mobile">
                <div className="column is-4-fullhd is-5-desktop is-7-tablet is-11-mobile">
                    <Calculator />
                </div>
            </div>
        </div>
    );
};

export default App;
