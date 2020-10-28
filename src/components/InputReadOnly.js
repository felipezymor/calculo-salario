import React, { Component } from 'react'
import { formatMoney, formatPercentage } from '../helpers/formatHelpers';

export default class InputReadOnly extends Component {
    render() {
        const {color = 'black', value, percentage = 0, label} = this.props;
        const formattedPercentage = percentage > 0 ? `(${formatPercentage(percentage)})` : '';
        const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;
        const id = 'input' + label;
        return (
            <div className="input-field col s12 m6 l3">
                <input readOnly value={formattedValue} id={id} style={{color, fontWeight: 'bold'}} className="validate" />
                <label className="active" htmlFor={id}>{label}</label>
            </div>
        )
    }
}
