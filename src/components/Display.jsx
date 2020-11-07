import React from 'react';

const Display = ({ children }) => (
    <div className="field">
        <div className="control">
            <input
                className="input is-large has-text-right"
                readOnly
                type="text"
                value={children}
            />
        </div>
    </div>
);

export default Display;
