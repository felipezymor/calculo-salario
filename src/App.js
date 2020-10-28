import React, { Component } from 'react';
import Bar from './components/Bar';
import InputFullSalary from './components/InputFullSalary';
import InputNetSalary from './components/InputNetSalary';
import InputReadOnly from './components/InputReadOnly';
import {calculateSalaryFrom} from './components/salary';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class App extends Component {

  constructor() {

    super();

    this.state = {
      fullSalary: 1000
    }
  }

  handleFullSalaryChange = (newValue) => {
    this.setState({fullSalary: newValue});
  }

  render() {
    const { fullSalary } = this.state;

    const salaryObject = calculateSalaryFrom(fullSalary);

    const {baseINSS, discountINSS, baseIRPF, discountIRPF, percentINSS, percentIRPF, netSalary, percentNetSalary} = salaryObject;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1 style={{textAlign: "center"}}>Cálculo Salário</h1>
              <InputFullSalary id="fullSalary" currentValue={fullSalary} onSalaryChange={this.handleFullSalaryChange}/>
          </div>
        </div>
          <div className="row">
              <InputReadOnly label="Base INSS" value={baseINSS}/>
              <InputReadOnly label="Desconto INSS" value={discountINSS} percentage={percentINSS} color={COLOR_INSS}/>
              <InputReadOnly label="Base IRPF" value={baseIRPF}/>
              <InputReadOnly label="Desconto IRPF" value={discountIRPF}percentage={percentIRPF} color={COLOR_IRPF}/>
          </div>
            <div className="row">
            <InputNetSalary label="Salário líquido" value={netSalary} percentage={percentNetSalary} color={COLOR_NET_SALARY}/>              
            </div>

        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}> 
          <Bar value={percentINSS} color={COLOR_INSS} />
          <Bar value={percentIRPF} color={COLOR_IRPF} />
          <Bar value={percentNetSalary} color={COLOR_NET_SALARY} />
          </div>
      </div>
    );
  }
}
