import React from 'react';

export default function DatePicker(props){

    return (
        <div className="theDate">
            <h2>Pick A Date</h2>
            <label>Date: <input id="date" type="date"></input></label>
        </div>
    );
};
