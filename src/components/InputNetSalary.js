import React, { Component } from 'react'
import { formatMoney, formatPercentage } from '../helpers/formatHelpers';

export default class InputNetSalary extends Component {
    render() {
        const {color = 'black', value, percentage = 0, label} = this.props;
        const formattedPercentage = percentage > 0 ? `(${formatPercentage(percentage)})` : '';
        const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;
        return (
            <div className="input-field col s12 m6 l3">
                <input readOnly value={formattedValue} id="inputNetSalary" style={{color, fontWeight: 'bold', fontSize: '25px'}} className="validate" />
                <label className="active" htmlFor="inputNetSalary">{label}</label>
            </div>
        )
    }
}
