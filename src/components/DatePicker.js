import React from 'react';

const DatePicker = (props) => {

    return (
        <div className="theDate">
            <h2>Pick A Date</h2>
            <label>Date: </label>
            <input id="date" type="date"></input>
        </div>
    );
};

export default DatePicker;