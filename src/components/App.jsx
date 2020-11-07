import React from 'react';

import Calculator from './Calculator';

const App = () => {
    return (
        <section className="hero is-dark is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-fullhd is-5-desktop is-7-tablet">
                            <Calculator />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default App;
