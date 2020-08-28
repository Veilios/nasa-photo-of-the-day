import React from 'react';
import { Alert } from 'reactstrap';

export default function DatePicker(props){

    return (
        <div className="theDate">
            <Alert>The Date Picker is currently down!</Alert>
            <h2>Pick A Date</h2>
            <label>Date: <input id="date" type="date"></input></label>
        </div>
    );
};
