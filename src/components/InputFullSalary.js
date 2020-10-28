import React, { Component } from 'react'

export default class InputFullSalary extends Component {
    handleInputChange = (event) => {
        const newValue = +event.target.value;
        this.props.onSalaryChange(newValue);
    }
    render() {

        const {currentValue} = this.props;
        return (
            <div className="input-field col s12">
                <label className="active" htmlFor="inputFullSalary">Salário Bruto</label>
                <input autoFocus type="number" id="inputFullSalary" min='1000' step='50' onChange={this.handleInputChange} value={currentValue} />
            </div>
        )
}
}
