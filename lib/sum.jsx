import React, {propTypes} from 'react';
import mathJs from 'mathjs';

export default class Sum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: '',
            secondValue: '',
            answerSum: ''
        }
    }

    calculateSum() {
        var firstVal = this.state.firstValue;
        var secVal = this.state.secondValue;

        var answerSum = mathJs.add(firstVal, secVal)
        var answerSumString = answerSum.toString()
        this.setState({
            answerSum: answerSumString
        })
    }

    render() {
        return (
                <form className="form-inline" name="sum">
                    <div className="form-group" style={{justifyContent: 'center', alignItems: 'center'}}>
                        <input onChange={(event) => this.setState({
                            firstValue: event.target.value
                        })} maxLength="2" className="form-control" id="first" style={{
                            width: 50,
                            marginLeft: 10
                        }} type="text" placeholder="First Value"/>
                    </div>
                    <div className="form-group" style={{justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{marginLeft: 20, fontSize: 40, marginRight: 10}}>+</span>
                    </div>    
                    <div className="form-group" style={{justifyContent: 'center', alignItems: 'center'}}>
                        <input onChange={(event) => this.setState({
                            secondValue: event.target.value
                        })} maxLength="2" className="form-control" id="third" style={{
                            width: 50,
                            marginLeft: 10
                        }} type="text" placeholder="Second Value"/>
                    </div>
                    <button id="sumButtom" onClick={this.calculateSum.bind(this)} type="button" style={{margin: 10}} className="btn btn-primary">Calculate</button>
                    { this.state.answerSum != '' ?
                        <label style={{marginLeft: 20}}>Answer: {this.state.answerSum}</label>
                        :
                        null
                    }
                </form>
        );
    }
}